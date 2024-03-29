module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.jsx', '*.js'],
      extends: ['hardcore', 'plugin:prettier/recommended'],
      processor: '@graphql-eslint/graphql',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      extends: ['plugin:prettier/recommended'],
      parserOptions: {
        operations: ['./*.graphql'],
        schema: './schema.graphql',
      },
      rules: {
        // ✅ add your @graphql-eslint/* rules here

        '@graphql-eslint/avoid-typename-prefix': 2,
        '@graphql-eslint/no-unreachable-types': 2,
        '@graphql-eslint/no-deprecated': 2,
        '@graphql-eslint/unique-fragment-name': 2,
        '@graphql-eslint/unique-operation-name': 2,
        '@graphql-eslint/no-hashtag-description': 2,
        '@graphql-eslint/no-anonymous-operations': 2,
        '@graphql-eslint/no-operation-name-suffix': 2,
        '@graphql-eslint/require-deprecation-reason': 2,
        '@graphql-eslint/avoid-operation-name-prefix': 2,
        '@graphql-eslint/selection-set-depth': [2, { maxDepth: 12 }],
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': 2,
        '@graphql-eslint/require-description': [2, { on: ['ObjectTypeDefinition', 'FieldDefinition'] }],
        '@graphql-eslint/require-id-when-available': 2,
        '@graphql-eslint/description-style': 2,
        '@graphql-eslint/avoid-duplicate-fields': 2,
        '@graphql-eslint/naming-convention': [
          'error',
          {
            FieldDefinition: 'camelCase',
            ObjectTypeDefinition: 'PascalCase',
            leadingUnderscore: 'allow',
          },
        ],
        '@graphql-eslint/input-name': 2,
        '@graphql-eslint/strict-id-in-types': 2,
        '@graphql-eslint/executable-definitions': 2,
        '@graphql-eslint/fields-on-correct-type': 2,
        '@graphql-eslint/fragments-on-composite-type': 2,
        '@graphql-eslint/known-argument-names': 2,
        '@graphql-eslint/known-directives': 2,
        '@graphql-eslint/known-fragment-names': 2,
        '@graphql-eslint/known-type-names': 2,
        '@graphql-eslint/lone-anonymous-operation': 2,
        '@graphql-eslint/lone-schema-definition': 2,
        '@graphql-eslint/no-fragment-cycles': 2,
        '@graphql-eslint/no-undefined-variables': 2,
        '@graphql-eslint/no-unused-fragments': 2,
        '@graphql-eslint/no-unused-variables': 2,
        '@graphql-eslint/overlapping-fields-can-be-merged': 2,
        '@graphql-eslint/possible-fragment-spread': 2,
        '@graphql-eslint/possible-type-extension': 2,
        '@graphql-eslint/provided-required-arguments': 2,
        '@graphql-eslint/scalar-leafs': 2,
        '@graphql-eslint/one-field-subscriptions': 2,
        '@graphql-eslint/unique-argument-names': 2,
        '@graphql-eslint/unique-directive-names': 2,
        '@graphql-eslint/unique-directive-names-per-location': 2,
        '@graphql-eslint/unique-enum-value-names': 2,
        '@graphql-eslint/unique-field-definition-names': 2,
        '@graphql-eslint/unique-input-field-names': 2,
        '@graphql-eslint/unique-operation-types': 2,
        '@graphql-eslint/unique-type-names': 2,
        '@graphql-eslint/unique-variable-names': 2,
        '@graphql-eslint/value-literals-of-correct-type': 2,
        '@graphql-eslint/variables-are-input-types': 2,
        '@graphql-eslint/variables-in-allowed-position': 2,
        // the following is required for `eslint-plugin-prettier@<=3.4.0` temporarily
        // after https://github.com/prettier/eslint-plugin-prettier/pull/413
        // been merged and released, it can be deleted safely
        'prettier/prettier': [2, { parser: 'graphql' }],
      },
    },
    // the following is required for `eslint-plugin-prettier@<=3.4.0` temporarily
    // after https://github.com/prettier/eslint-plugin-prettier/pull/415
    // been merged and released, it can be deleted safely
    {
      files: ['*.js/*.graphql'],
      rules: {
        'prettier/prettier': 0,
      },
    },
  ],
};
