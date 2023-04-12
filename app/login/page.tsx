import type { ReactNode } from 'react';
import Link from 'next/link';

import LoginForm from './LoginForm.client';
import ToggleTheme from '@components/client/ToggleTheme';

import styles from './page.module.scss';
export default function LoginPage():ReactNode {
  return <>
    <main className={ styles.loginMain}>
      <div className='vert-center'>
        <h1>Sign-In to WOS</h1>

        <LoginForm />

        <Link href='/login/forgot-password'>Forgot Password?</Link>
      </div>
    </main>
    <div className={ styles.loginToolbar}>
      <ToggleTheme />
    </div>
  </>
}