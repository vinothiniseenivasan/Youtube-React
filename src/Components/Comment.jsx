import React, { useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from '../utils/constant';
import CommentsList from './CommentsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentFromUser } from '../utils/commentSlice';

const Comment = () => {

    const [comment ,setComment ] = useState([]);

    const [inputValue ,setInputValue] = useState("");

    

     const commentCount = useSelector(store => store?.comments?.count);

     
     
    // console.log("commentCount" ,commentCount)


   const countOfComment= commentCount > 1078 ? commentCount - 1078 : "1232";

   async function getComment()
    {
         const data = await fetch ("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=rlaNwp4YwPY&maxResults=100&key="+GOOGLE_API_KEY);

        // const data = await fetch ("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" + GOOGLE_API_KEY);

        const jsonInfo = await  data.json();
        // console.log("jsonInfo for comment" ,jsonInfo?.items);
        setComment(jsonInfo?.items);

        
       

        dispatch(getCommentFromUser(comment));
       


    }
    const totalComment = useSelector(store => store?.comments?.intialComment);

     
    useEffect(()=>{
        getComment();

    } ,[]);

   const dispatch = useDispatch();
    function handleComment(event)
    {

      setInputValue(event.target.value);
     
    }

    function handleComment()
    {
       // we are getting value from user
      //  we want to add like arrayForm
      // const { authorDisplayName, authorProfileImageUrl, textDisplay, updatedAt, likeCount } = commentFull;
      const newComment = {
        authorDisplayName: "vinothini",
        authorProfileImageUrl: "https://thumbs.dreamstime.com/b/v-letter-decorated-exotic-peacock-feather-circle-badge-196439106.jpg",
        textDisplay: (inputValue),
        updatedAt: "Just Now",
        likeCount: 0,
        };

       dispatch(getCommentFromUser(newComment));
       

    }

  return (
    <div>
                {/* comments */}
                <div className='font-bold mt-4 leading-loose tracking-wider'>
                  {countOfComment}   Comments...
                </div>

                <div className="flex  items-start">
                  {/* user  logo */}
                <img
                    className="w-8 h-8 rounded-full"
                    src="https://thumbs.dreamstime.com/b/v-letter-decorated-exotic-peacock-feather-circle-badge-196439106.jpg"
                    alt={"profile"}
                    
                />
                <div className="flex-col ml-4 w-full">
                    <div className="flex items-center space-x-4 w-[1000px]">
                       <input type='text'
                       onChange ={(e)=> {handleComment(e)}}
                       
                       placeholder='Add Comment'
                      className=' w-full border-b-2 border-blue-400 focus:outline-none'/>

                      <button className='border-none bg-gray-400 p-2 rounded-full text-gray-900'
                      onClick={handleComment()}>
                        Comment
                      </button>
                    </div>
                    {/* <p className="text-gray-800 mt-1">{}</p> */}
                    <div className="flex items-center space-x-1 mt-1">
                      {/* like and dislike */}
                        <img
                            className="w-4 h-4"
                            src="https://cdn.pixabay.com/photo/2017/11/10/05/05/like-2935406_640.png"
                            alt="like icon"
                        />
                        <p className="text-sm text-gray-600">{}</p>
                        <img
                            className="w-5 h-5"
                            src="https://static2.bigstockphoto.com/1/8/3/large2/381477854.jpg"
                            alt="like icon"
                        />

                    </div>
                </div>
            </div>
 
        {/* <CommentsList comment = {totalComment} /> */}
    </div>
  )
}

export default Comment;