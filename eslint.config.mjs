import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
    {
        name: 'eslint/base',
        extends: [
            pluginJs.configs.recommended,
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        ignores: [
            'dist/*',
            'public/*',
            '.idea/*',
            '.vscode/*',
        ],
    },
    {
        name: 'typescript/base',
        files: ['**/*.{ts,tsx}'],
        extends: [
            tseslint.configs.recommended,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        name: 'react/base',
        files: ['**/*.tsx'],
        extends: [
            pluginReact.configs.flat.recommended,
        ],
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
        },
    },
    {
        name: 'i18n/base',
        ...i18next.configs['flat/recommended'],
    },
    {
        name: 'stylistic/base',
        ...stylistic.configs.customize({
            flat: true,
            indent: 4,
            quotes: 'single',
            semi: true,
            jsx: true,
            quoteProps: 'as-needed',
        }),
        ignores: [
            'dist/*',
            'public/*',
            '.idea/*',
            '.vscode/*',
        ],
    },
);
