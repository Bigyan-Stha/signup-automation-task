# QA Signup Automation

Automated Playwright tests that exercise the complete signup flow.

## Tech Stack
- Playwright
- JavaScript

## Project Structure

- `tests/` — Playwright test specs
- `playwright.config.js` — Playwright configuration
- `package.json` — npm scripts and dependencies

## Prerequisites

- Node.js (LTS) and `npm`

## Installation

Install dependencies and Playwright browsers:

```
npm install
npx playwright install
```

## Run Tests

- Run tests (headless):

```
npx playwright test
```

- Run tests (headed / with browser UI):

```
npx playwright test --headed
```

## View Report

Generate and open the HTML report produced by Playwright:

```
npx playwright show-report
```

## Features

- Automation of the signup flow without manual intervention
- Captures videos, and traces on failure (configured in `playwright.config.js`)

Bigyan Shrestha

---

Branch: `upload-workspace` — this README was updated and pushed to the repository.
