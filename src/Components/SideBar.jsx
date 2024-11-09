import React from 'react';
import { sidebarObj } from '../Objects/sidebarObj';
import { useSelector } from 'react-redux';

const SideBar = () => {
    
  const navBarStatus = useSelector((store)=> store.navBar.toggleBar);


  return (
   
   (navBarStatus &&
    <div className=' w-[10rem] sm:w-[15rem] shadow-lg p-3 h-screen overflow-y-auto'>
     <ul>
        {
            sidebarObj.map((eachSideBar,index  )=>(
                  


                <li key={index}>

                     {/* {console.log(eachSideBar.items)} */}
                    {eachSideBar.title !== " " &&
                   <h1 className="text-[1.1rem] font-medium tracking-wide leading:[1.5rem] sm:leading-[2rem] mb-3 opacity-8s0  cursor-pointer "> {eachSideBar.title+ " " + ">"} </h1>}

                            { 
                             eachSideBar.items.map((eachSubTitle , index)=>(
                               
                          <div key={index} className='flex justify-start items-center leading-[1.8rem]  sm:leading-[2.2rem] cursor-pointer'>
                                  {/* img logo */}
                                    <div className=''>
                                         <img src={eachSubTitle.img} alt="logo" className='w-6 h-6' />
                                    </div>
      
      
                                   {/* // subtitle */}
                                  <h3 className=' ml-4 sm:ml-6 text-gray-600 font-light sm:font-normal tracking-normal  sm:tracking-wide  '>
                                      {eachSubTitle.label}
                                  </h3>
                           
                            </div>
                           ))}
                        
                      
                      
                      
                       <hr className='w-full  border border-gray mt-2 mb-2'/>
                </li>
              
            ))
           
        }
       
       
     </ul>
    
     
    </div> )
  )
} 

export default SideBar