

import React, { useEffect, useState } from 'react'
import VideoCard, { HigherOrder } from './VideoCard';
// import { YOUTUBE_API } from '../utils/constant';
// import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import { Link } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constant';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';


const VideoContainer = () => {

   const queryInput = useSelector(store => store?.userInput?.query);
   console.log("queryInput in VideoContainer"  , queryInput)

   const isLive = useSelector(store => store?.live?.hasLive);
  console.log("isLive in VideoContainer" , isLive);

    const navBarStatus = useSelector((store)=> store.navBar.toggleBar);


    const [loading,setLoading] = useState(false);
    const [nextPageToken,setNextPageToken ] = useState(null);
    const [videos ,setVideos] = useState([]);


  async function  getLiveVideos(pageToken="")
  {
    
    let data;

   
    // setUserQuery(queryInput)
     data =(queryInput !== "")?await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${queryInput}&key=${GOOGLE_API_KEY}&pageToken=${pageToken}`)
    :   await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}&pageToken=${pageToken}`);

    const jsonInfo = await data?.json();

     console.log("jsonInfo in Live" ,jsonInfo)

    setVideos(jsonInfo?.items);

  }
    
  

  async function getMoreVideos(pageToken = "") {

    // loading is true
    setLoading(true);
    // setUserQuery(queryInput)
 
     let data;

    data =(queryInput !== "")?await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${queryInput}&key=${GOOGLE_API_KEY}&pageToken=${pageToken}`)
    :   await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}&pageToken=${pageToken}`);




    
  // get data and next page information from data.nextPageToken
 
 
    const jsonInfo = await data?.json();
      console.log("jsonInfo" ,jsonInfo);

   
    // jsonInfo.items is  array contains 50 videos
    //  we are give this info state variable in order to reset render
    // COMBINE DATA WITH PREV ITEM
    if(jsonInfo?.items)
    {
      setVideos((prev)=>[...prev , ...jsonInfo?.items]);
    }
   
  //  setVideos(jsonInfo?.items)
   

    // getextPage Information
    setNextPageToken(jsonInfo?.nextPageToken || null);
    
    // console.log("jsonInfo" ,jsonInfo?.items[0]);
   

    setLoading(false);

      
  }


  

  


  useEffect(() => {
    // if (isLive === undefined || queryInput === undefined) {
    //   // Do nothing until both states are resolved
    //   return;
    // }
  
     setVideos([]); // Reset videos when the query changes
    setNextPageToken(null); // Reset pagination
  
    if (isLive === false) {
      getMoreVideos();
    } else {
      getLiveVideos();
    }
  }, [queryInput, isLive]);
  

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      if (!loading && nextPageToken) {
        getMoreVideos(nextPageToken);
      }
    }
  }, [loading, nextPageToken]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  
  console.log("watchId" ,videos)

  return (
   <div className={`flex flex-wrap  gap-2  
   ${!navBarStatus ? "custom-md:ml-10" : "custom-md:ml-0"} 
    ${!navBarStatus ? " custom-lg:ml-20" : "custom-lg:ml-0"} mt-4`}>
         {


           videos &&  videos.map((eachVideo )=>{
           
            const watchId =eachVideo?.id?.videoId ||  eachVideo?.id ;

            // console.log("watchId" ,eachVideo)
        
            // Skip rendering if watchId is undefined
            if (!watchId) {
              return null;
            }
            
            
            return( 
            <Link to={"/watch?v=" + watchId} key={eachVideo.id}>
                
                 <VideoCard key={eachVideo?.id} videoInfo = {eachVideo} />
           
                 </Link>
                ) })
            
          
          } 

        

        

           
        
       
    </div>
   )
}

export default VideoContainer