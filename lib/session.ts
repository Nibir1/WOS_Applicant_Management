import type { NextRequest } from 'next/server';

export const SESSION_HEADER_KEY = 'X-Session' as const;

export type Session = {
  test: string;
};

export type OptSession = Session | null;

export type WithHeaders = {
  headers: Record<string, any>;
};

export function addSessionHeaders(headers:Headers, session:Session):void {
  headers.set(SESSION_HEADER_KEY, JSON.stringify(session));
}

export function getSessionFromRequest(req:WithHeaders):OptSession {
  if(req.headers) {
    const rawSess = req.headers[SESSION_HEADER_KEY];
    if(rawSess && typeof rawSess === 'string') {
      console.log('FOUND SESSION HEADER', rawSess);
      return JSON.parse(rawSess) as Session;
    } else {
      console.error('No session header');
    }
  } else {
    console.error('No headers present');
  }

  return null;
}
