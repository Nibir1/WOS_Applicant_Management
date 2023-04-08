import type { ReactNode } from 'react';

import './login-layout.scss';
export default function LoginLayout({ children }: { children: ReactNode }):ReactNode {
  return <div id='layout-login'>
    <h1>Login Page</h1>
    { children }
  </div>
}