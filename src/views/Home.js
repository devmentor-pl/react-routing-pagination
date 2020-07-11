// ./src/Home.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
    const { state } = useLocation();

    useEffect(() => {
        console.log('zamontowany');
        return () => console.log('odmontowany');
    }, []);

    const paragraph = state && state.fromContact
        ? <p>Witamy ponownie!</p>
        : <p>Idź do <Link to="/contact">??</Link>!</p>

    return (
        <section>
            <h2>Home</h2>
            { paragraph }
        </section>
    );
}

export default Home;