import { useContext, createContext, useState, useEffect } from "react";
import {Card, News} from "../interfaces/NewsInterface"
import axios from "axios"

type NewsContextProvider = {
    children: React.ReactNode
}

const NewsContext = createContext<News | null>(null)


const NewsProvider = ({children}: NewsContextProvider) => {

    const [load, setLoad] = useState<boolean>(false)
    const [news, setNews] = useState<Card[]>([])
    const [nbPages, setNbPages] = useState<number>(0)
    const [pages, setPages] = useState<number>(1)
    const [query, setQuery] = useState<string>("react")

    useEffect(() => {
        setLoad(true)
        axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${pages}`).then((response) => {
            console.log(response)
            setQuery(response.data.query)
            setNbPages(response.data.nbPages)
            setNews(response.data.hits)
        })
        setLoad(false)
    }, [query, pages])

    const handleChange = (value: string) => {
        setQuery(value)
    }

    const nextPage = () => {
        if (pages >= 1) {
            setPages((prevValue) => prevValue + 1)
        }
    }

    const prevPage = () => {
            setPages((prevValue) => prevValue - 1)
        if (pages === 1) {
            setPages(1)
        }
    }

    return (
    <NewsContext.Provider value={{
        load,
        setLoad,
        news,
        setNews,
        nbPages,
        setNbPages,
        pages,
        setPages,
        nextPage,
        prevPage,
        query,
        handleChange
    }}>
        {children}
    </NewsContext.Provider>
    )

}

export const useNewsContext = () => {
    // return useContext(NewsContext)
    const context = useContext(NewsContext)

    if (!context) throw new Error("Add the context")

    return context
}



export {NewsProvider}