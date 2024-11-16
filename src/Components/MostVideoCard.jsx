import useGetTime from "../Objects/useGetTime";

import VideoPlaying from "./VideoPlaying";
const MostVideoCard = ({videoInfo}) => {
 
  const publishedAt = videoInfo?.snippet?.publishedAt;
  const time = useGetTime({ timeStamp: publishedAt });
  
   console.log("MostVideoCard" , videoInfo)

  // // early return
  if(!videoInfo)
  {
    return null;
  }

    // console.log("videoInfo" ,videoInfo)
     const {snippet} = videoInfo;

     const {title , channelTitle,thumbnails } = snippet;


   

  return (
    <div>
      <VideoPlaying />
    </div>
  )

  
    // <div className='custom-lg:ml-6   custom-lg:w-[360px] custom-sm-md:w-[340px]   custom-md:w-[270px]  custom-md:mr-auto shadow-lg  m-1 p-[0.40rem] cursor-pointer  '>
    //   <div className="flex">
    //      <div>
    //           {/* card image */}
    //          <img   src={thumbnails?.medium?.url} alt={thumbnails}/>

    //      </div>
    //       {/* logo and card information */}
    //     <div className='ml-4 text-wrap w-full flex-col justify-start items-start mt-3 '>
          
    //        <span className=' font-[501]  '> {title}</span>
       
     
      
    //   {/* title */}
    //   <div className='font-[160]  mt-[0.15rem] leading-none '>
  
    //        <span className=''>{channelTitle}</span>
     

    //         {/* views and published */}
      
    //         <span className='flex justify-start items-start  mt-[0.25rem] '>
    //               {/* <span className=''>{views}</span> */}
    //               <span className=''>&bull;</span>
    //               <span>{time}</span>
      
    //         </span>

    //   </div>
    //   </div>

    

    //   </div>
      



     


      
    // </div>
    
  
}

export default MostVideoCard