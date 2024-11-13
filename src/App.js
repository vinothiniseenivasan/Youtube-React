import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";


function App() {

  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body /> ,
    // body has 2 children
    //  1.sidebar
    // 2.navigate according to url 1.watchPage 2. mainContainer


    children:[
      {
        path: "/" ,
        element:<MainContainer />
      },
      {
        path: "/watch" ,
        element:<WatchPage />
      },

    ]
      
     }])
  return (


   




    <Provider store={appStore}>
    <div> 
            <Head />
            {/* router */}
            <RouterProvider router={appRouter} />
     </div>
    </Provider>
   
  );
}

export default App;
