/** @type {import("prettier").Config} */
module.exports = {
    semi: true,
    tabWidth: 4,
    singleQuote: true,
    bracketSpacing: true,
    printWidth: 120,
    trailingComma: 'none',
    arrowParens: 'avoid',
    overrides: [
        {
            files: ['package.json', '*.yml', '*.yaml'],
            options: {
                singleQuote: false,
                tabWidth: 2
            }
        }
    ],
    // order
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
    importOrder: [
        //
        '^next(/.*)?$',
        '',
        '^react-?(|dom|router-dom|redux)(/.*)?$',
        '',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@/(.*)$',
        '',
        '^[./]'
    ],
    // importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0'
};
