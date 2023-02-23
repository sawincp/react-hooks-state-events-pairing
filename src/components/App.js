import React from "react"
import video from "../data/video.js";
import Votes from "./Votes"
import Comments from "./Comments.js";



function App() {
  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title} </h1>
      <p> {video.views} Views | {video.createdAt} </p>
      
      <Votes 
          upVote = {video.upvotes} 
          downVote = {video.downvotes}
        />
      <Comments
          comments={video.comments}

      />
    
    
    </div>
  );
}

export default App;
