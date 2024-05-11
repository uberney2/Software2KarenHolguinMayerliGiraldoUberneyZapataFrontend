import {useEffect, useState} from 'react'
import {getProducts} from '../services/getProducts'

export const useFetchProducts = () => {
    const[products, setProducts] = useState([]);
    const[isLoading, setIsLoading] = useState(true); 

    const getAllProducts = async () => {
        const products = await getProducts();
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