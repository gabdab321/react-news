import React, {useEffect, useMemo, useState} from 'react';
import cl from "./NewsList.module.scss"
import NewsItem from "../NewsItem/NewsItem";
import {useSelector} from "react-redux";
import {useRequest} from "../../hooks/useRequest";
import NewsService from "../../API/NewsService";
import MyPagination from "../UI/pagination/MyPagination";
import MyLoader from "../UI/loader/MyLoader";
import {countTotalPages, getCurrentPage} from "../../utils/paginationUtils"

const NewsList = () => {
    const category = useSelector(state => state.category.currenCategory)

    const [page, setPage] = useState(0)
    const limit = 30
    const [offset, setOffset] = useState(0)

    // const pageCount = useMemo(() => {
    //     return countTotalPages(limit, offset)
    // }, [offset])

    const [news, setNews] = useState([])
    const [fetchNews, isLoading, error] = useRequest(async() => {
        const response = await NewsService.getNews(category, limit, offset)

        setOffset(response.pagination.offset)
        setNews(response.data)
    })

    // useEffect(() => {
    //     fetchNews()
    // }, [])

    return (
        <section className={cl.list}>
            {isLoading ?
                <MyLoader />
                    :
                <>
                    {news.map(article => <NewsItem key={`${article.title}-${article.published_at}`} article={article}/>)}
                    <MyPagination onPageChange={e => console.log(e)} pageCount={20}/>
                </>
            }

        </section>
    );
};

export default NewsList;