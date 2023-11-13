import { Link } from 'react-router-dom';
import './FooterStore.scss';
import { IconBrandDiscord, IconBrandFacebook, IconBrandLinkedin } from '@tabler/icons-react';

export const FooterStore = () => {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <ul className='footer__list'>
          <li><span className='footer__list--title'>Sobre LuchitoStore</span></li>
          <li>
            <Link to=''>Sobre Nosotros</Link>
          </li>
          <li>
            <Link to=''>Contactanos</Link>
          </li>
        </ul>
        <ul className='footer__list'>
          <li><span className='footer__list--title'>Comprar</span></li>
          <li><Link to=''>Como comprar</Link></li>
          <li><Link to=''>Lista de productos</Link></li>
        </ul>
        <ul className='footer__list'>
          <li><span className='footer__list--title'>Ayuda</span></li>
          <li><Link to=''>Como activar producto</Link></li>
          <li><Link to=''>Politica de devoluciones</Link></li>
        </ul>
        <ul className='footer__list'>
          <li><span className='footer__list--title'>Comunidad</span></li>
          <li><Link to=''>Blog</Link></li>
        </ul>
      </div>
      <div className='footer-links'>
        <p>Siguenos</p>
        <ul className='footer-links__items'>
          <li className='footer-links__item'>
            <Link to=''>
              <IconBrandFacebook size={30}/>
            </Link>
          </li>
          <li className='footer-links__item'>
            <Link to=''>
              <IconBrandDiscord size={30}/>
            </Link>
          </li>
          <li className='footer-links__item'>
            <Link to=''>
              <IconBrandLinkedin size={30}/>
            </Link>
          </li>
        </ul>
      </div>
      <div className='footer-copy'>
        <p>Copyright © 2023 Luchito Store. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
