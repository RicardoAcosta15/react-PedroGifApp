import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const PedroGifsApp = () =>{

    //El state que nos ayuda a saber el estado de una lista ordenada
    const [categories, setcategories] = useState([])
    

    //Funcion que estara cambiando el estado de la lista segun el valor que reciba

    // eslint-disable-next-line no-unused-vars
    const onAddCategory = (newCategory) => {

        const lowerCaseCategories = categories.map(category => category.toLowerCase());
        const lowerCaseNewCategory = newCategory.toLowerCase();

        if (lowerCaseCategories.includes(lowerCaseNewCategory)) {

            alert(`La categoría ${newCategory} ya existe en el contexto actual`);
            return;
        }
            
        
        setcategories(prevArray => [newCategory,...prevArray, ])
    }


    return(
        <>

            
            {/*titulo */}
            <h1>Gif App kakin</h1>   


            
            {/* Invocacion del hijo en el componente Padre */}
            <AddCategory 
                // addCategory={setcategories}
                onNewCategory = { onAddCategory}
            />
            

            
            
            
                {/* Mapeo del estado para mostrarlo en la lista */}
                {categories.map(category => {
                    return(
                        <GifGrid key={category} category={category}/>
                    )
                })}
                
           
               
        </>
    )
}