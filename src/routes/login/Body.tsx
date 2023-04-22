import { Link, Form } from 'react-router-dom';

import EmailInput from '@components/TextInput/EmailInput';
import PasswordInput from '@components/TextInput/PasswordInput';
import Button from '@components/Button';

import './Body.scss';
export default function LoginBody() {
  return <section id='page-login-body' className='vert-center'>
    <div className='align-center'>
      <h1>Sign-In to WOS</h1>

      <Form method='post' className='align-center'>
        <EmailInput id='loginEmail'
          name='accountEmail'
          label='Account Email Address'
          hideLabel
          autoComplete='email'
          autoFocus
          isRequired
          />
        
        <PasswordInput id='loginPassword'
          name='accountPassword'
          label='Account password'
          hideLabel
          autoComplete='current-password'
          isRequired
          />
        
        <Button type='submit'>Sign In</Button>
      </Form>

      <Link to='/forgot-password'>Forgot your password?</Link>
    </div>
  </section>
}
