module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'spaced-comment': 0,
        'vue/comment-directive': 0,
        'prefer-const': 0,
        'global-require': 0,
        'max-lines': 0,
        'vue/no-parsing-error': 0,
        'vue/no-unused-vars': 0,
        '@typescript-eslint/await-thenable': 0,
        'no-param-reassign': [
            'error',
            {
                'props': true,
                'ignorePropertyModificationsFor': [
                    'e', // for e.returnvalue
                    'ctx', // for Koa routing
                    'req', // for Express requests
                    'request', // for Express requests
                    'res', // for Express responses
                    'response', // for Express responses
                    'state', // for vuex state,
                    'Vue',
                ],
            },
        ],
    },
};
