import React, {useEffect, useMemo, useState} from 'react';
import cl from "./NewsList.module.scss"
import NewsItem from "../NewsItem/NewsItem";
import {useSelector, useDispatch} from "react-redux";
import {useRequest} from "../../hooks/useRequest";
import NewsService from "../../API/NewsService";
import MyPagination from "../UI/pagination/MyPagination";
import MyLoader from "../UI/loader/MyLoader";
import {countTotalPages, getOffsetByPage} from "../../utils/paginationUtils"
import {setCurrentPageAction, setOffset, setTotalAction} from "../../store/reducers/pagintaionReducer";
import {setNews} from "../../store/reducers/newsReducer";

const NewsList = () => {
    const dispatch = useDispatch()

    const country = useSelector(state => state.country.currentCountry.countryCode)

    const category = useSelector(state => state.category.currenCategory)
    const page = useSelector(state => state.pagination.currentPage)
    const total = useSelector(state => state.pagination.total)
    const limit = useSelector(state => state.pagination.limit)
    const offset = useSelector(state => state.pagination.offset)
    const pageCount = useMemo(() => {
        return countTotalPages(total, limit)
    }, [total])


    const news = useSelector(state => state.news.news)

    const [fetchNews, isLoading] = useRequest(async() => {
        const response = await NewsService.getNews(country, category, limit, offset)

        dispatch(setTotalAction(response.pagination.total))
        dispatch(setNews(response.data))
    })

    useEffect(() => {
        fetchNews()
    }, [offset, category, country])

    return (
        <section className={cl.list}>
            {isLoading ?
                <MyLoader />
                    :
                <>
                    {news.map(article => <NewsItem key={`${article.title}-${article.published_at}-${article.url}-${article.author}`} article={article}/>)}

                    <MyPagination
                        onPageChange={e => {
                            dispatch(setOffset(getOffsetByPage(e.selected, limit)))
                            dispatch(setCurrentPageAction(e.selected))
                        }}
                        pageCount={pageCount}
                        forcePage={page}
                    />
                </>
            }

        </section>
    );
};

export default NewsList;