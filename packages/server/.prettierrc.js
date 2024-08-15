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
        '<BUILTIN_MODULES>', // Node.js built-in modules
        '',
        '@nestjs', // nestjs modules
        '',
        '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
        '',
        '^[.]' // relative imports
    ],
    importOrderParserPlugins: ['typescript', 'decorators-legacy'],
    // importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0'
};
