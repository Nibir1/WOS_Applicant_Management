"use client"

import { useEffect } from 'react';

import type { ReactNode } from 'react';

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error,
  reset: Function,
}):ReactNode {

  useEffect(() => {
    console.error('Error detected', error);
  }, [ error ]);

  return <div className='error'>
    <h2>Oops, a big error occured</h2>
    <button onClick={() => reset()}>Try Again</button>
  </div>
}
