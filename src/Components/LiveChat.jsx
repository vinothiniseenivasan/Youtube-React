import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {

  

    // For Api polling
    useEffect(()=>{

        const interval = setInterval(()=>{

            console.log("API POLLING");

        } , 2000);

        // CLEANUP
        return (()=> clearInterval(interval));

    },[])


  return (
    <div className=''> 


    <div className='flex p-3 '>
    <div className='w-full'>LiveChat
    <span className='ml-2'>&#9660;</span>
    </div>
    <span className='ml-2 leading-5 font-bold mr-3'>&#8942;</span>
    <span className='ml-2 leading-5 font-bold'>&#10005;</span>
    </div>

    <hr className='border-gray-400 '></hr>


      <ChatMessage  name= {"vinothini"} message = {"youtube live"}/>

    </div>

     
  )
}

export default LiveChat