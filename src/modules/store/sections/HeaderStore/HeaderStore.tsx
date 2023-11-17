import { IconMenu2,IconHeart,IconUser,IconShoppingCart,IconSearch} from '@tabler/icons-react';
import { useState} from "react";
import { SearchStore } from '../../components/SearchStore/SearchStore';
import './HeaderStore.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/useCart';


export const HeaderStore = () => {


  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);

  const openSearch=()=>{
    setIsOpenSearch(!isOpenSearch);
  }

  const {cartQuantity} = useCart();

  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav-items'>
          <li className='nav-items__left'>
            <IconMenu2 className='nav-icon'/>
            <p>Luchito Store</p>
          </li>
          <li className='nav-items__right'>
            <IconHeart className='nav-icon nav-icon__hidden'/>
            {/* <div className={`nav-item ${isOpenSearch ? 'nav-input--open': ''}`}>
              <IconSearch className='nav-icon' onClick={openSearch}/>
              <input type="text" className={`nav-input ${isOpenSearch ? 'nav-input--open': ''}`} />
            </div> */}
            {
              !isOpenSearch ?
              <IconSearch className='nav-icon' onClick={openSearch}/>
              :
              <SearchStore openSearch={openSearch}/>
            }
            <div>
            <Link to='/checkout'>
              <IconShoppingCart className='nav-icon'/>
              {cartQuantity}
            </Link>
            </div>
            <Link to='login'>
              <IconUser className='nav-icon'/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
