import { Outlet } from 'react-router-dom';
import { RequireSession } from '@/session';

import SideBar from './SideBar';

import './layout.scss';
export default function DashboardLayout() {
  return <RequireSession>
    <article id='layout-dashboard' className='page'>
      <SideBar />
      
      <Outlet />
    </article>
  </RequireSession>
}