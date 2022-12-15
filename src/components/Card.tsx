import React from 'react'
import { Props } from '../interfaces/PropsInterface'
import "./card.css"

const Card: React.FC<Props> = ({item}) => {
  // console.log(item)
  const {title, num_comments, points, url, author} = item
  return (
    <div className='card'>   
        <h4>{title}</h4>
        <p>{points} by {author} | {num_comments} comments</p>
        <div className="news-button">
            {/* <button className="read-more">read more</button> */}
            <a href={url} className="read-more">read more</a>
            <button className="remove">remove</button>
        </div>
    </div>
  )
}

export default Card