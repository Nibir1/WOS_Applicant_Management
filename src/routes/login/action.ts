import { redirect } from 'react-router-dom';
import { getFormData } from '@/utils';

import type { ActionFunctionArgs } from 'react-router-dom';
import type { LoginFormData, LoginFormErrors } from './Body';

async function performLogin(email:string, password:string) {
  return email === 'test@example.com' && password === 'Test123';
}

export default async function loginFormAction({ request }:ActionFunctionArgs) {
  const { accountEmail, accountPassword } = await getFormData<LoginFormData>(request);

  const errors:LoginFormErrors = {}

  if (typeof accountEmail !== "string" || !accountEmail.includes("@"))
    errors.email = true;

  if (typeof accountPassword !== "string" || accountPassword.length < 6)
    errors.password = true;


  // Do a dumb login check
  const success = await performLogin(accountEmail, accountPassword);
  if(!success)
    errors.badCredentials = true;

  // Check if any errors, otherwise, move on
  if(Object.keys(errors).length)
    return errors;
  return redirect('/dashboard');
}
