// ./src/components/NotFound.js
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShortcutFn from '../components/ShortcutFn';

const NotFound = ({redirectToHome = false}) => {
    if(redirectToHome) {
        return <Redirect to='/'/>
    }
    
    return (
        <>
            <ShortcutFn />
            <p>Podana strona nie istnieje! Wróć do <Link to="/">strony głównej</Link>.</p>
        </>
    );
}

export default NotFound;