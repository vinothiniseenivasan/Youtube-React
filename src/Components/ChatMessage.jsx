import React from 'react'

const ChatMessage = ({name ,message ,src}) =>
 {

  return (
    <div className=''>
       <div className='flex items-start shadow-md p-2'>
        <img className='w-6 h-6 rounded-lg mr-1' 
        // src='https://logodix.com/logo/1070634.png' 
        src={src}
        alt='user-img'/>
        <span className='ml-3 font-semibold'>{name}</span>
        <span className='ml-4'>{message}</span>


       </div>
    </div>
  )
}

export default ChatMessage