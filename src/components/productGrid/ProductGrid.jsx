import { useFetchProducts } from "../../hooks/useFetchProducts";
import { ProductGridItem } from "../productGridItem/ProductGridItem";
import "./ProductGrid.css";

export const ProductGrid = () => {
  const { products, isLoading } = useFetchProducts();

  return (
    <div className="product-grid">
      <h3 className="product-grid-title">Products</h3>
      <div className="product-grid-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <ProductGridItem key={product._id} {...product} />
          ))
        )}
      </div>
    </div>
  );
};
