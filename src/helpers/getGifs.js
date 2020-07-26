


export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=ED9OTj9LXDJHxqyGGITNFxYcAdgHbOFC`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //El signo ? condiciona que la variable venga en las imágenes
        }
    })

    return gifs;
}