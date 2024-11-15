import React, { useEffect } from 'react';
import { GOOGLE_API_KEY } from '../utils/constant';


const MostRecommendedVideo = ({channelId}) => {

  // https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=${GOOGLE_API_KEY}
  
  
  // console.log(${GOOGLE_API_KEY}"channelId in MostRecommendedVideo" ,channelId)

  async function getRecommendedVideo()
   {
    // https://corsproxy.io/?
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=${GOOGLE_API_KEY}`);
    

    const jsonInfo = await data.json();

    console.log("jsonInfo in getRecommendedVideo" ,jsonInfo?.items)



   }


    useEffect(()=>{
        getRecommendedVideo();
    },[])
  return (
    <div className='  '>
        MostRecommendedVideo
    </div>
  )
}

export default MostRecommendedVideo