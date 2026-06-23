# QA Signup Automation – Vrit Technologies Task

Automated Playwright tests that exercise the complete signup flow on https://authorized-partner.vercel.app/.
Designed to run headlessly for CI or locally with minimal setup.

## Tech Stack

- Playwright
- JavaScript (Node.js)

## Project Structure

- `tests/` — Playwright test specs
- `playwright.config.js` — Playwright configuration
- `package.json` — npm scripts and dependencies

## Prerequisites

- Node.js (LTS) and `npm`

## Installation

Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

## Run Tests

- Run tests (headless):

```bash
npx playwright test
```

- Run tests (headed / with browser UI):

```bash
npx playwright test --headed
```

## View Report

Generate and open the HTML report produced by Playwright:

```bash
npx playwright show-report
```

## Features

- End-to-end automation of the signup flow without manual intervention
- Captures screenshots, videos, and traces on failure (configured in `playwright.config.js`)
- Suitable for CI integration and local debugging

## Author

Bigyan Shrestha

---

Branch: `upload-workspace` — this README was updated and pushed to the repository.
