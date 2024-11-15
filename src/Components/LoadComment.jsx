import React from 'react';
import useGetTime from '../Objects/useGetTime';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoadComment = ({ commentFull }) => {
    const userInput = useSelector(store => store?.comments?.addedUserComment);
    const dispatch = useDispatch();

    // if(userInput)
    // {
    //     // already we added one comment so clear for this video
    //     dispatch(removePreviousVideoComment());
    // }


    const { authorDisplayName, authorProfileImageUrl, textDisplay, updatedAt, likeCount } = commentFull;
//    console.log("LoadComment" ,commentFull)

  
    const time = useGetTime({ timeStamp: updatedAt });
    // console.log("time" ,time)
    const [imageLoaded, setImageLoaded] = useState(true);





    function  handleImageError()
    {
        setImageLoaded(false)
    }
    if(imageLoaded === false)
    {
        return
    }
     
    return (
        <div className="w-[500px]  mb-4">
            
            <div className="flex  items-start">
                <img
                    className="w-8 h-8 rounded-full"
                    src={authorProfileImageUrl}
                    alt={`${authorDisplayName}'s profile`}
                    onError={handleImageError}
                />
                <div className="flex-col ml-4">
                    <div className="flex items-center space-x-4">
                        <h4 className="font-semibold">{authorDisplayName}</h4>
                        <p className="text-sm text-gray-500">{time}</p>
                    </div>
                    <p className="text-gray-800 mt-1">{textDisplay}</p>
                    <div className="flex items-center space-x-1 mt-1">
                        <img
                            className="w-4 h-4"
                            src="https://cdn.pixabay.com/photo/2017/11/10/05/05/like-2935406_640.png"
                            alt="like icon"
                        />
                        <p className="text-sm text-gray-600">{likeCount}</p>
                        <img
                            className="w-5 h-5"
                            src="https://static2.bigstockphoto.com/1/8/3/large2/381477854.jpg"
                            alt="like icon"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};
export default LoadComment