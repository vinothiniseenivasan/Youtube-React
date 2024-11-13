
import { useSelector } from 'react-redux';
import LoadComment from './LoadComment';
import { useContext } from 'react';
// import { useSelector } from 'react-redux';

const CommentsList = ({ comment }) => {

    const userComment = useSelector((store) =>(store.comments.inputText) );
    console.log("useComment" ,userComment)
    if (!comment) {
        return null;
    }

    




    return (
        <div className='mt-6'>

           {
           comment.map((eachComment, index) => {
                const commentFull = eachComment.snippet?.topLevelComment?.snippet;

               


                if (!commentFull) return null;

                return (
                <LoadComment key={index} commentFull={commentFull} />
                 );
           })
        }
        </div>
    )
}
         
    
    export default CommentsList;

               