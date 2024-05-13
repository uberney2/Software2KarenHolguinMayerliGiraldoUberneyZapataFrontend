import {useEffect, useState} from 'react'
import {getProducts} from '../services/getProducts'
import { useAuth } from '../components/auth/AuthProvider';

export const useFetchProducts = () => {
    const[products, setProducts] = useState([]);
    const[isLoading, setIsLoading] = useState(true); 
    const auth = useAuth();

    const getAllProducts = async () => {
        const token = auth.getToken();
        const products = await getProducts(token);
        setProducts(products);
        setIsLoading(false);
    }

    useEffect(() => {
        getAllProducts()
    }, []);

    return {
        products,
        isLoading
    }
}