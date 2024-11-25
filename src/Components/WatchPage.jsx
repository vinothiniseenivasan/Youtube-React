import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeNavBar } from '../utils/navBarSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEOINFO_BYID } from '../utils/constant';
import {  GOOGLE_API_KEY } from '../utils/constant';
import WatchPageVideoInfo from './WatchPageVideoInfo';
import { useSelector } from 'react-redux';
import MostRecommendedVideo from './MostRecommendedVideo';
import LiveChat from './LiveChat';



const WatchPage = () => {
    const dispatch = useDispatch();
    // const queryInput = useSelector(store => store?.userInput?.query);
    const navBarStatus = useSelector((store)=> store.navBar.toggleBar);
    const isLive = useSelector(store => store?.live?.hasLive);

    // const queryInput = useSelector((store)=> store.userInput.query);
    // we are getting params for each video we can get it by using usePArams()
    // we getting after v ==> OXe7N7-xMKM

    const [serachParams] = useSearchParams();

    const [videoDetails ,setVideoDetails]  = useState("");

    const showChat =  useSelector(store => store?.chat?.cancelChat);

    

    const movieInfo = YOUTUBE_VIDEOINFO_BYID+(serachParams.get("v"))+"&key="+GOOGLE_API_KEY;

    
    // const id = serachParams.get("v");


//    
   async function getVideoInfoById()
    {
        const data = await fetch(movieInfo);

        const jsonInfo = await data.json();

        

        setVideoDetails(jsonInfo?.items[0]);
      
        
    }
    
   
    useEffect(()=>{
        getVideoInfoById();
    },[])



    useEffect(()=>{
        dispatch( closeNavBar());
    },[])

    // console.log("movieInfo" , videoDetails?.snippet?.channelId)

    // const channelId=videoDetails?.snippet?.channelId;
   
  return (
    <div className='grid grid-flow-col col-span-12 w-full'>
{/*  */} 
     {/* 1 */}
      <div className={` mt-32   ${(navBarStatus === true) ? "lg:ml-72" : "lg:ml-14  "} 
       ${  (navBarStatus === true) ?  "custom-lg:w-[1200px]" : "custom-md:ml-2 custom-lg:w-[1400px]"}
       ${  (navBarStatus === true) ?  "custom-md:w-[900px]" : "custom-md:ml-2 custom-md:w-[1100px]"}
        
        custom-lg:h-[680px] custom-md:h-[550px]
       `}>

            {/* WatchPage */}
            <iframe 
           className={` w-full rounded-lg h-full`} 

            // width= {`${(navBarStatus === true) ? " custom-md:w-[1200px] 1300" : "custom-md:w-[1400] 1400" }`}
             src={`https://www.youtube.com/embed/${serachParams.get("v")}?si=F7L5TwrLVtbwQJJQ`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    
           <WatchPageVideoInfo  videoDetails={videoDetails}/>
        </div>

        {/* 2 */}
        <div className={`mt-32  
        ${isLive  ? 
             (showChat) ?'border border-gray-400 h-[650px] mr-3 ml-2 bg-gray-50 m-2 rounded-lg overflow-y-scroll' 
            : 'border border-gray-400  h-[20px] flex items-center justify-center py-4 rounded-2xl bg-gray-50 text-black font-bold' 
            : 
        'border-none'}  w-full flex flex-col-reverse custom-md:ml-2 custom-md:w-[340px] custom-lg:w-[350px] custom-lg:ml-6 mr-56 col-span-8`}>
           { ((!isLive) ?  <MostRecommendedVideo channelId={ videoDetails?.snippet?.channelId} /> : <LiveChat />)}
           
            
        </div>
    </div>
      )
}

export default WatchPage