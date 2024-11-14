
import { useSelector } from 'react-redux';
import LoadComment from './LoadComment';
import { useContext } from 'react';
// import { useSelector } from 'react-redux';

const CommentsList = ({ comment }) => {

   

    //  const isUserEnteredComment  = useSelector((store) =>(store.comments.addedUserComment) );

    //  console.log("isUserEnteredComment" , isUserEnteredComment)


    // console.log("useComment" ,userComment)
    if (!comment) {
        return null;
    }

    // console.log("CommentsList" ,comment[0])

    




    return (
        <div className='mt-6'>

           {
           comment.map((eachComment, index) => {
                const commentFull = eachComment.snippet?.topLevelComment?.snippet;

               

                        //  console.log("commentFull" ,eachComment)
                if (!commentFull ) return null;

                return (
                    
                      <LoadComment key={index} commentFull={commentFull} />
                    ) 
                }
                        
                    
               
                 )
           }
        
        </div>
    )
}
         
    
    export default CommentsList;

               