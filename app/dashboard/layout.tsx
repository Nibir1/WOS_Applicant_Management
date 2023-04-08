import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }):ReactNode {
  return <div id='layout-dashboard'>
    <h1>Dashboard Page</h1>
    { children }
  </div>
}