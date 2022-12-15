export interface Card {
    // date: string,
    title: string,
    objectID: number,
    url: string,
    author: string,
    points: number,
    num_comments: number
}

// export interface Pages {
//     nbPages: number
// }

export interface News {
    news: Card[]
    load: boolean
    setLoad: React.Dispatch<React.SetStateAction<boolean>>
    setNews:  React.Dispatch<React.SetStateAction<Card[]>>
    nbPages: number
    pages: number
    query: string
    setNbPages: React.Dispatch<React.SetStateAction<number>>
    setPages: React.Dispatch<React.SetStateAction<number>>
    nextPage: () => void
    prevPage: () => void
    handleChange: (value: string) => void
}