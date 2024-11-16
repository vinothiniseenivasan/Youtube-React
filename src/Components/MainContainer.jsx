import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';


const MainContainer = () => {

  const navBarStatus = useSelector((store)=> store.navBar.toggleBar);
  // console.log("navBarStatus",navBarStatus)
  return (
    // w-[60%] 

    < div
     className={ ` mt-32  custom-sm:w-[40%] custom-sm-md:ml-[16rem] custom-lg:w-[82%] custom-md:w-[75%]      ${(navBarStatus === true) ? "lg:ml-72" : "lg:mx-auto  "} 
      ${(navBarStatus === true) ? "custom-md:ml-6" : "custom-md:mx-auto"}    ${(navBarStatus === true) ? "custom-sm:ml-40" : "custom-sm:mx-auto"}  `} >

        <ButtonList />
        <VideoContainer  />
        
    </div>
  )
}

export default MainContainer