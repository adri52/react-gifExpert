import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Hook es una funcion que regresa algo
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false); 

    }

    //no puede regresar promesa (no use async)
    useEffect(() => {
        getImages();
    }, [])

    //console.log(images);


    return { 
        images, 
        isLoading
    }
}
