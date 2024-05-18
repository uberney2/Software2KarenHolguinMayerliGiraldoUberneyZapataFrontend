import { useFetchFollowingProducts } from '../../hooks/useFetchFollowingProducts';
import { useAuth } from "../../components/auth/AuthProvider";
import { ProductGrid } from '../../components/productGrid/ProductGrid';
import { NavbarComponent } from '../../components/navbar/NavbarComponent';

export const NetworkComponent = () => {
  const auth = useAuth();
  const { products, isLoading } = useFetchFollowingProducts(auth.getToken());
  console.log(products)
  
  return (
    <NavbarComponent>
      <div className="container">
        <h3 className="product-grid-title">Products from Followings</h3>
        <ProductGrid products={products} isLoading={isLoading} />
      </div>
    </NavbarComponent>
  );
};
