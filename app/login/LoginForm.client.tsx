"use client";

import Link from 'next/link';
import { EmailInput, PasswordInput } from '@components/client/TextInput';
import Button from '@components/client/Button';

import styles from './LoginForm.module.scss';
export default () => {
  const handleSubmit = () => {};

  return <form className={styles.loginForm}>
    <h1>Sign-In to WOS</h1>
    
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
    
    <Button type='submit' onPress={handleSubmit}>Sign In</Button>
    
    <Link href='/login/forgot-password'>Forgot Password?</Link>
  </form>
};