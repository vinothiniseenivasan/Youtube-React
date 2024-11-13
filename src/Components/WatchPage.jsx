import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeNavBar } from '../utils/navBarSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEOINFO_BYID } from '../utils/constant';
import {  GOOGLE_API_KEY } from '../utils/constant';
import WatchPageVideoInfo from './WatchPageVideoInfo';



const WatchPage = () => {
    const dispatch = useDispatch();
    // we are getting params for each video we can get it by using usePArams()
    // we getting after v ==> OXe7N7-xMKM

    const [serachParams] = useSearchParams();

    const [videoDetails ,setVideoDetails]  = useState("");

    // const []
    // console.log(serachParams.get("v"));



    // const YOUTUBE_VIDEOINFO_BYID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qlJjPV3PBUA&key=" + GOOGLE_API_KEY;

    const movieInfo = YOUTUBE_VIDEOINFO_BYID+(serachParams.get("v"))+"&key="+GOOGLE_API_KEY;

    // console.log("movieInfo" , movieInfo)



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


   
  return (
    <div className=" mt-32 ml-20 ">
        {/* WatchPage */}
        <iframe width="1300" height="650" src={`https://www.youtube.com/embed/${serachParams.get("v")}?si=F7L5TwrLVtbwQJJQ`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <WatchPageVideoInfo  videoDetails={videoDetails}/>
        </div>
      )
}

export default WatchPage