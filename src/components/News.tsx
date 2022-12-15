import React from 'react'
import "./news.css"
import Card from './Card'
import {useNewsContext} from "../context/NewsContext"
import Load from './Load'

const News = () => {

  const {news} = useNewsContext()

  console.log(useNewsContext())

  return (
    <div className='news'>
      {news.map((item) => {
        const {objectID } = item
        return <Card key={objectID} item={item} />
      })}
    </div>
  )
}

export default News