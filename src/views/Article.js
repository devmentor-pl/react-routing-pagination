import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import articles from './../data/articles.json';
// ...
const Article = () => {
    const { id, alias } = useParams();
    const [ article = null] = articles.filter(
        art => art.id === parseInt(id)
    );

    if(article === null) {
        return <Redirect to='/404.html' />
    }

    const {title, intro} = article;
    // ...
    return (
        <article data-id={ id } data-alias={ alias }>
            <h1>{ title }</h1>
            <p>{ intro }</p>
        </article>
    );
}

export default Article;