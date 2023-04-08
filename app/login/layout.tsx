import type { ReactNode } from 'react';

import './login-layout.scss';
export default function LoginLayout({ children }: { children: ReactNode }):ReactNode {
  return <div id='layout-login'>
    { children }
  </div>
}