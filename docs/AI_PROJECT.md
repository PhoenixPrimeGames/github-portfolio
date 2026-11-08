# Technical Issue Triage Assistant

**COSC 4272 | Initial working prototype | November 8, 2026**

## 1. Problem statement and objective

People frequently describe technical issues using informal language that does not name the underlying failure category. This educational prototype accepts a brief natural-language problem description and suggests an initial triage category, structured diagnostic checks, and a clarifying question. It is intended to demonstrate an AI-assisted software development process and an implemented supervised machine-learning technique.

## 2. Functional scope

The interface supports:

1. Input of a free-text technical issue (maximum 750 characters).
2. Prediction of one of seven broad issue categories.
3. Display of a concise classification rationale using words matched from the training corpus.
4. Suggested initial checks from a curated, safety-conscious set of recommendations.
5. Display of an alternative category and a warning when evidence is limited.
6. Example input buttons and a request for more detail on vague or unrecognized input.

Categories are **network**, **performance**, **software**, **hardware/power**, **account/access**, **peripherals/drivers**, and **security**.

## 3. Architecture

- `index.html`: accessible application markup and result panels.
- `app.css`: responsive visual layout.
- `data.mjs`: 72 labeled, manually written training examples and expert-authored first diagnostic steps.
- `model.mjs`: tokenizer, multinomial Naive Bayes training and prediction.
- `app.mjs`: input handling, model invocation, and safe DOM rendering with `textContent`.
- `test.mjs`: repeatable Node.js assertions on sample issues and uncertain input.

The application trains its classifier in the browser after page load. No external AI API, backend server, analytics service, or data storage is used.

## 4. Machine-learning method

Multinomial Naive Bayes is a probabilistic text-classification method often used as a lightweight baseline. The implementation:

1. Lowercases input, standardizes some variations (for example, `Wi-Fi` to `wifi`), and removes common stop words.
2. Builds a vocabulary and word-frequency table for each labeled issue class.
3. Uses Laplace/add-one smoothing for terms in the vocabulary.
4. Computes log posterior scores of each category using observed tokens.
5. Ranks categories and displays the most likely class according to this small model.

Illustrative score formula, for class `c` and input tokens `w`:

```text
score(c) = log P(c) + sum_over_known_words[ log((count(w,c)+1) / (total_words(c)+V)) ]
```

Here `V` is the number of unique vocabulary tokens and class priors are proportional to the number of labeled examples.

**Important:** The score differences are not calibrated accuracy or confidence probabilities. The interface does not claim a percentage confidence. It warns if matched class evidence is sparse or score margins are close.

## 5. Test plan and initial results

Command:

```bash
node ai-assistant/test.mjs
```

First-draft automated checks cover seven representative descriptions, one for each class, plus vague input, out-of-vocabulary input, and Wi-Fi token normalization. **10 assertions passed** after refining ambiguous hardware/power training examples. The tests are a basic sanity check, not an independent accuracy evaluation. Training examples and test descriptions have overlapping vocabulary; generalization performance is not established.

### Additional tests before final submission

- Evaluate on a separate labeled holdout dataset that is not reused for training.
- Include ambiguous issues, misspellings, and multi-symptom reports.
- Check responsive layout, keyboard navigation, and handling of long or malicious-looking input.
- Document incorrect predictions, remediation, and any code changes.

## 6. Security, privacy, and limitations

- Issue descriptions are processed in-browser; they are not sent to a remote endpoint or saved.
- No login or personal information is necessary. Users are warned not to enter passwords or authentication codes.
- Result content is inserted using `textContent`, not dynamic HTML evaluation.
- The model has a tiny, synthetic training set, and its predictions can be inaccurate or biased toward the example wording.
- The diagnostic recommendations are fixed by category and may not apply to a specific device or environment.
- The tool is unsuitable for production support, cybersecurity incident response, or safety-critical electrical work.

## 7. Alternatives and design tradeoffs

A large-language-model API could support follow-up dialogue and more nuanced responses, but would introduce costs, external data processing, and API-key protection requirements. A static, explainable classifier was selected for this initial prototype because it runs on GitHub Pages at no hosting cost and can be inspected and tested without a backend.

## 8. Next improvements

- Add a labeled holdout evaluation with class-level precision and recall.
- Expand example coverage based on observed error cases.
- Add a transparent troubleshooting decision tree for each category.
- Capture a short screen recording and before/after test evidence.
- Document individual review and ownership of the final submitted code.
