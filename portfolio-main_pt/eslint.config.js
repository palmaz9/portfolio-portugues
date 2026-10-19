const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    { ignores: ['node_modules/**', 'public/**/*.min.js'] },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: { ecmaVersion: 2022, sourceType: 'commonjs', globals: { ...globals.node } },
    },
    {
        files: ['public/js/**/*.js'],
        languageOptions: { sourceType: 'script', globals: { ...globals.browser } },
    },
];
