import React, { useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from '../utils/constant';

import { Link } from 'react-router-dom';

import VideoPlaying from './VideoPlaying';
import MostVideoCard from './MostVideoCard';


const MostRecommendedVideo = ({channelId}) => {

  const [recommendVideos , setRecommendVideos] = useState([])

  console.log("channelId" ,channelId)
 
  useEffect(()=>{
    getRecommendedVideo();
   },[channelId])

  async function getRecommendedVideo()
   {

     
     const data = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=${GOOGLE_API_KEY}`);
    

    const jsonInfo = await data.json();

    //  console.log("jsonInfo in getRecommendedVideo" ,jsonInfo)
    setRecommendVideos(jsonInfo?.items);



   }


  
  return (
    <div className='flex-col'>
      {
       (recommendVideos && 

             recommendVideos.map((eachVideo,index)=>{
            
                  return(

                    <VideoPlaying  playlistId ={eachVideo.id} />
                  )
   
             })
       )
       
      }
       
    </div>
  )
}

export default MostRecommendedVideo