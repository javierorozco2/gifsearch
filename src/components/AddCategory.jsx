import { useState } from "react"

export const AddCategory = ( { onNewValue } ) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if ( inputValue.trim().length <=0 ) return;

        // setCategories( cat => [inputValue, ...cat])
        onNewValue(inputValue.trim())
        setInputValue("")
    }

    return (
        <form onSubmit={ (e) => onSubmit(e) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange = { e => onInputChange(e)}
            />
        </form>
    )
}
