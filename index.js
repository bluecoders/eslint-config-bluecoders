// eslint-disable-next-line no-undef
module.exports = {
    extends: 'eslint:all',
    rules: {
        'array-bracket-newline': 'off',
        'array-element-newline': 'off',
        'arrow-parens': ['error', 'as-needed'],
        camelcase: 'off',
        'capitalized-comments': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        complexity: 'off',
        'consistent-return': 'off',
        curly: ['error', 'multi-line'],
        'dot-location': ['error', 'property'],
        eqeqeq: 'off',
        'function-paren-newline': ['error', 'consistent'],
        'global-require': 'off',
        'func-style': 'off',
        'id-length': 'off',
        indent: 'off',
        'implicit-arrow-linebreak': 'off',
        'init-declarations': 'off',
        'key-spacing': ['error', { beforeColon: false }],
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'line-comment-position': 'off',
        'max-classes-per-file': 'off',
        'max-depth': 'off',
        'max-len': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'newline-per-chained-call': 'off',
        'no-async-promise-executor': 'off',
        'no-await-in-loop': 'off',
        'no-confusing-arrow': 'off',
        'no-console': 'off',
        'no-empty-function': 'off',
        'no-extra-parens': ['error', 'all', {
            conditionalAssign: false,
            nestedBinaryExpressions: false,
        }],
        'no-inline-comments': 'off',
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'no-negated-condition': 'off',
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-shadow': 'off',
        'no-sync': 'off',
        'no-tabs': 'off',
        'no-ternary': 'off',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-use-before-define': ['error', { variables: false }],
        'no-useless-escape': 'off',
        'no-warning-comments': 'off',
        'object-curly-newline': ['error', { consistent: true }],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': 'off',
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'prefer-destructuring': ['error', { array: true, object: false }],
        'prefer-named-capture-group': 'off',
        quotes: ['error', 'single', { avoidEscape: true }],
        'quote-props': ['error', 'as-needed'],
        'require-atomic-updates': 'off',
        'require-jsdoc': 'off',
        'space-before-function-paren': ['error', 'never'],
        'sort-keys': 'off',
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
        ecmaFeatures: { experimentalObjectRestSpread: true },
    },
    env: { es6: true },
};

