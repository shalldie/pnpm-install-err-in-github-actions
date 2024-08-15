import type { Viewport } from 'next';

import React, { PropsWithChildren } from 'react';

// https://github.com/vercel/next.js/discussions/46544
export const dynamic = 'force-dynamic';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
    viewportFit: 'cover'
};

const RootLayout: React.FC<PropsWithChildren> = async props => {
    return (
        <html lang="zh-CN">
            <head></head>
            <body>{props.children}</body>
        </html>
    );
};

export default RootLayout;
