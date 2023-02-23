import React, {useState} from "react"
import Comment from "./comment"

function Comments({comments}){

    
    const [commentPrompt, setMessagePrompt]=useState(false)

    const style = {"display" : "none"}
   
    function handleMessagePrompt(){
        setMessagePrompt((commentPrompt)=>!commentPrompt)
    }

    const allComments= comments.map(comment => <Comment id= {comment.id} user = {comment.user} comment2 ={comment.comment}/>)

    return(
        <div>
            <p> </p>
            <button onClick={handleMessagePrompt}>{commentPrompt ? "Show Comments": "Hide Comments"}</button>
            <p>___________________________________________________</p>
            <div style = {commentPrompt? style : null }>{allComments}</div>
        </div>


    )
}

export default Comments