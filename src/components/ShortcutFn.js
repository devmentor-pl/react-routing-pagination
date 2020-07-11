// ./src/components/ShortcutFn.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const ShortcutFn = () => {
    const history = useHistory();

    const handleChange = event => {
        history.push( event.target.value );
    }

    return (
        <select onChange={ handleChange }>
            <option value=''>Wybierz stronę</option>
            <option value='/'>Home</option>
            <option value='/contact'>
                Contact
            </option>
        </select>
    );
}

export default ShortcutFn;