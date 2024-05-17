import { ProductProvider } from '../../context/ProductContext';
import { NavbarComponent } from '../../components/navbar/NavbarComponent';
import { ProductGrid } from '../../components/productGrid/ProductGrid';
import './home.css';

export const Home = () => {
  return (
    <ProductProvider>
      <NavbarComponent>
        <div className="container">
          <h3 className="product-grid-title">Nuevos Productos</h3>
          <ProductGrid />
        </div>
      </NavbarComponent>
    </ProductProvider>
  );
};
