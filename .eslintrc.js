module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended', // Make this the last element so prettier config overrides other formatting rules
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'flowtype/no-types-missing-file-annotation': 0,
    'arrow-parens': 0,
    'no-undef': 0,
    'import/no-named-as-default': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-closing-bracket-location': 0,
    'no-shadow': 0,
    'react/no-danger': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'import/no-webpack-loader-syntax': 0,
    'react/jsx-space-before-closing': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'on',
    'linebreak-style': 'off',
    'dot-notation': [2, { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
    'react/display-name': 'off',
  },
  plugins: ['flowtype', 'react', 'react-hooks'],
};
