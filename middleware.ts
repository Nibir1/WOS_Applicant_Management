import { addSessionHeaders } from '@lib/session';
import { NextRequest, NextResponse } from 'next/server';

import type { Session } from '@lib/session';

const publicPaths = [
  '/login',
  '/forgot-password',
];

function startsWithAny(str:string, list:string[]):boolean {
  for(const check of list) {
    if(str.startsWith(check))
      return true;
  }

  return false;
}

export async function middleware(request: NextRequest) {

  // Protected paths
  if(!startsWithAny(request.nextUrl.pathname, publicPaths)) {
    //return NextResponse.redirect(new URL('/login', request.url));
  }

  const session:Session = {
    test: 'Working',
  };

  const newHeaders = new Headers(request.headers);
  newHeaders.set('X-Session', JSON.stringify(session));

  const response = NextResponse.next({
    request: {
      headers: newHeaders,
    }
  });

  console.log(`[TRACE] ${response.status} ${request.method} ${request.nextUrl.pathname}`);

  return response;
}
