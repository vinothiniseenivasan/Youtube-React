import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeToggleBar } from '../utils/navBarSlice';
// import { Link } from 'react-router-dom';
import InputSuggestCard from './InputSuggestCard';
// import { setSuggestions } from '../utils/userInputSlice';
import { getInformationFromApi} from '../utils/storeSuggestionApi';


const Head = () => {

  // get search query from redux to check if already present or not iphone:["i" ,"ip"]
  const query = useSelector(store => store.search);
  // console.log("query for api" ,query)
  // const navBarStatus = useSelector((store)=> store.navBar.toggleBar);
 
    const [showSuggestion , setShowSuggestion] = useState(false);
// get input whatever user search in search bar
  const [inputSerachQuery ,setInputSearchQuery] =useState("");
 const queryInput = useSelector((store)=> store.userInput.query);
  const dispatch = useDispatch();

  //  get suggestion from api
  const [inputChanges ,setInputChanges] = useState([]);

  useEffect(() => {
    if (queryInput) {
      setInputSearchQuery(queryInput);
    }
    else
    {
      setInputSearchQuery("");

    }
  }, [queryInput]);

  async function getYoutubeSuggestVideos()
  {

    // console.log("Api call of" , inputSerachQuery)

    // make api call to suggest userInput
    const data =await fetch(`https://corsproxy.io/?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${inputSerachQuery}`);

    const jsonInfo = await data.json();

    // console.log("jsonInfo" ,jsonInfo[1]);

    setInputChanges(jsonInfo[1]);
    // store in redux api results
    dispatch(getInformationFromApi({
      [inputSerachQuery] : jsonInfo[1]
    }
     
    ))
    
  
  }

  useEffect(() =>{



   

     // debouncing
    const timer = setTimeout(()=>
    {
      // if the query already present no need to make api call just return it

      if(query[inputSerachQuery])
        {
          setInputChanges(query[inputSerachQuery]);
         
        }
        else{
          // make api call
          getYoutubeSuggestVideos() 
        }
    } ,200);
      

    // cleanup
    return () => clearTimeout(timer);

  } , [inputSerachQuery]);

  
  


  function handleOnChange(e)
  {
    setInputSearchQuery(e.target.value);  

  }

  const handleBlur = () => {
    setTimeout(() => setShowSuggestion(false), 300);
  };



  
  // console.log("navBarStatus" ,navBarStatus)

    // it has 3 sections 
    //  navbar 
    // serach bar
    //  user icon
  return (
    <div className=''>
  <div className=' fixed grid grid-flow-col shadow-xl place-items-center w-full  bg-white'>



         <div className='flex items-center col-span-4  sm:col-span-1 '>
        
               {/*  navbar  */}
            <img 
             onClick={()=>{dispatch(changeToggleBar())}}
            className='h-14'
            src="https://th.bing.com/th?id=OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" alt="hamburger-menu" />
            {/*  youtube logo  */}
            <img
            className=' w-[10rem]  h-[8rem] sm:w-28 sm:h-[6rem] ml-3'
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
            value={inputSerachQuery}
            onChange={(e)=>handleOnChange(e)}
            onFocus={()=>{setShowSuggestion(true)}}
            onBlur={()=>{handleBlur()}}/>

            <button className=' p-1 px-2 rounded-r-full border border-gray-500  hover:bg-gray-500 ' >
                <img src="https://th.bing.com/th/id/OIP.cmKicNaFYKs0z4-eb269_QHaHw?rs=1&pid=ImgDetMain" 
                className='w-8 h-8  cursor-pointer  '
                alt="" />
            </button>
           </div>

           {/* input search results */}

           
           

           {/* user information */}
           <div className='col-span-1 flex justify-center items-center'>
            {/* <img 
            className='h-8 w-10 mr-10'
            src='https://w7.pngwing.com/pngs/141/932/png-transparent-custom-home-house-logo-sales-home-angle-building-company.png' alt='home-image'/> */}
            
            <div>
            <img  
            className='h-10 mr-5 sm:mr-0'
             src='https://logodix.com/logo/1070634.png' alt='user-info'/>

            </div>
           <div>
            {/* Suggestion Box */}
          { showSuggestion &&  inputChanges.length > 0 && (
            <div className="absolute top-[4.5rem] left-[25.3rem] w-[615px] rounded-lg bg-white border border-none shadow-lg">
              <InputSuggestCard inputChanges={inputChanges} />
            </div>
          )}
        </div>
           
           
            
           </div>
          

    </div>

   

  
    </div>
  )

}

export default Head;