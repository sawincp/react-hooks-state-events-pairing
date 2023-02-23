import React, { useState } from 'react'

function Votes({upVote, downVote}){
    
    const [likes, setUpVote]= useState(upVote)
    const [dislike, setDownVote]=useState(downVote)

    function handleUpVote(){
        setUpVote((likes)=> likes + 1)
    }

    function handleDownVote(){
        setDownVote((dislike)=> dislike + 1)
    }

    return(
        <div>
            <button onClick={handleUpVote}>{likes}👍 </button> <button onClick={handleDownVote}>{dislike}👎</button>
        
        </div>
    )


}

export default Votes