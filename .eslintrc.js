module.exports = {
    rules: {
        'prefer-destructuring': 'off',
        'max-depth': 'off',
        'max-params': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    overrides: [
        {
            files: ['*CM.vue', '*SVG*.vue', '*WYSIWYG*.vue'],
            rules: {
                'vue/match-component-file-name': 'off',
            },
        },
    ],
};