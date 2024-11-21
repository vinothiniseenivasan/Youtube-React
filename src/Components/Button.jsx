import React, { useRef, useState } from 'react';
import { mainContainerButton } from '../Objects/mainContainerButton';
import "../css/button.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {offLiveSlice, onLiveSlice} from "../utils/liveSlice"

const Button = () => {

    const containerRef = useRef(null);

    const [isLive ,setIsLive] = useState(false);

    const dispatch = useDispatch();

    function handleLive(eachButton)
    {
     if(eachButton.label === "Live"){
      setIsLive(true);
       dispatch(onLiveSlice())

     }
     else
     {
      setIsLive(false);
       dispatch(offLiveSlice())
     }
     console.log("isLive" ,eachButton)
    }
     

    const scrollToLeft = () => {
        const scrollAmount = window.innerWidth < 640 ? 100 : 150;
        if (containerRef.current) {
            containerRef.current.scrollBy({
              left: -scrollAmount,
              behavior: 'smooth',
            });
          }
       
      };
    
      // Scroll to the right by 150px
  const scrollToRight = () => {
    const scrollAmount = window.innerWidth < 640 ? 100 : 150;
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };
    

    return (

          <div    className='flex justify-center items-center ml-2  text-nowrap cursor-pointer  '>

              <span className='mr-3' onClick={()=>{scrollToLeft()}}>{"<"}</span>
              
                <div
                        ref={containerRef}
                       className="flex overflow-x-auto scrollbar-hide  w-full"
                       style={{
                     maxWidth: '82vw', // Ensures the container doesn’t exceed viewport width
                         scrollBehavior: 'smooth',
                         whiteSpace: 'nowrap'
                       }}
                >
                     {            
                       mainContainerButton.map((eachButton) =>(
                       



                          <div
                          // {console.log(eachButton)}
                            
                             className='border flex-shrink-0 bg-gray-200  rounded-md flex justify-start items-center sm:p-[0.2rem]   md:p-[0.4rem] ml-5 mt-3 font-thin
                             hover:bg-black hover:text-white'
                             onClick={()=>{ handleLive(eachButton)  } }
                             
                             >
                               {
                                (isLive) ? <Link to={"/live"}>
                                   <span className=' font-semibold'>{ eachButton.label }</span>
                                </Link> :  <span className=' font-semibold'>{ eachButton.label }</span>
                               }
                             
                           </div>
      
                        ))
                   }
                   </div>

              
               <span  onClick={  ()=>{ scrollToRight() }   } className='md:ml-[0rem] lg:ml-3 sm:mr-3 md:mr-3'>{ ">" }</span>
          </div>
  )
}

export default Button;




