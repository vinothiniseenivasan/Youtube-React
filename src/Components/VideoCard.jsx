import React from 'react';
import useGetTime from '../Objects/useGetTime';
import { Link } from 'react-router-dom';

const VideoCard = ({videoInfo}) => {


 

  const publishedAt = videoInfo?.snippet?.publishedAt;
  const time = useGetTime({ timeStamp: publishedAt });
  //  console.log("time" , time)

  // // early return
  if(!videoInfo)
  {
    return null;
  }

    // console.log("videoInfo" ,videoInfo)
     const {snippet, statistics} = videoInfo;

     const {title , channelTitle,thumbnails } = snippet;

     const {viewCount } = statistics;

     const views = (viewCount / 1000000).toFixed(2) + 'K views';

    

  return (

  
    <div className='custom-lg:ml-6 h-[320px]  custom-lg:w-[360px] custom-sm-md:w-[340px]   custom-md:w-[270px]  custom-md:mr-auto shadow-lg  m-1 p-[0.40rem] cursor-pointer  '>

      {/* card image */}
      <img  src={thumbnails?.medium?.url} alt={thumbnails}/>



      {/* logo and card information */}
      <div className='text-wrap w-full flex justify-between items-start mt-3 '>
        <img src={thumbnails?.medium?.url}  alt="small-thumb"  className="w-8 h-8 rounded-full "/>
        <span className='ml-4 font-[501] '> {title}</span>
       
      </div>

      {/* title */}
      <div className='font-[180]  mt-[0.15rem] leading-none '>
  
           <span className='ml-12'>{channelTitle}</span>
     

      {/* views and published */}

      <span className='flex justify-start items-start ml-12 mt-[0.25rem] '>
        <span className=''>{views}</span>
        <span className='ml-4'>&bull;</span>
        <span>{time}</span>

      </span>

     
      </div>


      
    </div>
    
  )
}


export const HigherOrder =({videoInfo}) =>{

  console.log("HigherOrder" ,videoInfo)
  return(<div className='border-red-500  border'>

    <VideoCard videoInfo={videoInfo} />

  </div>)
}

export default VideoCard