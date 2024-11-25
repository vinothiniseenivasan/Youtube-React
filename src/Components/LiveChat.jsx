import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveChatMessage, checkLiveChat } from '../utils/chatSlice';
import { GOOGLE_API_KEY } from '../utils/constant';
import { chatMessages, generateDifferentName } from '../Objects/nameGenerator';

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatList = useSelector((store) => store.chat.messages);

    // const [cancel, setCancel] = useState(false);

    const showChat =  useSelector(store => store?.chat?.cancelChat);

    // console.log("chatList" ,chatList)

   

    // For Api polling

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatMessages && chatMessages.length > 0) {
        chatMessages.map((eachMessage,index) => {
               var img= `https://i.pravatar.cc/150?img=${index}`

            dispatch(addLiveChatMessage({
                        name: eachMessage.userName,
                       message :eachMessage.message,
                       src:img

                   }));
        });
      }
    }, 10000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);


  function handleCancel()
  {
  //  setCancel(true);
   dispatch(checkLiveChat(false));
  }

  function handleChat()
  {
    dispatch(checkLiveChat(true));

  }
  
        


return(
  <>
    {(!showChat )? 
     
      <div className='w-[100px] h-[200px] cursor-pointer' onClick={()=> handleChat()}>
        ShowChat
       </div>:   
      
  <div className='w-full'> 


  <div className='flex p-3 cursor-pointer '>
  <div className='w-full'>LiveChat
  <span className='ml-2'>&#9660;</span>
  </div>
  <span className='ml-2 leading-5 font-bold mr-3'>&#8942;</span>
  <span className='ml-2 leading-5 font-bold mr-2 ' onClick={()=>handleCancel()}>&#10005;</span>
  </div>

  <hr className='border-gray-400 '></hr>


    {     
      chatList && chatList.map((eachChat , index)=>{
          return(
              <div key={index} className=''>
                  <ChatMessage name ={eachChat.name} message={eachChat.message} src={eachChat.src}/>
                  </div>
          )


      })
    }

  </div> }
  </>);

    


  }
   
     
  


export default LiveChat;