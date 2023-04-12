import type { ReactNode } from 'react';

import styles from './layout.module.scss';
export default function LoginLayout({ children }: { children: ReactNode }):ReactNode {
  return <div className={ styles.loginContainer }>
    <section className={ styles.loginPrimary }>
      { children }
    </section>
    <div className={ styles.loginGreeting }>
      <div className='vert-center'>
        <h2>Hello, Mate!</h2>
        <p>Welcome to Way Out Solution's<br/>Applicant Management Service</p>
      </div>
    </div>
  </div>
}