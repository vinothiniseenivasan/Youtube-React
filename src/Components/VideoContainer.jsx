import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
// import { YOUTUBE_API } from '../utils/constant';
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import { Link } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constant';


const VideoContainer = () => {

  const [videos ,setVideos] = useState([]);

  async function getMoreVideos() {

    const data = await fetch(YOUTUBE_VIDEOS_API);

    const jsonInfo = await data.json();
    // console.log("jsonInfo" ,jsonInfo?.items);

    // jsonInfo.items is  array contains 50 videos
    //  we are give this info state variable in order to reset render
    setVideos(jsonInfo?.items);
      // console.log("videos in videoContainer" ,videos)
    
  }


  

  useEffect(()=>{

  
      getMoreVideos();

  
  
  },[]);

  
  // console.log("videos in videoContainer" ,videos)

  return (
   <div className='flex flex-wrap  gap-2 '>
        {
        (   videos &&  videos.map((eachVideo , index)=>(
         
            <Link to={"/watch?v=" + eachVideo.id}>
                
            <VideoCard key={index} videoInfo = {eachVideo} />
           
            </Link>

          )) )
        }
       
    </div>
   )
}

export default VideoContainer