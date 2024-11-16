import React from 'react'
import useGetTime from '../Objects/useGetTime';
import Description from './Description';
// import useGetTime from '../Objects/useGetTime';

const WatchPageVideoInfo = ({videoDetails}) => {
   

    const {snippet, statistics} = videoDetails;
    const time = useGetTime({timeStamp : snippet?.publishedAt})
    if(!videoDetails)
        {
            return
        }
    

    

    // console.log("videoDetails" ,videoDetails)

   


    const {title , channelTitle,thumbnails,description } = snippet;
   

    const {viewCount ,likeCount } = statistics;

    const views = ((viewCount / 1000000) *100).toFixed(2) ;
    const like = ((likeCount / 1000) ).toFixed(1) ;
    
  return (
    <div>
        {/* title */}
      <h1 className=' mt-3 text-xl font-bold tracking-wide leading-snug opacity-85'>{title}</h1> 
      {/* join sub like */}
      <div className='mt-2 flex'>
        {/* title and subscribbers */}
          <img src={thumbnails?.medium?.url}  alt="small-thumb"  className="w-9 h-9 rounded-full  "/>
                <div className='ml-3 flex-col'>
         
                   <div className='font-semibold'>{channelTitle}</div>
                   <div className=' leading-3 text-xs opacity-90'>{views+"k" +" Subscribers"}</div>
                   
         
                </div>

                <button className=' ml-6 rounded-2xl  px-3 border-none bg-gray-200 border-gray-400'>
                    join
                 </button>
                 <button className=' ml-3 rounded-2xl  px-3 border-none bg-black text-white border-gray-400'>
                    Subscribe
                 </button>

                 <div className='flex ml-[24rem] items-center'>
                 <button className='flex items-center ml-6 rounded-2xl p-[.20rem] px-2 border-none bg-gray-200 border-gray-400'>
                    <img src={"https://media.istockphoto.com/id/1343145970/vector/thumbs-up-approval-recommend-icon-pixel-perfect-editable-stroke.jpg?s=612x612&w=0&k=20&c=kaHM8YD1K86hE6nuK0XKIAHChTXmldq49O0qeVX8q8Y="}
                     alt="logo"
                    className='w-4 h-6'/>
                    <span className='ml-1 font-semibold'>{like + "k"}</span>
                   
                 </button>
                 <button className='flex items-center ml-6 rounded-2xl p-[.20rem] px-2 border-none bg-gray-200 border-gray-400'>
                    <img src="https://cdn4.vectorstock.com/i/1000x1000/77/88/share-icon-publish-symbol-vector-22537788.jpg"
                      alt="logo"
                    className="w-4 h-6"/>
                    <span className='ml-1 font-semibold'>share</span>
                   
                 </button>

                 <button className='flex items-center ml-6 rounded-2xl p-[.20rem]  px-2 border-none bg-gray-200 border-gray-400'>
                    <img src="https://www.shutterstock.com/shutterstock/photos/1357166951/display_1500/stock-vector-download-icon-vector-illustration-logo-template-1357166951.jpg"
                      alt="logo"
                    className="w-4 h-6 "/>
                    <span className='ml-1 font-semibold'>Download</span>
                   
                 </button>
                
                   
                
                 <button className='flex items-center ml-6 rounded-2xl  px-2 p-[.20rem] border-none bg-gray-200 border-gray-400'>
                    <img src="https://media.istockphoto.com/id/1330591104/vector/hand-with-dollar-coin-line-icon-charity-and-donation-concept-financial-help-for-needy.jpg?s=612x612&w=0&k=20&c=bKobphIX1-EF7L3Get9bEM7Ska2VZScuUMOxtQ2iPNw="
                      alt="logo"
                    className="w-4 h-6"/>
                    <span className='ml-1 font-semibold'>Thanks</span>
                   
                 </button>
                 <button className='flex items-center ml-6 rounded-2xl p-[.20rem] px-2 border-none bg-gray-200 border-gray-400'>
                    <img src="https://media.istockphoto.com/id/517101446/vector/scissors-icon-on-white-round-vector-button.jpg?s=612x612&w=0&k=20&c=EjtZ9LjTL9Qy8QdPu1f-Wgw1J4SmgWu72MKaZoBFG1M="
                      alt="logo"
                    className="w-4 h-6"/>
                    <span className='ml-1 font-semibold'>Clip</span>
                   
                 </button>
                 </div>

                 {/* description card */}


                 
               
               
                

       
      </div>

      {/* description */}

      <div>
        <Description time={time} description={description} views={viewCount} />
        
         
      </div>

      

        </div>
  )
}


export default WatchPageVideoInfo