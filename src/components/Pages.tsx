import React from 'react'
import "./pages.css"

const Pages:React.FC = () => {
  return (
    <div className='pages'>
        <div className='pages-wrapper'>
            <button>prev</button>
            <h3>1 of 30</h3>
            <button>next</button>
        </div>
    </div>
  )
}

export default Pages