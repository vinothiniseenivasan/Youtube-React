import React from 'react'
import { useDispatch } from 'react-redux';
import { setSuggestions } from '../utils/userInputSlice';

const InputSuggestCard = ({inputChanges}) => {

    
    const dispatch = useDispatch();
  return (
    <div className=''>
        {inputChanges.map( (eachSuggest,index) =>
           (
                <div key={index} className='flex justify-start  items-center hover:bg-gray-100 w-full p-1'
                      onClick={()=>{dispatch(setSuggestions(eachSuggest))}}>
                    <span>
                        <img 
                        className='w-6 h-6'
                        src="https://www.shutterstock.com/image-vector/time-icon-watch-timer-symbol-260nw-796703452.jpg" alt="timer-img" />
                    </span>
                    <span className='ml-3'> {eachSuggest} </span>
                    
                </div>
            )
        )}
    </div>
  )
}

export default InputSuggestCard