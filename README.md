# YouTube Clone

This project is a clone of the popular video-sharing platform **YouTube**. It is built using modern front-end technologies, including React, Redux Toolkit, TailwindCSS, and other libraries.

---

## Features

### 1. **YouTube Clone**
- A replica of the YouTube platform, including its UI design and functionalities.

### 2. **YouTube Video List**
- Displays a paginated list of YouTube videos fetched from the YouTube API.
- Supports lazy loading to enhance performance.

### 3. **YouTube Video Preview**
- Clicking on a video in the list opens a preview window displaying the selected video.
- Shows basic video details such as title, description, and view count.

### 4. **Search Suggestions**
- Provides a dropdown list of suggested search queries as the user types in the search bar.
- Enhances the user experience and simplifies finding relevant videos.

### 5. **Optimized Search Using Caching and Debouncing**
- Implements debouncing to reduce the frequency of API calls during search.
- Uses caching to fetch results of previous searches faster.

### 6. **Optimized API Calls Using Debouncing**
- Reduces API calls by implementing debouncing in actions like scrolling through the video list.
- Improves performance by waiting until the user stops scrolling to fetch more videos.

### 7. **Comments Section**
- Displays a threaded view of comments fetched from the YouTube API.
- Allows users to view and post comments on a video.

### 8. **Live Chat**
- Real-time messaging feature that updates the UI continuously using API polling.
- Fetches new messages and updates the chat interface dynamically.

---

## Usage

To use this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add your YouTube API key:
     ```env
     GOOGLE_API_KEY=your_api_key
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Access the app:**
   - Open your web browser and navigate to `http://localhost:3000`.

---

## Dependencies

This project uses the following dependencies:

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library.
- **Moment.js**: Library for parsing, validating, and formatting dates.
- **React Icons**: Icon library for React.
- **React Router DOM**: Library for routing in React applications.
- **TailwindCSS**: Utility-first CSS framework.
**Snapshots:**
   Here are some screenshots of the application:

   ![Home Page](./snapshots/homepage.png)
   *Home Page*

   ![Video Player](./snapshots/video_player.png)
   *Video Player*

   ![Search Suggestions](./snapshots/search_suggestions.png)
   *Search Suggestions*


 **Live Application:**
   - Visit the deployed version of this project at: [YouTube Clone Live](https://youtube-react-ashen.vercel.app/)


