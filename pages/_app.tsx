import { Roboto } from 'next/font/google';

import type { ReactNode } from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  fallback: [ 'Arial', 'Helvetica', 'sans-serif' ],
});

import '@styles/global.scss';
export default function Application({ Component, pageProps }):ReactNode {
  return <main className={ roboto.className }>
    <Component {...pageProps} />
  </main>
};
