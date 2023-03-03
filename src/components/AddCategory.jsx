import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChanged = ({target}) => {
        setinputValue( target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setcategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setinputValue('');
    };

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChanged }
        />
    </form>
    
  )
}
