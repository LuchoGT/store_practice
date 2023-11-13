import { CarouselStore } from "../../sections/CarouselStore/CarouselStore"
import { HomeStore } from "../../sections/HomeStore/HomeStore"
import { StoreTemplate } from "../../template/StoreTemplate"

export const StorePage = () => {
  return (
    <StoreTemplate>
      <CarouselStore/>
      <HomeStore/>
    </StoreTemplate>
  )
}
