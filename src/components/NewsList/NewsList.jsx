import React from 'react';
import cl from "./NewsList.module.scss"
import {newsArray} from "../../consts/newsArray"
import NewsItem from "../NewsItem/NewsItem";

const NewsList = () => {
    return (
        <section className={cl.list}>
            {newsArray.map(article => <NewsItem key={`${article.title}-${article.published_at}`} article={article}/>)}
        </section>
    );
};

export default NewsList;