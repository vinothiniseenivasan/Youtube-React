import { useSearchParams } from "react-router-dom";
import useGetTime from "../Objects/useGetTime";
import { useState } from "react";

const RecommVideoInfo = ({videoInfo}) => {
       const publishedAt = videoInfo?.snippet?.publishedAt;
  const time = useGetTime({ timeStamp: publishedAt });
  const [imgError ,setImgError] = useState(false);

    if(videoInfo === null || videoInfo === undefined || imgError)
        {
          return null;
        }   

   
// console.log("videoInfo in RecommVideoInfo" ,videoInfo)

  //  console.log("time" , time)

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomNumber = getRandomNumber(1000000, 8000000);
const views = (randomNumber / 1000000).toFixed(1) + 'M views';


  // // early return
  

    // // console.log("videoInfo" ,videoInfo)
      const {snippet} = videoInfo;

     const {title , channelTitle,thumbnails } = snippet;
   

     function  handleImageError()
     {
        
       setImgError(true)
     }
    
   
 
    return (
      // custom-lg:ml-10  custom-md:ml-
            <div className="custom-lg:w-[380px] custom-sm-md:w-[340px] custom-md:w-[340px] c custom-md:mr-auto 
             shadow-lg m-1 p-[0.40rem] cursor-pointer">
              <div className="flex items-center">
                {/* Card Image */}
                <div>
                  <img
                    src={thumbnails?.medium?.url || "fallback-image-url"}
                    alt={`Thumbnail for ${title}`}
                    className="rounded"
                    onError={()=>handleImageError()}
                  />
                </div>
        
                {/* Logo and Card Information */}
                <div className="ml-4 text-wrap w-full flex-col justify-start items-start mt-3">
                  <span className="font-[501]">{title}</span>
                  <div className="font-[160] mt-[0.15rem] leading-none">
                    <span>{channelTitle}</span>
                    
                  </div>
                  <div>
                  <span className='flex justify-start items-start  mt-[0.25rem] '>
                        <span className=''>{views}</span>
                        <span className='ml-4'>&bull;</span>
                        <span>{time}</span>
    
                  </span>
                  </div>
        
                 
                </div>
              </div>
            </div>
          );
  
}

export default RecommVideoInfo