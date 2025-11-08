// eslint.config.js
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const reactNative = require('eslint-plugin-react-native');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const compat = new FlatCompat();

module.exports = [
    js.configs.recommended,
    ...compat.extends('airbnb'),
    ...compat.extends('airbnb/hooks'),
    prettierConfig,
    {
        files: ['**/*.{js,jsx,ts,tsx}'], // Apply to JavaScript and TypeScript files
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                __DEV__: true,
            },
        },
        plugins: {
            'react-native': reactNative,
            prettier,
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'), // Added TypeScript plugin
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
                { packageDir: ['./', 'node_modules/*'] },
            ], // Allow importing devDependencies in certain files
        },
    },
];
