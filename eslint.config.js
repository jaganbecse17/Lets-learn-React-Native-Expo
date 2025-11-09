// eslint.config.js
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const reactNative = require('eslint-plugin-react-native');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

const compat = new FlatCompat();

module.exports = [
    js.configs.recommended,
    ...compat.extends('airbnb'),
    ...compat.extends('airbnb/hooks'),
    ...compat.extends('plugin:react-native/all'),
    prettierConfig,
    {
        files: ['**/*.{js,jsx,ts,tsx}'], // Apply to JavaScript and TypeScript files
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                __DEV__: true,
            },
        },
        plugins: {
            'react-native': reactNative,
            prettier,
            '@typescript-eslint': tsPlugin, // Added TypeScript plugin
        },
        settings: {
            react: { version: 'detect' }, // Automatically detect the react version
            'import/resolver': {
                typescript: {},
            }, // This loads <rootdir>/tsconfig.json to eslint
        },
        rules: {
            'no-use-before-define': ['error', { variables: false }], // Disable base rule, Reason: stylesheet definitions on bottom
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    tsx: 'never',
                    ts: 'never',
                },
            ], // Disable import/extensions rule for @alias importing files, without specifying extensions
            'react/jsx-filename-extension': [
                'warn',
                { extensions: ['.jsx', '.tsx'] },
            ],
            'react/react-in-jsx-scope': 'off', // Not needed with React 17+. import React from 'react' is not required
            'react-native/no-inline-styles': 'warn', // Warn against inline styles in React Native components
            'prettier/prettier': ['warn'], // Show prettier issues as warnings
            'import/no-extraneous-dependencies': [
                'error',
                { packageDir: ['./', 'node_modules/expo'] },
            ], // Allow importing devDependencies in certain files
            'react-native/no-raw-text': 'off', // Allow raw text outside of Text component / custom components
            'react-native/sort-styles': ['error', 'asc'], // Enable sorting of styles in ascending order
            'react-native/no-color-literals': 'off', // Allow color literals in styles. disable temporarily. enable for better consistency
            'react/require-default-props': 'off', // Disable requirement for default props in React components, since we are using function components. only for class components needed to avoid undefined
            'react/jsx-props-no-spreading': 'off', // Allow props spreading in JSX
            'import/prefer-default-export': 'off', // Allow single named exports
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn on unused variables, but ignore those starting with an underscore. Handy for interfaces with funcition parameters
        },
    },
];
