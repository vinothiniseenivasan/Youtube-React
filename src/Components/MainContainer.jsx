import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';
import InputSuggestCard from './InputSuggestCard';


// absolute ml-[25rem] w-[623px] border border-black bg-white shadow-lg mt-24 z-50


const MainContainer = () => {

  const navBarStatus = useSelector((store)=> store.navBar.toggleBar);
  // const queryInput = useSelector((store)=> store.userInput.query);


  // console.log("navBarStatus",navBarStatus)
  return (
    // w-[60%] 
      < div
         className={ ` mt-32  custom-sm:w-[40%] custom-sm-md:ml-[16rem] custom-lg:w-[82%]      
           ${(navBarStatus === true) ? "lg:ml-72 custom-lg:w-[82%]" : "lg:mx-auto  custom-lg:w-[90%] "} 
           ${(navBarStatus === true) ? "custom-md:ml-6 custom-md:w-[75%]" : "custom-md:mx-auto custom-md:w-[90%]"}   
           ${(navBarStatus === true) ? "custom-sm:ml-40" : "custom-sm:mx-auto"}    `} >

          <ButtonList />
          <VideoContainer  />
        
    </div>
  
  )
}

export default MainContainer