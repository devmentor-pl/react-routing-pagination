// ./src/components/Article.js
import React from 'react';

const Article = props => {
    const {id, title, intro} = props;
    return (
        <article data-id={id}>
            <h3>{title}</h3>
            <p>{intro}</p>
        </article>
    );
}

export default Article;