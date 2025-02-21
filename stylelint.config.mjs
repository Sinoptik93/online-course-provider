/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
        'stylelint-scss',
    ],

    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    },

};
