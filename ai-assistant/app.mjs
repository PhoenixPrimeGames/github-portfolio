import { categories, examples } from './data.mjs';
import { predict, train } from './model.mjs';

const model = train(categories);
const textarea = document.getElementById('issue');
const result = document.getElementById('result');
const counter = document.getElementById('counter');
const sampleHolder = document.getElementById('examples');
const form = document.getElementById('triage-form');

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text; // no user input inserted as HTML
  return node;
}
function sectionTitle(text) { return el('h4', 'result-label', text); }

function show(prediction) {
  result.replaceChildren();
  if (prediction.status === 'need-detail') {
    const div = el('div','attention');
    div.append(el('h3',null,'More information needed'),el('p',null,prediction.reason));
    result.append(div);
    return;
  }
  const c = prediction.category;
  const banner = el('div','prediction');
  const kind = el('div','prediction-kind',prediction.status === 'classified' ? 'PREDICTED CATEGORY' : 'TENTATIVE CATEGORY · LOW EVIDENCE');
  banner.append(kind,el('h3',null,c.label),el('p',null,c.summary));
  result.append(banner);
  if (prediction.status === 'tentative') {
    const caution = el('p','caution','This match is uncertain. Provide more details and compare the alternative category below.');
    result.append(caution);
  }
  result.append(sectionTitle('Suggested diagnostic checks'));
  const list = el('ol','diagnostic-steps');
  c.checks.forEach(step => list.append(el('li',null,step)));
  result.append(list);
  result.append(sectionTitle('Helpful follow-up question'));
  result.append(el('p','followup',c.followup));
  const detail = el('div','model-evidence');
  detail.append(el('span',null,`Model evidence: ${prediction.evidence.length ? prediction.evidence.join(', ') : 'limited'}`));
  detail.append(el('span',null,`Alternative: ${prediction.alternative.label}`));
  result.append(detail);
  const caveat = el('p','result-caveat','This is an educational classification tool, not a substitute for qualified IT or safety-critical engineering support.');
  result.append(caveat);
}

function analyze() {
  const value = textarea.value.trim();
  if (!value) { textarea.focus(); return; }
  show(predict(model, value));
}
form.addEventListener('submit', (event) => { event.preventDefault(); analyze(); });
textarea.addEventListener('input', () => { counter.textContent = `${textarea.value.length} / 750`; });
for (const [index, example] of examples.entries()) {
  const button = el('button','sample-button',example);
  button.type = 'button';
  button.setAttribute('aria-label',`Use example ${index + 1}: ${example}`);
  button.addEventListener('click', () => {
    textarea.value = example;
    textarea.dispatchEvent(new Event('input'));
    analyze();
  });
  sampleHolder.append(button);
}
// Demo query is used solely to capture a reproducible screenshot for documentation.
if (new URLSearchParams(location.search).get('demo') === 'network') {
  textarea.value = examples[0];
  textarea.dispatchEvent(new Event('input'));
  analyze();
}
