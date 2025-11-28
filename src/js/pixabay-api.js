import axios from 'axios';


const API_KEY = "49754140-bd1dd51ce5d5c06d761f1a420";

export async function getImagesByQuery(query, page){
    try{
    const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            page: page,
            per_page: 15
        }
    });
    return response.data;
}
    catch (error){
        console.error('Error fetching images:', error);
        return {hits:[], totalHits: 0};
    }
};
