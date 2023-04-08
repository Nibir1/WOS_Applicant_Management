import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.scss';

export default function RootLayout({ children }: { children: ReactNode }):ReactNode {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata:Metadata = {
  title: 'WOS Applicant Management',
};
