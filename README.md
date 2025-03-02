## Storybook UI Kit Example
A comprehensive and modern UI Kit example built with Storybook and Vite, utilizing TypeScript, React, and a variety of
essential libraries for UI development and testing. This project demonstrates how to build, document, and test React UI
components in isolation using Storybook, and it is designed to be modular, scalable, and easily integrated into other
projects.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Storybook](#storybook)
- [UI Testing with Loki](#ui-testing-with-loki)
- [Building the Project](#building-the-project)
- [Publishing the Package](#publishing-the-package)
- [Project Structure](#project-structure)
- [License](#license)

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone https://your-repo-url.git
cd storybook-ui-kit-example
yarn install
```

Ensure that you have Node.js (v18+) and Yarn installed on your system.

## Available Scripts
# In the project directory, you can run the following commands:
- yarn dev: Starts the Vite development server for local development.
- yarn build: Builds the project using TypeScript and Vite for production.
- yarn lint: Runs ESLint to ensure code quality.
- yarn preview: Previews the production build locally.
- yarn storybook: Starts Storybook for developing UI components in isolation.
- yarn storybook:build: Builds the Storybook documentation as static files.
- yarn test:ui: Runs visual regression tests using Loki.
- yarn test:ui:ok: Approves changes after running visual regression tests.
- yarn test:ui:ci: Runs visual regression tests in CI mode.
- yarn publish: Publishes the package using a custom script.

## Storybook
This project uses Storybook for documenting and developing UI components in isolation. Storybook provides an interactive
UI environment that allows developers to build and showcase components outside of the main application.

## To start Storybook:
- yarn storybook

Storybook will be available at http://localhost:6006. All UI components are organized and showcased with relevant props
and documentation.

## Storybook Build
# To build Storybook as static documentation:
yarn storybook:build

UI Testing with Loki
This project utilizes Loki for visual regression testing. Loki compares the current appearance of your components with
reference images to detect any unintended visual changes.

## To run visual regression tests:
- yarn test:ui

## Approve any changes (if expected) using:
- yarn test:ui:ok

## For CI environments, use:
- yarn test:ui:ci

## Building the Project
# To build the project for production:
- yarn build

## Publishing the Package
To publish the package, a custom script publish-script.js is used. This script handles the necessary steps to prepare
and publish the package to a package registry.

## Run the following command to publish:
- yarn publish

## License

This project is licensed under the MIT License. Feel free to modify and use it in your own projects.
