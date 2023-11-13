import { CategoriesStore } from "../../components/CategoriesStore/CategoriesStore"
import { SalesStore } from "../../components/SalesStore/SalesStore"

export const HomeStore = () => {
  return (
    <div className="home">
        <SalesStore/>
        <CategoriesStore/>
    </div>
  )
}
