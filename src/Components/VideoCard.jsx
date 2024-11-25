import React from 'react';
import useGetTime from '../Objects/useGetTime';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from './Button';

const VideoCard = ({videoInfo}) => {

  const navBarStatus = useSelector((store)=> store.navBar.toggleBar);
  const queryInput = useSelector(store => store.userInput.query);
  
  const isLive = useSelector(store => store?.live?.hasLive);
 

  const publishedAt = videoInfo?.snippet?.publishedAt;
  const time = useGetTime({ timeStamp: publishedAt });
  //  console.log("time" , time)

  // // early return
  if(!videoInfo)
  {
    return null;
  }

    // console.log("videoInfo" ,videoInfo)
     const {snippet} = videoInfo;
     if(!queryInput)
     {
        let  {statistics} = videoInfo;
        if(statistics)
        {
          var {viewCount } = statistics;
        }
        else
        {
          viewCount = 1000000*4
        }
      
      
     }
     else
     {
    
        viewCount = 1000000*4
     }

     const {title , channelTitle,thumbnails } = snippet;

    
     const views = (!isLive) ? ((viewCount / 1000000).toFixed(2) + 'K views') :((viewCount / 1000000).toFixed(1));

    

  return (

  
    <div className={`custom-lg:ml-6 ${(isLive) ? 'h-[330px]' : 'h-[328px]'}
    ${navBarStatus ? "custom-md:w-[270px]" : " ml-2 custom-md:w-[300px]" }
      custom-lg:w-[360px] custom-sm-md:w-[340px]   custom-md:w-[270px]  custom-md:mr-auto   m-1 p-[0.40rem] cursor-pointer`}>

      {/* card image */}
      <img  src={thumbnails?.medium?.url} alt={thumbnails}/>



      {/* logo and card information */}
      <div className='text-wrap w-full flex justify-between items-start mt-3 '>
        <img src={thumbnails?.medium?.url}  alt="small-thumb"  className="w-8 h-8 rounded-full "/>
        <span className='ml-4 font-[501] '> {title}</span>
       
      </div>

      {/* title */}
      <div className='font-[180]  mt-[0.15rem] leading-none '>
  
           <span className='ml-12 font-normal'>{channelTitle}</span>

     

      {/* views and published */}

      <span className='flex justify-start items-start ml-12 mt-[0.25rem] '>
        {!isLive  ?
          <> (<span className=''>{views}</span>
          <span className='ml-4'>&bull;</span>
          <span>{time}</span>) </>
           :
           <div className='flex-col'>

             <span className='text-sm font-normal opacity-70 '>{views}k Watching</span>
              {/* <span className='ml-4'>&bull;</span> */}
             <div className=' mt-2 border border-red-600 text-white bg-red-500 flex items-center justify-center p-1 rounded-lg'>
              
               Live
             
              </div>
           </div>
        }

      </span>

     
      </div>


      
    </div>
    
  )
}




export default VideoCard