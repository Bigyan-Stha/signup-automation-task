# Signup Automation Task

This repository contains Playwright automation tests for a signup flow.

## Project structure

- `tests/` - Playwright test files
- `playwright.config.js` - Playwright configuration
- `package.json` - npm scripts and dependencies
- `test-results/` and `playwright-report/` - generated test artifacts and reports

## Prerequisites

- Node.js (>= 14)
- npm

## Setup

1. Install dependencies

```bash
npm install
npx playwright install
```

2. Run tests

```bash
npx playwright test
```

3. View the HTML report

```bash
npx playwright show-report
```

## Notes

- Tests live in `tests/` — edit or add specs there.
- Test artifacts (videos, traces, screenshots) are stored in `test-results/` and the HTML report in `playwright-report/`.
- Branch containing current workspace: `upload-workspace`.

If you want me to open a PR to merge into `main`, tell me and I will create it.
