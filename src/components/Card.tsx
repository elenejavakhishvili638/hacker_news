import React from 'react'
import "./card.css"

const Card = () => {
  return (
    <div className='card'>   
        <h4>Name</h4>
        <p>points and comments</p>
        <div className="news-button">
            <button className="read-more">read more</button>
            <button className="remove">remove</button>
        </div>
    </div>
  )
}

export default Card