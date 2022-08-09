import React, {useCallback, useEffect, useMemo, useState} from 'react';
import cl from "./NewsList.module.scss"
import NewsItem from "../NewsItem/NewsItem";
import {useSelector} from "react-redux";
import {useRequest} from "../../hooks/useRequest";
import NewsService from "../../API/NewsService";
import MyPagination from "../UI/pagination/MyPagination";
import MyLoader from "../UI/loader/MyLoader";
import {countTotalPages, getCurrentPageOffset, getPageByOffset} from "../../utils/paginationUtils"

const NewsList = () => {
    const category = useSelector(state => state.category.currenCategory)

    const limit = 30

    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)

    const [currentPage, setCurrentPage] = useState(0)

    const pageCount = useMemo(() => {
        return countTotalPages(total, limit)
    }, [total])

    const [news, setNews] = useState([])
    const [fetchNews, isLoading, error] = useRequest(async() => {
        const response = await NewsService.getNews(category, limit, offset)

        setTotal(response.pagination.total)
        setNews(response.data)
    })

    useEffect(() => {
        fetchNews()
    }, [offset, category])

    return (
        <section className={cl.list}>
            {isLoading ?
                <MyLoader />
                    :
                <>
                    {news.map(article => <NewsItem key={`${article.title}-${article.published_at}`} article={article}/>)}

                    <MyPagination
                        onPageChange={e => {
                            setOffset(getCurrentPageOffset(e.selected + 1, limit))
                            setCurrentPage(e.selected)
                        }}
                        pageCount={pageCount}
                        forcePage={currentPage}
                    />
                </>
            }

        </section>
    );
};

export default NewsList;