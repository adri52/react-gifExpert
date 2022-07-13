import { useState } from "react"

//es importante Desestructilizar, ya que AddCategory es todoa una lable que contiene muchas 
//cosas, nosotros solo queremos lo que es el metodo "onNewCategory()"
export const AddCategory = ({ onNewCategory }) => {

    //use state 
    const [inputValue, setInputValue] = useState('');

    //Cuando hacemos cambios, o editamos la barra de texto 
    // agarraremos el valor por lo cual cambiamos y se lo asignaremos 
    // al inputValue
    const onInputChage = (event) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }


    const onSubmit = (event) => { 
        event.preventDefault();
        //si tenemos espacio vacio
        if( inputValue.trim().length <= 1) return; 

        //setCategories( categories =>  [inputValue, ...categories]);
        //vaciar la caja de input
        onNewCategory( inputValue.trim() ); 
        setInputValue(''); 
    }

    return (
        //Hace un full refresh del navegador web 
        <form onSubmit={ onSubmit }>
            {/* lo que va adentro de la barra de texto */}
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChage}
            />
        </form>

    )
}
