import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    < div className=" w-[60%]  md:w-[80%] lg:w-[95%] ">

        <ButtonList />
        <VideoContainer />
        
    </div>
  )
}

export default MainContainer