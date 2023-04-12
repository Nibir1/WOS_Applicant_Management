import type { ReactNode } from 'react';
import Link from 'next/link';

import ToggleTheme from '../../../components/client/ToggleTheme';

import styles from './page.module.scss';
export default function ForgotPasswordPage():ReactNode {
  return <>
    <main className={ styles.forgotMain }>
      <div className='vert-center'>
        <h1>Forgot Password?</h1>

        <Link href='/login'>Back to Sign-In</Link>
      </div>
    </main>
    <div className={ styles.forgotToolbar }>
      <ToggleTheme />
    </div>
  </>
}
