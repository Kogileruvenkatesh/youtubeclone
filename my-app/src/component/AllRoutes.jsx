import React from 'react'
import Home from '../pages/Home/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Library from '../pages/Library/Library';
import YourVideos from '../pages/YourVideos/YourVideos';
import WatchedHistory from '../pages/History/Watched History';
import WatchLater from '../pages/WatchLater/WatchLater';
import LikedVideo from '../pages/LikedVideo/LikedVideo';
import VideoPage from '../pages/VideoPage/VideoPage';
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/YourVideos' element={<YourVideos/>}/>
        <Route path='/history' element={<WatchedHistory/>}/>
        <Route path='/WatchLater' element={<WatchLater/>}/>
        <Route path='/LikedVideo' element={<LikedVideo/>}/>
        <Route path='/videopage/:vid' element={<VideoPage/>}/>
    </Routes>
  )
}

export default AllRoutes
