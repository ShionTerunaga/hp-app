module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["unused-imports"],
    extends: [
        "eslint:recommended",
        "standard",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:regexp/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:deprecation/recommended",
        "prettier"
    ],
    env: { browser: true },
    ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
    rules: {
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
                destructuredArrayIgnorePattern: "^_"
            }
        ],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

        "no-console": "warn",
        "unused-imports/no-unused-imports": "error",
        "import/default": "off",
        "import/no-named-as-default-member": "off",
        "import/order": "error",

        "no-unreachable": "error",

        "no-void": "off",
        camelcase: "error",
        "deprecation/deprecation": "warn",
        "@typescript-eslint/restrict-plus-operands": ["error"]
    }
};
