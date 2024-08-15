import type { Config } from 'tailwindcss';

const config: Config = {
    corePlugins: {
        preflight: false
    },
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}'
        // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        // './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            // grid 扩展 13 ~ 100
            gridTemplateColumns: Array.from({ length: 100 - 12 })
                .map((_, index) => ({
                    [index + 13]: `repeat(${index + 13}, minmax(0, 1fr))`
                }))
                .reduce((pre, cur) => ({ ...pre, ...cur }), {}),
            gridColumn: Array.from({ length: 100 - 12 })
                .map((_, index) => ({
                    [`span-${index + 13}`]: `span ${index + 13} / span ${index + 13}`
                }))
                .reduce((pre, cur) => ({ ...pre, ...cur }), {})
        }
    },
    plugins: []
};
export default config;
