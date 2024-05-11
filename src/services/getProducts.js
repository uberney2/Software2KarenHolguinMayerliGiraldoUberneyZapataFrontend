export const getProducts = async (token) => {
    const url = 'http://localhost:3000/api/product/searchProduct';
    
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjNlOTczMDFlODBmODQ3YjEwMTFiMjMiLCJpYXQiOjE3MTU0NTc3MzYsImV4cCI6MTcxNTQ2MTMzNn0.ENxI4RHsBG1vFYXEbgLAsud1zuz0NDP9afEK75f1tLs` // Agrega el token JWT al encabezado Authorization
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