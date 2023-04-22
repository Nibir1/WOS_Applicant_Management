import { Outlet } from 'react-router-dom';
import { RequireSession } from '@/session';

import './layout.scss';
export default function DashboardLayout() {
  return <RequireSession>
    <article id='layout-dashboard' className='page'>
      <h1>Dashboard</h1>
      <Outlet />
    </article>
  </RequireSession>
}