import React from 'react'

import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../component/ShowVideoGrid/ShowVideoGrid'

import vid from '../../component/Video/vid.mp4'
import './YourVideos.css'
function YourVideos() {
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
      title:"video 3",
      Uploader:"Sony Music",
      description:"description of video 3"
    },
  ];
  return (
    
    <div className='container_Pages_App'>
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="container_yourvideo">
          <h1>Your Videos</h1>
            <ShowVideoGrid vids={vids}/>
            </div>
        </div>
    </div>
  )
          }

export default YourVideos
