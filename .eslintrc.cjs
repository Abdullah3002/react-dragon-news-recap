module.exports = {
    root: true,  // Ensures that ESLint only applies this configuration
    env: {
      browser: true, // Enables browser globals (e.g., `window`, `document`)
      es2021: true,  // Enables ES2021 globals and syntax
      node: true,    // Enables Node.js global variables and Node.js scoping
    },
    extends: [
      'eslint:recommended', // Base recommended ESLint rules
      'plugin:react/recommended', // React specific linting rules
      'plugin:react-hooks/recommended', // React hooks linting rules
      'plugin:jsx-a11y/recommended', // Accessibility rules for JSX
      'prettier' // Integrates with Prettier for code formatting
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Allows parsing of JSX
      },
      ecmaVersion: 'latest', // Allows modern ECMAScript features
      sourceType: 'module', // Allows the use of imports
    },
    plugins: [
      'react', // Linting for React
      'jsx-a11y' // Linting for accessibility in JSX
    ],
    rules: {
      // Customize ESLint rules here
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React to be in scope
      'no-console': 'warn', // Warns when console.log is used
      'react/prop-types': 'off', // Disable prop-types rule if using TypeScript
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
  };
  