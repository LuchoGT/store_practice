import { IconCategory } from "@tabler/icons-react";
import "./CardCategoryStore.scss";

export const CardCategoryStore = () => {
  return (
    <div className="card-category">
      <div className="card-category__container">
        <IconCategory />
        <p>Nombre</p>
      </div>
    </div>
  );
};
