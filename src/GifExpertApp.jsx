import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


export const GifExpertApp = () => {
    //para almacenar ifomacion que tiene que cambiar html
    //necesito hook de react para mantener estado -> useState -> useStateSnippets (shotcut)
    const [categories, setCategories] = useState(['One Punch']);

    //Agregar un nuevo elemento al listado de categorias
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                //Esta es una funcion que creamos, en donde el 'value' del paramentro es lo 
                //que le ponemos cuando lo llamamos en AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {/* Listado de Gifts */}
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
            {/* Gift Item */}
        </>
    )
}