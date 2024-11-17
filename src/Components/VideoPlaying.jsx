

import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import { Link } from "react-router-dom";
import RecommVideoInfo from "./RecommVideoInfo";
import { useCallback } from "react";
// import { useEffect } from "react";

// const VideoPlaying= ({ playlistId}) => {
//   const [firstVideoId, setFirstVideoId] = useState(null);

//   const [videoInformation ,setVideoInformation] = useState(null);


//   useEffect(() => {
//     if (playlistId) {
//       fetchPlaylistItems(playlistId);
//     }
//   }, [playlistId]);

//   const fetchPlaylistItems = async (playlistId) => {
//     const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1&key=${GOOGLE_API_KEY}`
//     );
//     const data = await response.json();

//      console.log("videoInfo in VideoPlaying" ,data?.items[0]?.snippet?.resourceId?.videoId
        
//      );
//      setFirstVideoId(data?.items[0]?.snippet?.resourceId?.videoId);
//      setVideoInformation(data.items[0]);
   
//   };

//   return(<div>
//       <Link to={"/watch?v=" + firstVideoId}>
//         <RecommVideoInfo     videoInfo={videoInformation}/>
//     </Link>
//   </div>)

// //   
// };
// export default VideoPlaying



const VideoPlaying = ({ playlistId }) => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (playlistId) {
      fetchPlaylistItems(playlistId);
    }
  }, [playlistId]);

  const fetchPlaylistItems = async (playlistId, pageToken = "") => {
    setLoading(true);

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${GOOGLE_API_KEY}&pageToken=${pageToken}`
    );

    const data = await response.json();
    //  console.log("voideoPlaying in scroll" ,data)
    // Append new videos to the existing list
    setVideos((prevVideos) => [...prevVideos, ...(data?.items || [])]);

    // Update nextPageToken for future fetches
    setNextPageToken(data?.nextPageToken || null);
    setLoading(false);
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      if (!loading && nextPageToken) {
        fetchPlaylistItems(playlistId, nextPageToken);
      }
    }
  }, [loading, nextPageToken, playlistId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="video-list">
      {videos.map((video, index) => {
        const videoId = video?.snippet?.resourceId?.videoId;
        return (
          <div key={index}>
            <Link to={`/watch?v=${videoId}`}>
              <RecommVideoInfo videoInfo={video} />
            </Link>
          </div>
        );
      })}
      {loading && <p>Loading more videos...</p>}
    </div>
  );
};

export default VideoPlaying;




