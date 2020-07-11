// ./src/views/Category.js
import React from 'react';
import { Link, Route } from 'react-router-dom';

import Article from './../components/Article';
import Pagination from './../components/Pagination';
import categories from './../data/categories.json';
import articles from './../data/articles.json';

const Category = () => {
    const nav = categories.map(item => (
        <li key={item.url}>
            <Link to={ item.url }>{ item.text}</Link>
        </li>
    ));
    
    const routes = categories.map(item => {
        const artCat = articles.filter(
            art => art.categories.includes(item.id)
        );
        return (
            <Route key={item.url} path={item.url}>
                <h3>{item.text}</h3>
                <Pagination 
                    path={item.url} 
                    limit={1}
                >
                    {artCat.map(art => 
                        <Article key={art.id} {...art}/>)}
                </Pagination>
            </Route>
        );
    });

    return (
        <>
            <h2>Kategorie</h2>
            { nav }
            { routes }
        </>
    );
}

export default Category;

