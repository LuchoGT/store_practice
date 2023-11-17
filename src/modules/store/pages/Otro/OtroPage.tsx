import { IconHeart } from "@tabler/icons-react";
import { StoreTemplate } from "../../template/StoreTemplate";
import { useInfo } from "../../hook/useInfo";
import { useInfoPlatzi } from "../../hook/useInfoPlatzi";

export const OtroPage = () => {
  // const { info } = useInfo();
  const { info } = useInfoPlatzi();

  return (
    <StoreTemplate>
      <div className="card">
        <div className="card-container">
          <div className="card-data">
            <img src={info?.images[0]} className="card-data__img" />
            <h3 className="card-data__title">{info?.title}</h3>
            <h1 className="card-data__price">{info?.description}</h1>
          </div>
          <div className="card-button">
            <div className="card-button__wishlist">
              <IconHeart />
            </div>
          </div>
        </div>
      </div>
    </StoreTemplate>
  );
};
