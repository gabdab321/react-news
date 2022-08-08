import React from 'react';
import cl from "./NewsItem.module.scss"
import {imageHelper, slicePublicationTime} from "../../utils/newsItemUtils";

const NewsItem = ({article}) => {
    const publicationTime = slicePublicationTime(article.published_at)

    const src = imageHelper(article.image)

    return (
        <article className={cl.article}>
            <a href={article.url} className={cl["article__img-container"]}>
                <img className={cl.article__img} src={src} alt="" />
            </a>

            <div className={cl.article__container}>
                <a href={article.url} className={cl.article__title}>{article.title}</a>
                <p className={cl.article__description}>{article.description}</p>

                <p className={cl.article__author}>{article.author}</p>
                <p className={cl["article__publication-time"]}>
                    {publicationTime}
                </p>
            </div>
        </article>
    );
};

export default NewsItem;