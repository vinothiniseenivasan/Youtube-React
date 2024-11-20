// export const GOOGLE_API_KEY = "AIzaSyCAz2fl8eUFaIcdIWx1nqkO7Wjd8eZw4q8";

  export const GOOGLE_API_KEY = "AIzaSyCTVVvEJ3fqeexIz9XYG2oErmtNOMHJY9o"
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;


 
  export const YOUTUBE_VIDEOINFO_BYID =    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="



   // export const YOUTUBE_VIDEOINFO_BYID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=qlJjPV3PBUA&key=" + GOOGLE_API_KEY;

//   Go to the Google Cloud .
// Select your project.
// Navigate to APIs & Services > Library.
// Search for "YouTube Data API v3" and ensure that it is enabled for your project. After enabling it worked for me