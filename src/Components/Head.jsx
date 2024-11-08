import React from 'react'

const Head = () => {

    // it has 3 sections 
    //  navbar 
    // serach bar
    //  user icon
  return (
    <div className='grid grid-flow-col shadow-xl place-items-center'>



         <div className='flex items-center col-span-4  sm:col-span-1 '>
         {/*   navbar 
               youtube logo */}
            <img 
            className='h-14'
            src="https://th.bing.com/th?id=OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" alt="hamburger-menu" />
            <img
            className=' w-[10rem]  h-[8rem] sm:w-28 sm:h-28 ml-3'
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png"
            alt='youtube-logo'/>

         </div>

           {/* search bar */}
           {/* input and search button */}
           <div className=' col-span-7 sm:col-span-7 flex items-center  w-full'>
            <input 
            type="text"
            className='border  border-gray-500 w-[45%] p-2 rounded-l-full ml-[5rem]  md:ml-[4rem]  ' 
            placeholder='search'
            />
            <button className=' p-1 px-2 rounded-r-full border border-gray-500  hover:bg-gray-500 ' >
                <img src="https://th.bing.com/th/id/OIP.cmKicNaFYKs0z4-eb269_QHaHw?rs=1&pid=ImgDetMain" 
                className='w-8 h-8  cursor-pointer  '
                alt="" />
            </button>
           </div>

           {/* user information */}
           <div className='col-span-1'>
            <img  
            className='h-10 mr-5 sm:mr-0'
             src='https://logodix.com/logo/1070634.png' alt='user-info'/>
            {/* // src='https://yt3.ggpht.com/yti/ANjgQV8kMyK0S_Rd-Wn9wKQmyy6Jwi3ITgVvnXW18jzqgBo=s88-c-k-c0x00ffffff-no-rj' alt='user-info'/> */}

           </div>

    </div>
  )
}

export default Head