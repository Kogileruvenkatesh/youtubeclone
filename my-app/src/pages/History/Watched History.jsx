import React from 'react'

import vid from '../../component/Video/vid.mp4'
import WHL from '../../component/WHL/WHL';
function WatchedHistory() {
  const history =[
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
    <WHL page={"History"} videoList={history} />
  )
}

export default WatchedHistory
