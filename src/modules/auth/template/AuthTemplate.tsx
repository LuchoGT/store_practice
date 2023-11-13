import { FooterAuth } from "../sections/FooterAuth/FooterAuth"
import { HeaderAuth } from "../sections/HeaderAuth/HeaderAuth"
import './AuthTemplate.scss';

interface props{
    children: JSX.Element| JSX.Element[]
}
export const AuthTemplate = ({children}:props) => {
  return (
    <div className="AuthTemplate">
        <HeaderAuth/>
        {children}
        <FooterAuth/>
    </div>
  )
}
