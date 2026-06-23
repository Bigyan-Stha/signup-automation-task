# QA Signup Automation

Automated Playwright tests that exercise the complete signup flow.

## Tech Stack
- Playwright
- JavaScript

## Project Structure

- `tests/` — Playwright test specs
- `playwright.config.js` — Playwright configuration
- `package.json` — npm scripts and dependencies

## Environment & Prerequisites

- Language: JavaScript (Node.js)
- Recommended Node.js: 18.x (LTS)
- npm: 8+
- Playwright: v1.x (install via `npx playwright install`)

## Installation

Install dependencies and Playwright browsers:

```
npm install
npx playwright install
```

## How to run

- Run tests (headless):

```
npx playwright test
```

- Run tests (headed / with browser UI):

```
npx playwright test --headed
```

- View the HTML report:

```
npx playwright show-report
```

## Test Data / Accounts

- Tests are designed to run with disposable or test accounts. Configure test credentials via environment variables or a `.env` file.

Example `.env` (create at project root):

```env
TEST_EMAIL=test+1@example.com
TEST_PASSWORD=YourTestPassword123
BASE_URL=https://authorized-partner.vercel.app/
```

- If your tests generate unique users, no manual account setup is required. If specific accounts are needed, set the variables above before running tests.

## Features

- Automation of the signup flow without manual intervention
- Captures videos, and traces on failure (configured in `playwright.config.js`)

Branch: `upload-workspace` — this README was updated and pushed to the repository.
