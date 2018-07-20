module.exports = {
    "extends": "standard",
    "rules": {
        "semi": [2, "always"],
        "comma-dangle": [2, "always-multiline"],
        'arrow-body-style': [2, 'as-needed'],
        'class-methods-use-this': 0,
        'comma-dangle': [2, 'always-multiline'],
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 2,
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        indent: [
            2,
            2,
            {
                SwitchCase: 1,
            },
        ],
    }
};