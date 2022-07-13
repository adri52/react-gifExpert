import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftItem } from "./GiftItem";




export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category ); 

    return (
        <>
            <h3>{category}</h3>
            { 
                //si isLoading es true va decir cargando...
                isLoading && (<h2 > Cargando...</h2>)
            }
            
            <div className="card-grid">
                {/* images.map... */}
                {
                    images.map((image) => (
                        <GiftItem
                            key={ image.id }
                            // Sintax to send each property individually 
                            { ...image }
                            
                        />
                    ))
                }
            </div>
        </>
    )
}
