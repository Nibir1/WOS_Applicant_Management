'use client'

import { useEffect } from 'react';

import type { ReactNode } from 'react';

export default function GlobalError({
  error,
}: {
  error: Error,
}):ReactNode {

  useEffect(() => {
    console.error('Error detected', error);
  }, [ error ]);

  return <html>
    <body>
      <h1>Oops! Something Went Wrong</h1>
    </body>
  </html>;
}