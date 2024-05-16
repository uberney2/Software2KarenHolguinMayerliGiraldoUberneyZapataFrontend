export const getFollowers = async (token) => {
    const url = 'http://localhost:3000/api/follow/followers';
    
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
            throw new Error('Failed to fetch followers');
        }
        const { followers } = await resp.json();
        return followers;
    } catch (error) {
        console.error('Error fetching followers:', error);
        throw error; 
    }
};