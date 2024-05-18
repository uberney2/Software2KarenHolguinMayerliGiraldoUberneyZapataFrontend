import { useEffect, useState } from 'react';
import { getFollowingsProducts } from '../services/getFollowingsProducts';

export const useFetchFollowingProducts = (token) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFollowingProducts = async () => {
    try {
      setIsLoading(true);
      const followerProducts = await getFollowingsProducts(token);

      // Extraer productos de cada usuario seguido
      const allProducts = followerProducts.reduce((acc, follower) => {
        return [...acc, ...follower.user.products];
      }, []);

      setProducts(allProducts);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching user products:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowingProducts();
  }, [token]);

  return {
    products,
    isLoading,
  };
};
