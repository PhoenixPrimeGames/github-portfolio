/**
 * Explainable multinomial Naive Bayes text classifier.
 * The model is trained from a small, curated example corpus in the browser.
 * This is a genuine supervised classifier, not a chatbot or a large language model.
 */
const STOPWORDS = new Set('a an and are as at be been but by can could do does for from has have i in into is it its me my of on or our the their them there these this to was we were when where which while will with you your after before every even just no not any some something someone one two'.split(' '));

export function tokenize(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/wi[\s-]?fi/g, 'wifi')
    .replace(/two[\s-]?factor/g, 'twofactor')
    .replace(/sign[\s-]?in/g, 'signin')
    .match(/[a-z][a-z0-9]+/g)?.filter(word => !STOPWORDS.has(word)) || [];
}

export function train(corpus) {
  if (!Array.isArray(corpus) || !corpus.length) throw new Error('Training corpus is empty');
  const vocab = new Set();
  const classModels = corpus.map(category => {
    if (!category.id || !Array.isArray(category.examples) || !category.examples.length) throw new Error('Invalid category');
    const counts = new Map(); let total = 0;
    for (const example of category.examples) {
      for (const word of tokenize(example)) {
        vocab.add(word); counts.set(word, (counts.get(word) || 0) + 1); total++;
      }
    }
    return { category, counts, total, n: category.examples.length };
  });
  const examplesTotal = classModels.reduce((a, x) => a + x.n, 0);
  return { classModels, vocabulary: vocab, examplesTotal };
}

export function predict(model, input) {
  const tokens = tokenize(input);
  if (tokens.length < 3) return { status: 'need-detail', tokens, reason: 'Please describe the device, the symptom, and what you have tried.' };
  const known = tokens.filter(word => model.vocabulary.has(word));
  if (!known.length) return { status: 'need-detail', tokens, reason: 'I do not recognize enough details to classify the problem. Add a device, error, or symptom.' };
  const vocabSize = model.vocabulary.size;
  const ranked = model.classModels.map(c => {
    let score = Math.log(c.n / model.examplesTotal);
    for (const word of tokens) {
      if (!model.vocabulary.has(word)) continue; // unknown words carry no class evidence
      score += Math.log(((c.counts.get(word) || 0) + 1) / (c.total + vocabSize));
    }
    const recognizedHere = tokens.filter(word => c.counts.has(word));
    return { id: c.category.id, label: c.category.label, score, category: c.category, recognizedHere };
  }).sort((a, b) => b.score - a.score);
  const top = ranked[0], runnerUp = ranked[1];
  const evidence = [...new Set(top.recognizedHere)];
  // Model score margin is not a calibrated probability. Avoid printing fake confidence percentages.
  const margin = top.score - runnerUp.score;
  const uncertain = evidence.length < 2 || margin < 1.2;
  return { status: uncertain ? 'tentative' : 'classified', tokens, knownCount: known.length, margin, category: top.category, evidence, alternative: runnerUp.category, ranked: ranked.map(x => ({ id:x.id, score:x.score })) };
}
