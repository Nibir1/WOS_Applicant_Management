import { Link, Form, useLocation, useNavigate } from 'react-router-dom';
import { useSession } from '@/session';
import { checkError, useActionData } from '@/utils';

import EmailInput from '@components/TextInput/EmailInput';
import PasswordInput from '@components/TextInput/PasswordInput';
import Button from '@components/Button';

import type { OptSessionUser } from '@/session';

/**
 * Defines the typescript form data to be used by `./action.ts` to
 * parse the sent form.
 */
export type LoginFormData = {
  accountEmail: string;
  accountPassword: string;
};

/**
 * Defines the typescript object structure for form validation errors.
 */
export type LoginFormResponse = {
  user: OptSessionUser;

  errors: {
    badCredentials?: boolean;
    email?: boolean;
    password?: boolean;
  }
};

import './Body.scss';
export default function LoginBody() {
  const location = useLocation();
  const navigate = useNavigate();

  const session = useSession();
  const response = useActionData<LoginFormResponse>();

  const backTo = location.state?.from?.pathname || "/dashboard";

  // See if login was successful  
  if(session && response && response.user) {
    session.setUser(response.user);
    navigate(backTo, { replace: true });
    return null;
  }

  return <section id='page-login-body' className='vert-center'>
    <div className='align-center'>
      <h1>Sign-In to WOS</h1>

      { response && response.errors.badCredentials && <span className='text-error'>
        Invalid email address, or password. Please check the information entered and try again.
      </span> }

      <Form method='post' action='/login' className='align-center'>
        <EmailInput id='loginEmail'
          name='accountEmail'
          label='Account Email Address'
          hideLabel
          errorMessage={checkError('email', 'Invalid email address', response?.errors)}
          autoComplete='email'
          autoFocus
          isRequired
          />
        
        <PasswordInput id='loginPassword'
          name='accountPassword'
          label='Account password'
          hideLabel
          errorMessage={checkError('password', 'Invalid password format', response?.errors)}
          autoComplete='current-password'
          isRequired
          />
        
        <Button type='submit'>Sign In</Button>
      </Form>

      <Link to='/forgot-password'>Forgot your password?</Link>
    </div>
  </section>
}
