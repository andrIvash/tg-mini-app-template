const API_URL = process.env.REACT_APP_API_URL || '';

export const fetchData = async () => {
    try {
        const response = await fetch(`${API_URL}/data`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
    }
};
