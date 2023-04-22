
import { useSession } from '@/session'
import './UserSummary.scss'
import { useNavigate } from 'react-router-dom';
export default function UserSummary() {
  const navigate = useNavigate();
  const session = useSession();
  
  const handleClick = () => navigate('/dashboard/user');

  if(!session)
    return <div>Error</div>;

  return <div className='user-summary' onClick={handleClick}>
    <div className='user-summary-picture'></div>

    <div className='user-summary-info'>
      <h2>{ session.user?.name ?? 'Unknown User' }</h2>
      <h3>{ session.user?.designation ?? 'Unknown Designation' }</h3>
    </div>
  </div>
}