import { getFormData } from '@/utils';

import type { ActionFunctionArgs } from 'react-router-dom';
import type { LoginFormData, LoginFormResponse } from './Body';
import type { OptSessionUser } from '@/session';

async function performLogin(email:string, password:string):Promise<OptSessionUser> {
  if(email === 'test@example.com' && password === 'Test123') {
    return {
      id: '1234',
      name: 'William Testington',
      picture: '',
    };
  }

  return null;
}

export default async function loginFormAction({ request }:ActionFunctionArgs):Promise<LoginFormResponse> {
  const { accountEmail, accountPassword } = await getFormData<LoginFormData>(request);

  const response:LoginFormResponse = { user: null, errors: {} };

  if (typeof accountEmail !== "string" || !accountEmail.includes("@"))
    response.errors.email = true;

  if (typeof accountPassword !== "string" || accountPassword.length < 6)
    response.errors.password = true;


  // Do a dumb login check
  const optUser = await performLogin(accountEmail, accountPassword);
  if(optUser)
    response.user = optUser;
  else
    response.errors.badCredentials = true;

  // Check if any errors, otherwise, move on
  return response;
}
