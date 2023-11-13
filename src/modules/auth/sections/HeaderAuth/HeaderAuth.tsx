import { useNavigate } from 'react-router-dom';
import './HeaderAuth.scss';

export const HeaderAuth = () => {
  const navigate = useNavigate();
  return (
    <header className="header header-auth">
        <div className='header-auth__image' onClick={()=>navigate('/')}>
            <p>Logo Luchito Store</p>
        </div>
    </header>
    
  )
}
