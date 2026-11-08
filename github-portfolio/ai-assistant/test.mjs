import assert from 'node:assert/strict';
import { categories } from './data.mjs';
import { tokenize, train, predict } from './model.mjs';
const model = train(categories);
const cases = [
  ['My laptop connects to WiFi, but websites will not load','network'],
  ['My PC has very high CPU usage and everything is slow','performance'],
  ['The software crashes when I click save and reports an error','software'],
  ['My desktop will not power on and there is no fan activity','hardware'],
  ['I cannot login because the password reset link expired','account'],
  ['Windows does not detect my USB mouse or keyboard','peripheral'],
  ['I clicked a suspicious phishing email and malware appeared','security'],
];
for (const [issue, expected] of cases) {
  const prediction = predict(model, issue);
  assert.equal(prediction.category?.id, expected, `Wrong category for: ${issue}`);
  console.log(`PASS ${expected.padEnd(12)} ${issue}`);
}
assert.equal(predict(model, 'help').status, 'need-detail');
assert.equal(predict(model, 'purple elephant meadow dancing quietly').status, 'need-detail');
assert.deepEqual(tokenize('Wi-Fi wi fi'), ['wifi','wifi']);
console.log(`PASS 10 checks. Training examples: ${model.examplesTotal}, vocabulary: ${model.vocabulary.size}`);
