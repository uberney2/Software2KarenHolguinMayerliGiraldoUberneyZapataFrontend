import { ProductProvider } from '../../context/ProductContext';
import { NavbarComponent } from '../../components/navbar/NavbarComponent';
import { ProductGrid } from '../../components/productGrid/ProductGrid';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import './home.css';

export const Home = () => {
  const { products, isLoading } = useFetchProducts();
  console.log(products)
  return (
    <ProductProvider>
      <NavbarComponent>
        <div className="container">
          <h3 className="product-grid-title">New Products</h3>
          <ProductGrid products = {products} isLoading = {isLoading} />
        </div>
      </NavbarComponent>
    </ProductProvider>
  );
};
