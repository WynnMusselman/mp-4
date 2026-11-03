// all page.tsx files are rendered here as {children}

import React from 'react';

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
    return (
        <html lang = "en">
            <body>
                {children}
            </body>
        </html>
    );
}