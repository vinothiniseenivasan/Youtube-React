import React from 'react'

const ChatMessage = ({name ,message}) =>
 {

  return (
    <div className=''>
       <div className='flex items-center shadow-md p-2'>
        <img className='w-6 h-6' src='https://logodix.com/logo/1070634.png' alt='user-img'/>
        <span className='ml-3 font-semibold'>{name}</span>
        <span className='ml-4'>{message}</span>


       </div>
    </div>
  )
}

export default ChatMessage