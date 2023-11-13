import { Link } from "react-router-dom";
import "./FooterAuth.scss";

export const FooterAuth = () => {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-list__item">
          <Link to="">Terminos y condiciones</Link>
        </li>
        <li className="footer-list__item">
          <Link to="">Avisos de Privacidad</Link>
        </li>
        <li className="footer-list__item">
          <Link to="">Soporte</Link>
        </li>
        <li className="footer-list__item footer-list__item--copy">
          Copyright © 2023 Luchito Store. Todos los derechos reservados.
        </li>
      </ul>
    </footer>
  );
};
