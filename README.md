# PayDo Automation Tests
Author: Shevchenko Anastasiia

## Overview
Automated UI and API tests for [PayDo](https://paydo.com/) using Playwright + TypeScript.

**UI Tests:**
- Open landing page, click "Open Account", verify all UI elements.
- Open login page, enter invalid credentials, check error message.

**API Tests:**
- `GET /user` — retrieve user data by `user_id` (`username`, `age` [1-100], `user_id`).
- `POST /user` — send `username`, `age`, `user_type` (boolean); response returns `user_id`, `username`.

## Project Structure
