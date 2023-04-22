/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

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

export function useSession() {
  return useContext<OptSession>(SessionContext);
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

  return <SessionContext.Provider value={session} >
    { children }
  </SessionContext.Provider>
}

export function SessionRootRedirect() {
  const session = useSession();

  return <Navigate to={ (session && session.user ) ? '/dashboard' : '/login' } replace />
}

export function RequireSession({ children }: { children: ReactNode }) {
  const session = useSession();

  if(session && session.user && session.user.id) {
    return children;
  }

  return <Navigate to='/login' />;
}