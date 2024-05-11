import {useFetchProducts} from '../../hooks/useFetchProducts';
import {ProductGridItem} from '../productGridItem/ProductGridItem'
import './ProductGrid.css'
export const ProductGrid = () => {
    const {products, isLoading} = useFetchProducts()
  return (
   <>
        <h3>Products</h3>
        <div className='grid'>
            {
                products.map(product => (
                    <ProductGridItem
                    key={product.id}
                    {...product}/>
                ))
            }
        </div>
   </>
  )
}


