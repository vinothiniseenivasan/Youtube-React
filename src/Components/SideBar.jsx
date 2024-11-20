import React from 'react';
import { sidebarObj } from '../Objects/sidebarObj';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { setSuggestions } from '../utils/userInputSlice';
import VideoContainer from './VideoContainer';
import Head from './Head';

const SideBar = () => {
  // const queryInput = useSelector((store)=> store.userInput.query);
    
  const navBarStatus = useSelector( (store)=> store.navBar.toggleBar );
  const dispatch=useDispatch();

  function handleClick(title)
   {
    if(title === "Home")
    {
      dispatch(setSuggestions(""));
      
      <VideoContainer />
     
      
    
       
    }

  }


  return (
   
   ( navBarStatus &&
    //
    // w-[8rem]  sm:w-[12rem] md:w-[15rem]
    <div className='fixed md:w-[12rem]  lg:w-[15rem] w-[8rem]  sm:w-[12rem]   shadow-lg p-3 h-screen overflow-y-auto cursor-pointer mt-28'>
     <ul>
        {
            sidebarObj.map((eachSideBar,index  )=>(
                  


                <li key={index}>

                     {/* {console.log(eachSideBar.items)} */}
                    {eachSideBar.title !== " " &&
                   <h1 className="text-[1.1rem] font-medium tracking-wide leading:[1.5rem] sm:leading-[2rem] mb-3 opacity-8s0  cursor-pointer "> {eachSideBar.title+ " " + ">"} </h1>}

                            { 
                             eachSideBar.items.map( (eachSubTitle , index)=>(

                               
                                
                              <Link to={eachSubTitle.label === "Home" ? "/" : " "}>
                                   {/* {console.log("eachSubTitle" ,eachSubTitle)} */}
                             
                          <div key={index} className='flex justify-start items-center leading-[1.8rem]  sm:leading-[2.2rem] cursor-pointer'>
                            {/* img logo */}
                              <div className=''>
                                   <img src={eachSubTitle.img} alt="logo" className='w-6 h-6' />
                              </div>


                             {/* // subtitle */}
                       <h3 className=' ml-4 sm:ml-6 text-gray-600 font-light sm:font-normal tracking-normal  sm:tracking-wide  '
                            onClick={()=>handleClick(eachSubTitle.label)}>
                                {eachSubTitle.label}
                            </h3>
                     
                          </div>
                          </Link>
                          
                           ))
                           }
        
                        
                      
                      
                      
                       <hr className='w-full  border border-gray mt-2 mb-2'/>
                </li>
              
            ))
           
        }
       
       
     </ul>
    
      
    </div> )
  )
} 

export default SideBar