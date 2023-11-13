import { Link } from "react-router-dom"
import { CardCategoryStore } from "../CardCategoryStore/CardCategoryStore"
import './CategoriesStore.scss';

export const CategoriesStore = () => {
  return (
    <section className="categories">
        <h1 className="categories-title">Categorias</h1>
        <div className="categories-container">
            <ul className="categories-items">
                <li className="categories-items__item">
                    <Link to='/ga'>
                        <CardCategoryStore/>
                    </Link>
                </li>
                <li className="categories-items__item">
                    <Link to='/ga'>
                        <CardCategoryStore/>
                    </Link>
                </li>
                <li className="categories-items__item">
                    <Link to='/ga'>
                        <CardCategoryStore/>
                    </Link>
                </li>
            </ul>
            <div className="categories-all">
                <Link to=''>Cargar mas</Link>
            </div>
        </div>
    </section>
  )
}
