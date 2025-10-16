# PayDo Automation Tests
Author: Shevchenko Anastasiia

## Overview
Automated UI and API tests using Playwright + TypeScript.

**UI Tests:**
- Open landing page, click "Open Account", verify all UI elements.
- Open login page, enter invalid credentials, check error message.

**API Tests:**
- `GET /user` — retrieve user data by `user_id` (`username`, `age` [1-100], `user_id`).
- `POST /user` — send `username`, `age`, `user_type` (boolean); response returns `user_id`, `username`.

## Project Structure
- **`/pages`** — Page Object Model classes representing different pages of the site  
- **`/api`** — Classes and helpers for API tests (e.g., BaseApi, UserApi)  
- **`/tests`** — Playwright spec files containing test cases (UI and API)  
- **`/fixtures`** — Test fixtures for UI and API objects  
- **`/utils`** — Utility constants and helper functions  
- **`playwright.config.ts`** — Playwright configuration file

---

## Prerequisites

- Node.js installed (v16+ recommended)  
- npm (comes with Node.js)  
- Git  

---

## Setup Instructions

1. Clone the repository (private GitHub repo):

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run UI tests only:

    ```bash
    npm run run:ui:tests
    ```
4. Run API tests only:

    ```bash
    npm run run:api:tests
    ```
    
## Reporting

- Playwright generates test result reports.
- By default, test results are output in the console.
- To view the HTML report after running tests, use:

    ```bash
    npm run open:report
    ```

- The HTML report provides detailed information about each test, including screenshots and videos (if enabled).
- To enable video or screenshot recording, configure your `playwright.config.ts` accordingly.
