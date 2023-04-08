import Link from 'next/link';

import type { ReactNode } from 'react';

export default function NotFound():ReactNode {
  return <div>
    <h1>Oops! Page Not Found</h1>
    <Link href='/'>Back To Home</Link>
  </div>;
}
