import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'
function SearchList({TitleArray,setSearchQueary}) {
  return (
    <>
      <div className="Container_SearchList">
        {
           TitleArray.map(m=>{
                return  <p
                 key={m} 
                 onClick={e=>setSearchQueary(m)}
                className="titleItem"> 
                <FaSearch/> 
                {m}
                </p>
            })
        }
      
    </div>
    </>
  )
}

export default SearchList
