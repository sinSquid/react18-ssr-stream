module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended", // React rules
    "plugin:@typescript-eslint/recommended", // TypeScript rules
    "plugin:react-hooks/recommended", // React hooks rules
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:react/jsx-runtime", // new JSX runtime for react
    "prettier",
  ],
  ignorePatterns: [
    "node_modules/*",
    "script/*",
    "dist/*",
    "build/*",
    "src/__mocks__/*",
    "webpack/*",
    "!.prettierrc",
    ".eslintrc.js",
    "babel.config.js",
    "postcss.config.js",
    "jest.config.js",
  ], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  parser: "@typescript-eslint/parser",
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier", "import"],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default
      },
    },
  },
  rules: {
    // General
    // "no-console": "warn",

    // TypeScript
    // We will use TypeScript's types for component props instead
    "react/prop-types": "off",

    // No need to import React when using Next.js
    "react/react-in-jsx-scope": "off",

    // This rule is not compatible with Next.js's <Link /> components
    "jsx-a11y/anchor-is-valid": "off",

    // Why would you want unused vars?
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // I suggest this setting for requiring return types on functions only where useful
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],

    "@typescript-eslint/consistent-type-imports": "error",

    // import
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "internal", "parent", "sibling", "index", "type"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
        unnamedComponents: "arrow-function",
      },
    ],
    "react/display-name": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variableLike",
        leadingUnderscore: "allowSingleOrDouble",  // 前置下划线
        trailingUnderscore: "allowSingleOrDouble", // 后置下划线
        format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"]
      },
    ],
    "@typescript-eslint/no-unused-expressions": "off",
  },
};
