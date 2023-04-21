import type { ReactNode } from 'react';
import type { GetServerSideProps } from 'next';
import { OptSession, getSessionFromRequest } from '@lib/session';

export type IndexProps = {
  foo: string;
};

export const getServerSideProps:GetServerSideProps<IndexProps> = async (context) => {
  const session:OptSession = getSessionFromRequest(context.req);

  return {
    props: {
      foo: session?.test ?? 'BAD',
    }
  }
};

export default function IndexPage({ foo }):ReactNode {
  return <h1>Hello World! { foo }</h1>;
}
