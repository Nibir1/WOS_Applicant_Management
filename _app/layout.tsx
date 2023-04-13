import { Roboto } from 'next/font/google';

import BackgroundImage from '@components/server/Background';
import ThemeApplier from '@components/client/ThemeApplier';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  fallback: [ 'Arial', 'Helvetica', 'sans-serif' ],
});

import '@styles/global.scss';
export default function RootLayout({ children }: { children: ReactNode }):ReactNode {
  return (
    <html lang="en" className={ roboto.className }>
      <body>
        <ThemeApplier />
        <BackgroundImage />
        {children}
      </body>
    </html>
  );
}

export const metadata:Metadata = {
  title: 'WOS Applicant Management',
};
