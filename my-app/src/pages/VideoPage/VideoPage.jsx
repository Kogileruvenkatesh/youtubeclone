import React from 'react'
import './VideoPage.css'
import vid from '../../component/Video/vid.mp4'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../component/Comments/Comments'
function VideoPage() {
  return (
    <>
    <div className="container_videoPage">
        <div className="container2_videoPage">
            <div className="video_display_screen_videoPage">
                <video src={vid}
                className={"video_ShowVideo_videoPage"}
                controls
               // autoPlay//
                ></video>
                <div className="video_details_videopage">
                    <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_VideoPage">Title</p>
                        <div className="views_data_btns_VideoPage">
                            <div className="views_videoPage">
                            5 viwes <div className="dot"></div> Uploaded 5 months ago
                            </div>
                     <LikeWatchLaterSaveBtns/>
                         </div>
                    </div>
                        <div className="chanel_details_videoPage">
                            <b className="chanel_logo_videoPage">
                                <p>N</p>
                            </b>
                            <p className="chanel_name_videoPage">NTR Arts</p>
                        </div>
                        <div className="comments_videoPage">
                            <h2> <u> Comments</u></h2>
                           <Comments/>
                        </div>
                </div>
            </div>
            <div className="moreVideosBar">
                More video
            </div>
        </div>
     </div> 
    </>
  )
}

export default VideoPage
