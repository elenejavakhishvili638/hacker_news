import React from 'react'
import "./pages.css"
import {useNewsContext} from "../context/NewsContext"

const Pages:React.FC = () => {

  const {pages, nbPages, nextPage, prevPage} = useNewsContext()

  return (
    <div className='pages'>
        <div className='pages-wrapper'>
            <button onClick={prevPage}>prev</button>
            <h3>{pages} of {nbPages}</h3>
            <button onClick={nextPage}>next</button>
        </div>
    </div>
  )
}

export default Pages