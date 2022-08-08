import React from 'react';
import cl from "./NewsItem.module.scss"

const NewsItem = ({article}) => {
    return (
        <article className={cl.article}>

            <div className={cl["article__img-container"]}>
                <img className={cl.article__img} src={article.image} alt="" />
            </div>

            <div className={cl.article__container}>
                <p className={cl.article__title}>{article.title}</p>
                <hr className={cl.article__hr}/>
                <p className={cl.article__description}>{article.description}</p>

                <div className={cl["article__meta-container"]}>

                </div>
            </div>
        </article>
    );
};

export default NewsItem;