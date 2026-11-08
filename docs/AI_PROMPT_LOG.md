# AI-Assisted Development Prompt Log

**Course:** COSC 4272 Senior Seminar  
**Project:** GitHub portfolio and Technical Issue Triage Assistant  
**Started:** November 8, 2026

This log records the actual user requests and summarized AI-assisted work in the project conversation. It should be expanded with subsequent prompts, decisions, edits, and independent validation. It does not represent any interaction or result that did not take place.

| Date | User request or instruction (abridged) | AI assistance | Verification / changes |
| --- | --- | --- | --- |
| Nov 8, 2026 | "I was given a project last Friday that's due in two weeks. Let's see how we can get this done." | Read the nine-page assignment, extracted deliverables and grading rubric, proposed a two-week plan. | Compared deliverables and rubric with the assignment PDF. |
| Nov 8, 2026 | User described existing GitHub account, two resumes, automated vertical farm, and uncertainty about AI project expectations. | Distinguished AI-assisted coding from creating a functional AI assistant. Proposed documenting both. | Treated assignment's differing descriptions as ambiguous; professor confirmation remains appropriate. |
| Nov 8, 2026 | User supplied GitHub profile and two resume files. | Reviewed materials and examined accessible public GitHub repositories. | Confirmed `PhoenixPrimeGames/PlayCoding` contained C++ game-related source; identified the other public repository as a fork. |
| Nov 8, 2026 | User clarified graduation depends on course scheduling. | Selected general "Expected Graduation: 2027" wording. | Both possible graduation semesters were described as occurring in 2027. |
| Nov 8, 2026 | "I see. let's begin then." | Drafted responsive portfolio site, About Me section, project cards, résumé PDF, and an in-browser supervised technical-issue classifier. | Counted About Me words; ran 10 Node.js classifier assertions; corrected a misclassification of a hardware power issue by improving the illustrative training set; rendered and checked desktop and mobile layouts; captured an actual output screenshot. |

## Development notes

- **Website implementation:** HTML/CSS/JavaScript, responsive layout, navigation and downloadable/embedded résumé.
- **AI project:** curated example corpus, multinomial Naive Bayes classification, local-browser inference, category-based first diagnostic checks.
- **Debugging example:** A first test incorrectly classified "My desktop will not power on and there is no fan activity" as performance-related. The hardware training examples were expanded to improve recognition of startup/power symptoms, and tests were rerun.
- **Known limitations:** the prototype is small, unvalidated against an independent dataset, and should not be described as a conversational LLM.
- **Prototype screenshot:** `screenshots/ai-assistant-demo.png` was generated from the real in-browser application code using an example network problem.
- **Human review pending:** owner should verify all profile facts and project descriptions, proofread the résumé, test examples independently, and supply project screenshots, a headshot, and source links before publishing for grading.

## Prompt-log practices for the remaining work

For each future AI-assisted step, record the date, exact prompt or accurate short excerpt, tool suggestions, your decisions, code edits, tests, and the final result. If an AI suggestion was rejected, state why. Never invent screenshots, performance metrics, or contributions.
