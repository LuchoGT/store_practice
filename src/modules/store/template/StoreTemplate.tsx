import { FooterStore } from "../sections/FooterStore/FooterStore"
import { HeaderStore } from "../sections/HeaderStore/HeaderStore"

interface props{
    children: JSX.Element | JSX.Element[]
}

export const StoreTemplate = ({children}:props) => {
  return (
    <>
        <HeaderStore/>
        {children}
        <FooterStore/>
    </>
  )
}
