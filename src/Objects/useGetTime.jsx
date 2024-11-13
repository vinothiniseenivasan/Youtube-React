import { useState} from "react";

import { useEffect } from "react";



 function useGetTime({ timeStamp }) {
    const [timeAgo, setTimeAgo] = useState('');
  
    useEffect(() => {
      const getTimeAgo = () => {
        const now = new Date();
        const date = new Date(timeStamp);
        const secondsAgo = Math.floor((now - date) / 1000);
  
        const intervals = [
          { label: 'year', seconds: 31536000 },
          { label: 'month', seconds: 2592000 },
          { label: 'week', seconds: 604800 },
          { label: 'day', seconds: 86400 },
          { label: 'hour', seconds: 3600 },
          { label: 'minute', seconds: 60 },
          { label: 'second', seconds: 1 },
        ];
  
        for (const interval of intervals) {
          const count = Math.floor(secondsAgo / interval.seconds);
          if (count >= 1) {
            return `${count} ${count > 1 ? 'days' : ''} ago`;
          }
        }
        return 'just now';
      };
  
      setTimeAgo(getTimeAgo());
  
      // Optionally update every minute for live accuracy
      const intervalId = setInterval(() => {
        setTimeAgo(getTimeAgo());
      }, 60000); // Update every minute
  
      return () => clearInterval(intervalId);
    }, [timeStamp]);

    // console.log("useGetTime" ,timeAgo)
  
  
    return timeAgo;
  }



  export default useGetTime;