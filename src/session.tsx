/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface SessionUser {
  id: string;
  name: string;
  picture: string;
}
export type OptSessionUser = SessionUser | null;

export type Session = {
  user: OptSessionUser;

  setUser: (user:SessionUser) => void;
  destroy: () => void;
}
export type OptSession = Session | null;

const SessionContext = createContext<OptSession>(null);

export function isSessionValid(session:OptSession):boolean {
  return !!(session && session.user && session.user.id);
}

export function useSession() {
  return useContext<OptSession>(SessionContext);
}

export function useValidSession() {
  const session = useSession();
  return isSessionValid(session);
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [ user, setStateUser ] = useState<OptSessionUser>(null);

  const setUser = (user:SessionUser) => {
    if(user && user.id && user.name)
      setStateUser(user);
  };

  const destroy = () => {
    setStateUser(null);
  }

  const session = {
    user,
    setUser,
    destroy,
  }

  console.log('Session provider rendered');

  return <SessionContext.Provider value={session} >
    { children }
  </SessionContext.Provider>
}

export function SessionRootRedirect() {
  const session = useSession();

  return <Navigate to={ (session && session.user ) ? '/dashboard' : '/login' } replace />
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RequireSession({ children }: { children: ReactNode }):any {
  const session = useSession();
  const location = useLocation();

  if(!isSessionValid(session))
    return <Navigate to='/login' state={{ from: location }} replace />;

  return children;
}
