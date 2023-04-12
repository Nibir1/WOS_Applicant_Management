import type { ReactNode } from 'react';

import LoginForm from './LoginForm.client';
import ToggleTheme from './ToggleTheme.client';

import styles from './login-page.module.scss';
export default function LoginPage():ReactNode {
  return <div className={ styles.loginContainer }>
    <section className={ styles.loginPrimary }>
      <main className={ styles.loginForm}>
        <LoginForm />
      </main>
      <div className={ styles.loginToolbar}>
        <ToggleTheme />
      </div>
    </section>
    <div className={ styles.loginGreeting }>
      <div className='vert-center'>
        <h2>Hello, Mate!</h2>
        <p>Welcome to Way Out Solution's<br/>Applicant Management Service</p>
      </div>
    </div>
  </div>
}