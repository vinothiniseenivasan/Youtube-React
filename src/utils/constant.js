const GOOGLE_API_KEY = "AIzaSyCiabuoMTlguZwWCM_J_GZK4dyCWrvZ2-k";


export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;


//   Go to the Google Cloud Console.
// Select your project.
// Navigate to APIs & Services > Library.
// Search for "YouTube Data API v3" and ensure that it is enabled for your project. After enabling it worked for me