export const getProducts = async (token) => {
    const url = 'http://localhost:3000/api/product/searchProduct';
    
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    };

    try {
        const resp = await fetch(url, requestOptions);
        if (!resp.ok) {
            throw new Error('Failed to fetch products');
        }
        const { products } = await resp.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; 
    }
};