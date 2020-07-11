// ./src/Contact.js
import React from 'react';
import { Link  } from 'react-router-dom';

const Contact = () => {

    const toHome = {
        pathname: '/',
        search: '',
        hash: '',
        state: { fromContact: true }
    }
    
    return (
        <section>
            <h2>Contact</h2>
            <p>Idź do <Link 
                    to={ toHome }
                    className="link"
                    id="best"
                    rel="nofollow"
                    style={{ color: 'red' }}
                >Home</Link>
            !</p>
        </section>
    );
}

export default Contact;