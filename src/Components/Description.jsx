import React, { useState } from 'react'
import Comment from './Comment'
import { useDispatch } from 'react-redux';
import { addComment } from '../utils/commentSlice';
import { useSelector } from 'react-redux';

const Description = ({time , description ,views}) => {

  const isLive = useSelector(store => store?.live?.hasLive);

    // console.log(description);

    const dispatch = useDispatch();

    dispatch(addComment(views));

    const [showCard ,setShowCard] = useState(false)
  return (
    <>
    <div className='border border-gray-200 w-[82rem]  bg-gray-200 rounded-lg mt-4 p-2'>
        <span className='font-semibold'>{views+"  views"}</span>
        <span className='ml-6 font-semibold'>{time}</span>
        <div className='font-semibold cursor-pointer'
        onClick={()=>setShowCard(true)}>
            {showCard ? 
            <div className='font-thin'>
                {description}
                </div> : "...more"}
 
        </div>

        <div className='font-semibold cursor-pointer ' f  onClick={()=>setShowCard(false)}>
        {  (showCard)  ? "Show Less..." : "" }
        </div>

       
        
  </div>

    {!isLive ? (<Comment />) : " "}  
      </>
  )
}

export default Description;