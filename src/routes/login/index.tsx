import LoginBody from './Body';
import LoginGreeting from './Greeting';

import './index.scss'
export default function LoginPage() {
  return <article id='page-login' className='page'>
    <LoginBody />
    <LoginGreeting />
  </article>
}