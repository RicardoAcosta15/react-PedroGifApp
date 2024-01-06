import { useState } from "react"
import PropTypes from 'prop-types'


export const AddCategory = ({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState('')


    //Permite que el input este emitiendo el valor segun 
    //se valla escribiendo
    const ChangeValue = ({target}) =>{
        
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue.trim());
        if(inputValue.trim().length <= 1) return;

        // addCategory(categories => [inputValue, ...categories])
        onNewCategory(inputValue)
        setInputValue('')
    }



    return (

        <form onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ChangeValue}
            />

        </form>
    )
}

AddCategory.propTypes ={
    onNewCategory: PropTypes.func.isRequired
}