import React, { useEffect, useRef, useState } from 'react';
import { GOOGLE_API_KEY } from '../utils/constant';
import CommentsList from './CommentsList';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentFromUser, removePreviousVideoComment } from '../utils/commentSlice';
import { toggleUserComment} from '../utils/commentSlice';
import { useSearchParams } from 'react-router-dom';
import LoadComment from './LoadComment';


const Comment = () => {

    const [comment ,setComment ] = useState([]);
    const [serachParams] = useSearchParams();
    const videoId = serachParams.get("v");

    const inputRef = useRef(null);
    

    const [inputValue ,setInputValue] = useState("");
    const totalComment = useSelector(store => store?.comments?.intialComment);
    const dispatch = useDispatch();
    


    const userInput = useSelector(store => store?.comments?.addedUserComment);

    

     const commentCount = useSelector(store => store?.comments?.count);

     
     
    


   const countOfComment= commentCount > 1078 ? commentCount - 1078 : "1232";
  //  const totalComment = useSelector(store => store?.comments?.intialComment);
    // console.log("totalComment" ,totalComment)

   async function getComment()
    {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&maxResults=100&key=${GOOGLE_API_KEY}`);


       
        const jsonInfo = await  data.json();

         dispatch(removePreviousVideoComment());
         setComment(jsonInfo?.items);
        
         dispatch(getCommentFromUser(jsonInfo?.items));
       
       


    }
    

     
    useEffect(()=>{
        getComment();

    } ,[]);

  
    function handleComment(event)
    {

      setInputValue(event.target.value);
     
    }

    function getUserComment()
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
        

       dispatch(toggleUserComment())
       setInputValue("")
       inputRef.current.value =" "
       inputRef.current.placeholder = "Add Comment"



    }

    // console.log("totalComment totalComment" ,totalComment)

  return (
    <div>
                {/* comments */}
                <div className='font-bold mt-4 leading-loose tracking-wider'>
                  {countOfComment}   Comments...
                </div>

                <div className="flex  items-start mt-5">
                  {/* user  logo */}
                <img
                    className="w-8 h-8 rounded-full"
                    src="https://thumbs.dreamstime.com/b/v-letter-decorated-exotic-peacock-feather-circle-badge-196439106.jpg"
                    alt={"profile"}
                    
                />
                <div className="flex-col ml-4 w-full">
                    <div className="flex items-center space-x-4 w-[1000px]">
                       <input type='text'
                       ref={inputRef}
                       onChange ={(e)=> {handleComment(e)}}
                       
                       placeholder='Add Comment'
                      className=' w-full border-b-2 border-blue-400 focus:outline-none'/>

                      <button className='border-none bg-gray-400 p-2 rounded-full text-gray-900'
                      onClick={()=>getUserComment()}>
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
           {userInput ? (
            <>

               {
                totalComment.map((eachTotalComment,index)=>
                {
                   if(eachTotalComment.authorDisplayName)
                   {
                    return(
                      <LoadComment  commentFull={eachTotalComment}/>

                    ) 
                   }
                   return(
                    <CommentsList comment = {eachTotalComment} />
                   )
                })
               }
               {/* <LoadComment  commentFull={totalComment[0]}/>
               <CommentsList comment = {totalComment[1]} /> */}
            </>
          ) :(<CommentsList comment = {totalComment[0]} />)}
           {/* <CommentsList comment = {totalComment[0]} /> */}
        
    </div>
  )
}

export default Comment;