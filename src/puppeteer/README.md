# 🌐 Puppeteer Directory Overview

The `puppeteer` directory is dedicated to managing and executing all operations related to the Puppeteer browser automation library. It provides a modular structure for browser setup, navigation, and actions.

## 📁 File Breakdown:

### 1. `setup.ts` ⚙️
Centralizes the Puppeteer configuration settings:
- Defines default Puppeteer settings (e.g., viewport size, headless mode).
- Provides optional configurations like proxies or custom user-agents.

### 2. `pageActions.ts` 🕹
Encompasses common browser interactions:
- Navigating to URLs.
- Clicking elements based on selectors.
- Extracting data using various strategies.
- Utilities for waiting (e.g., waiting for elements, network idling).
- Handling page-level actions like scrolling, pagination, or iframe interactions.

### 3. `coreActions.ts` 🔨
Consists of fundamental actions to interact with web pages:
- Provides a collection of helper methods for common web interactions.
- Actions include: navigating to a URL, clicking on elements, typing into fields, scrolling, extracting text and attributes, etc.
- Modularizes actions for cleaner code structure and reusability across different scraping tasks.
