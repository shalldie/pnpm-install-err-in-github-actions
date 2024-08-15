const path = require('path');
const dotenv = require('dotenv');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
};

const withBundleAnalyzer = (() => {
    if (process.env.ANALYZE !== 'true') {
        return n => n;
    }

    return require('@next/bundle-analyzer')({ enabled: true });
})();

module.exports = withBundleAnalyzer(nextConfig);
