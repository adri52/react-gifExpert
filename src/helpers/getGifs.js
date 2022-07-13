//Tratamos de tenerlo a fuera de tal manera que no va estar 
//reprocesando esta funcion 
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=YfRIpGIA4JToUd5EeE62AXhvTWDkgY2D&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}