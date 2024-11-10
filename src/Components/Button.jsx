import React, { useRef } from 'react';
import { mainContainerButton } from '../Objects/mainContainerButton';
import "../css/button.css";

const Button = () => {

    const containerRef = useRef(null);
     

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
                            
                             className='border flex-shrink-0 bg-gray-200  rounded-md flex justify-start items-center sm:p-[0.2rem]   md:p-[0.4rem] ml-5 mt-3 font-thin
                             hover:bg-black hover:text-white'
                             
                             >
     
                              <span className=' font-semibold'>{ eachButton.label }</span>
                           </div>
      
                        ))
                   }
                   </div>

              
               <span  onClick={  ()=>{ scrollToRight() }   } className='md:ml-[0rem] lg:ml-3 sm:mr-3 md:mr-3'>{ ">" }</span>
          </div>
  )
}

export default Button;




