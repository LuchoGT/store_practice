import { Principal } from "@/interfaces/results/results"
import './CardSearchStore.scss'
export const CardSearchStore = ({name,image}:Principal) => {
  return (
    <>
      <div className="card-search">
          <div className="card-search__image">
              <img src={image} alt={name} />
          </div>
          <div className="card-search__data">
              {name}
          </div>
      </div>
    </>
  )
}
