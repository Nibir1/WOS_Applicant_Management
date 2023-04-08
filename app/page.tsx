import Link from 'next/link';

import type { ReactNode } from 'react';

export default function IndexPage():ReactNode {
  return <>
    <h1>Hello, World!</h1>
    <Link href='/login'>To Login</Link>
    <Link href='/dashboard'>To Dashboard</Link>
  </>;
}