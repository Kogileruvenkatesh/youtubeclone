import React from 'react'
import './Library.css'
import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import vid from '../../component/Video/vid.mp4'
import {FaHistory} from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import WHLVideoList from '../../component/WHL/WHLVideoList';
import './Library.css'
import { AiOutlineLike } from 'react-icons/ai';
function Library() {
  const vids =[
    {
      _id: 1,
      video_src: vid,
      chanel:"62bafe6752cea35a6c30685f",
      title:"video 1",
      Uploader:"T-Serice",
      description:"description of video 1"
    },
    {
      _id: 6,
      video_src: vid,
      chanel:"62bafe6752cea35a6c30685f",
      title:"video 1",
      Uploader:"T-Serice",
      description:"description of video 1"
    },
    {
      _id: 7,
      video_src: vid,
      chanel:"62bafe6752cea35a6c30685f",
      title:"video 1",
      Uploader:"T-Serice",
      description:"description of video 1"
    },
    {
      _id: 2,
      video_src:vid,
      chanel:"cdd",
      title:"video 2",
      Uploader:"Ntr Arts",
      description:"description of video 2"
    },
    {
      _id: 3,
      video_src:vid,
      chanel:"add",
      title:"video 3",
      Uploader:"Yuvasudha",
      description:"description of video 3"
    },
    {
      _id: 4,
      video_src:vid,
      chanel:"add",
      title:"video 4",
      Uploader:"Sony Music",
      description:"description of video 3"
    },
    {
      _id: 5,
      video_src: vid,
      chanel:"62bafe6752cea35a6c30685f",
      title:"video 5",
      Uploader:"Cartoon Network",
      description:"description of video 1"
    },
  ];
  return (
    
      <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
            <div className="container_librarypage">
              <h1 className="title_container_Librarypage">
                <b>
                  <FaHistory/>
                </b>
                <b>
                  History
                </b>
                </h1>
                <div className="container_videoList_Librarypage">
                  <WHLVideoList  page={"History"} videoList={vids}/>
                </div>
               </div>
               <div className="container_librarypage">
               <h1 className="title_container_Librarypage">
                <b>
                  <MdOutlineWatchLater/>
                </b>
                <b>
                  Watch Later
                </b>
                </h1>
                <div className="container_videoList_Librarypage">
                  <WHLVideoList  page={"Watch Later"} videoList={vids}/>
                </div>
             </div> 
             <div className="container_librarypage">
               <h1 className="title_container_Librarypage">
                <b>
                  <AiOutlineLike/>
                </b>
                <b>
                  Liked Videos
                </b>
                </h1>
                <div className="container_videoList_Librarypage">
                  <WHLVideoList  page={"Liked Videos"} videoList={vids}/>
                </div>
             </div>  
          </div>
    </div>
  
  )
}

export default Library
