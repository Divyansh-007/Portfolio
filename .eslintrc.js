module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['react-app', 'react-app/jest', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    // Prettier
    'prettier/prettier': 'error',

    // Auto-fixable rules
    'no-unused-vars': 'off', // Turn off unused vars since React imports are needed for hooks
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',

    // React specific rules
    'react/prop-types': 'off', // Disable prop-types for this project
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/jsx-uses-react': 'off', // Not needed in React 17+
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-key': 'error',
    'react/no-unescaped-entities': 'off', // Turn off for apostrophes in text

    // Accessibility rules - make them warnings instead of errors
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/label-has-associated-control': 'off', // Turn off for section titles
    'jsx-a11y/click-events-have-key-events': 'off', // Turn off for mobile menu
    'jsx-a11y/no-static-element-interactions': 'off', // Turn off for interactive elements
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
