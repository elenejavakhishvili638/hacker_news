import React from 'react'
import "./searchForm.css"
import {useNewsContext} from "../context/NewsContext"

const SearchForm: React.FC = () => {
  const {query, handleChange} = useNewsContext()
  return (
    <div className='search-form'>
        <h1>search hacker news</h1>
        <input type="text" value={query} onChange={(event) => handleChange(event.target.value)} />
    </div>
  )
}

export default SearchForm