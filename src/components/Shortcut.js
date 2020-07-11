// ./src/components/Shortcut.js
import React from 'react';
import { Redirect } from 'react-router-dom';

class Shortcut extends React.Component {
    state = {
        redirect: null,
    }

    handleChange = event => {
        this.setState({
            redirect: event.target.value,
        });
    }

    render() {
        const { redirect } = this.state;
        if(redirect) {
            return <Redirect to={ redirect }/>
        }

        return (
            <select onChange={ this.handleChange }>
                <option value=''>Wybierz stronę</option>
                <option value='/'>Home</option>
                <option value='/contact'>
                    Contact
                </option>
            </select>
        );
    }
}

export default Shortcut