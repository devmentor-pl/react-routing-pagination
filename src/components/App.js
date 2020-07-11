// ./src/components/App.js
import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Nav from './Nav';
import Home from './../views/Home';
import Contact from './../views/Contact';
import Category from './../views/Category'
import NotFound from './../views/NotFound';
import Article from './../views/Article';

function App() {
    return (
        <Router>
            <nav>
                <h1>Routing</h1>
                <Nav/>
            </nav>
            <Switch>
                <Redirect from='/beta' to='/'/>
                <Route exact path='/'>
                    <Home/>
                </Route> 
                <Route path='/contact'>
                    <Contact/>
                </Route>
                <Route path='/category'>
                    <Category/>
                </Route>
                <Route path='/article/:id-:alias'>
                    <Article/>
                </Route>
                {/* ... */}
                <Route path='/404.html'>
                    <NotFound/>
                </Route>
                <Route>
                    <Redirect to='/404.html'/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
