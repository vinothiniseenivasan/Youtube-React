import React from 'react'
import SideBar from './SideBar'
// import MainContainer from './MainContainer'
// import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Body = () => {

  

  // console.log("queryInput" ,queryInput);
  return (

  <div className="grid grid-flow-col  col-span-12  ">
        <SideBar  />
        {/* 2 path routes   1. maincontainer which contain vieocard and info about videos
                            2. watchPage=> when we click its should playig on thispage */}

         <Outlet />
      
    </div>
  )
}

export default Body