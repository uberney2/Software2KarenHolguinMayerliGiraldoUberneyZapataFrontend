import { NavbarComponent } from "../../components/navbar/NavbarComponent";
import { ProductGrid } from "../../components/productGrid/ProductGrid";

export const Home = () => {
  return (
    <NavbarComponent>
      <ProductGrid />
    </NavbarComponent>
  );
};
