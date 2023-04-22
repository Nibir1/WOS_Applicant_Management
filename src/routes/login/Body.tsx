import { Link } from 'react-router-dom';

import './Body.scss';
export default function LoginBody() {
  return <section id='page-login-body' className='vert-center'>
    <div className='align-center'>
      <h1>Sign-In to WOS</h1>
      <Link to='/forgot-password'>Forgot your password?</Link>
    </div>
  </section>
}