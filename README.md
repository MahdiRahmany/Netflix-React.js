

```markdown
# Netflix Clone with React.js

This is a Netflix-like web application built using React.js, Vite, and Firebase. The project utilizes React for the frontend, Firebase for backend services, and several other tools for development and optimization. Below you will find detailed instructions on how to set up, run, and develop the project.

## Table of Contents
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Development](#development)
- [Building the Project](#building-the-project)
- [Previewing the Build](#previewing-the-build)

## Installation

To set up the project, follow these steps:

1. Clone the repository to your local machine.
2. Run the following command to install all dependencies:

```bash
npm install
```

This command will install all the necessary production and development dependencies listed in `package.json`.

## Scripts

The project includes several scripts that can be run using npm:

- **`npm run dev`**: Starts the development server using Vite, allowing you to preview your changes in real-time.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs ESLint to check for code issues and styling errors.
- **`npm run preview`**: Previews the production build locally.

## Dependencies

The following are the main dependencies required for the application:

- **`firebase` (^10.13.1)**: Firebase provides the backend services like authentication and real-time database for the application.
- **`react` (^18.3.1)**: React is the core library used for building the user interface.
- **`react-dom` (^18.3.1)**: React DOM is used for rendering React components in the browser.
- **`react-firebase-hooks` (^5.1.1)**: This library provides convenient hooks for Firebase in React.
- **`react-router-dom` (^6.26.1)**: React Router DOM is used for managing client-side routing.
- **`react-toastify` (^10.0.5)**: React Toastify is used for providing notifications in the application.

## Dev Dependencies

These tools are used during development to ensure code quality, fast development, and building the project efficiently:

- **`@eslint/js` (^9.9.0)**: A configuration for ESLint focused on JavaScript.
- **`@types/react` (^18.3.3)**: TypeScript type definitions for React.
- **`@types/react-dom` (^18.3.0)**: TypeScript type definitions for React DOM.
- **`@vitejs/plugin-react` (^4.3.1)**: A plugin for integrating React with Vite, including support for JSX and fast refresh.
- **`eslint` (^9.9.0)**: A tool for identifying and reporting patterns in JavaScript code, ensuring code quality.
- **`eslint-plugin-react` (^7.35.0)**: ESLint rules for React, enforcing best practices.
- **`eslint-plugin-react-hooks` (^5.1.0-rc.0)**: Ensures proper usage of React hooks.
- **`eslint-plugin-react-refresh` (^0.4.9)**: ESLint plugin for enabling fast refresh in React development.
- **`globals` (^15.9.0)**: Provides a list of global variables.
- **`vite` (^5.4.1)**: A fast, modern build tool and development server for frontend projects.

## Development

To start developing the project, run the following command:

```bash
npm run dev
```

This will start the development server on your local machine, allowing you to see changes immediately in the browser as you edit the code.

## Building the Project

When you are ready to deploy the project or test the production version, run:

```bash
npm run build
```

This will generate an optimized version of the application in the `dist` folder.

## Previewing the Build

After building the project, you can preview the production build by running:

```bash
npm run preview
```

This will serve the production build on a local server, so you can check if everything works as expected.

---
