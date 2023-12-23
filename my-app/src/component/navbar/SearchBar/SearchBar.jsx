import React, { useState } from 'react';
import './SearchBar.css';
import {BsMicFill} from "react-icons/bs";
import {FaSearch} from 'react-icons/fa';
import SearchList from './SearchList';
function SearchBar() {
  const [SearchQueary, setSearchQueary] = useState("");
  const [searchListA, setSearchList] = useState(false)
  const TitleArray=["video1","video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(SearchQueary.toUpperCase()))
  return (
    <>
    <div className="SearchBar_container">
        <div className="SearchBar_container2">
            <div className="Search_div">
                <input type="text" className='iBox_SearchBar' placeholder='Search' 
                onChange={e=>setSearchQueary(e.target.value)}
                value={SearchQueary}
                onClick={e=>setSearchList(true)}
                />
                <FaSearch className="searchIcon_SearchBar" 
                onClick={e=>setSearchList(false)}
                />
                <BsMicFill className="Mic_SearchBar"/>
                {SearchQueary&& searchListA&&
                  <SearchList
                  setSearchQueary={setSearchQueary}
                  TitleArray={TitleArray}
                  />
                }
             </div>
        </div>
    </div>
    </>
  )
}

export default SearchBar
