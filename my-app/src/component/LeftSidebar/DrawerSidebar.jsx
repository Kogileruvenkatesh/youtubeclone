import React from 'react'
import './DrawerSidebar.css';
import { AiFillAlipaySquare, AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSubscriptions } from 'react-icons/md';
import shorts from './shorts.png'
import { FaHistory } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
function DrawerSidebar({toggleDrawer,toggleDrawerSidebar}) {
  return (
    <div className='container_DrawerLeftSidebar' style={toggleDrawerSidebar}>
        <div className="container2_DrawerLeftSidebar">
            <div className="Drawer_leftsiddebar"> 
                 <NavLink to={'/'} className="icon_sidebar_div">
                     <p>
                        <AiOutlineHome
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Home</div>
                </p>
                </NavLink>
                <div className="icon_sidebar_div">
                <p>
                        <MdOutlineExplore
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Shorts</div>
                </p>
                </div>
                <div className="icon_sidebar_div">
                <p>
                        <img
                        src={shorts}
                         width={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Shorts</div>
                </p>
                </div>
                <div className="icon_sidebar_div">
                <p>
                        <MdSubscriptions
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Subscripton</div>
                </p>
                </div>
         </div> 
         <div className="libraryBtn_Drawer_leftsidebar">
         <NavLink to={'/library'} className="icon_sidebar_div">
                <p>
                        <MdOutlineVideoLibrary
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Library</div>
                </p>
                </NavLink>
                <NavLink to={'/history'} className="icon_sidebar_div">
                <p>
                        <FaHistory
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">History</div>
                </p>
                </NavLink>
                <NavLink to={'/YourVideos'} className="icon_sidebar_div">
                <p>
                        <AiFillPlaySquare
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Your Videos</div>
                </p>
                </NavLink>
                <NavLink to={'/WatchLater'} className="icon_sidebar_div">
                <p>
                        <MdOutlineWatchLater
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Watch Later</div>
                </p>
                </NavLink>
                <NavLink to={'/LikedVideo'} className="icon_sidebar_div">
                <p>
                        <AiFillLike
                         size={22}
                         className="icon_sidebar"
                         style={{margin:"auto 0.7rem"}}
                         />
                    <div className="text_sidebar_icon">Liked Videos</div>
                </p>
                </NavLink>
         </div>
         <div className="subScription_isdbar">
            <h3>Your Subscription</h3>
            <div className="chanel_isdbar">
                <p>A</p>
                <div>Ankush ff</div>
            </div>
            <div className="chanel_isdbar">
                <p>A</p>
                <div>AgamBa</div>
            </div>
            <div className="chanel_isdbar">
                <p>O</p>
                <div>One Nun Gamer</div>
            </div>
            <div className="chanel_isdbar">
                <p>F</p>
                <div>Flimymoji</div>
            </div>
         </div>
      </div>
      <div className="container3_DrawerLeftSidebar"
      onClick={()=>toggleDrawer()}
      ></div>
    </div>
  )
}

export default DrawerSidebar
