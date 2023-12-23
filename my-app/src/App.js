import './App.css';
import React from 'react';
import Navbar from './component/navbar/Navbar';
  import {
    BrowserRouter as Router,
  } from "react-router-dom";
import AllRoutes from './component/AllRoutes';
import { useState } from 'react';
import DrawerSidebar from './component/LeftSidebar/DrawerSidebar';
function App() {
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display:"none"
    ,})
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      setToggleDrawerSidebar({
        display:"flex"
      })
    }else{
      setToggleDrawerSidebar({
        display:"none"
      })
    }
  }
  return (
    <Router>
      <Navbar
      toggleDrawer={toggleDrawer}
      />
      {
        <DrawerSidebar 
        toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}
        />
      }
      <AllRoutes/>
    </Router>
  );
}

export default App;
