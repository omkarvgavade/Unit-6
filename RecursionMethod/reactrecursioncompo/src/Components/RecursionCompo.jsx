import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
function RecursionCompo({ posts }) {
    const [showComments, setShowComments] = useState(false);
    return (
        <RecursionCompoWrapper  >
            <LineWrapper
                showComments={showComments && posts?.replies}
                onClick={() => {
                    setShowComments(!showComments);
                }} >

            </LineWrapper>
            <div className="postBody">
                <div className="postedBy">{posts.author} {posts.points} points 2 minuted ago</div>
                <div className="heading">{posts.body}</div>
                <div><button>Reply</button> <button>Share</button> <button>Give award</button> <button>Report Save</button></div>
            </div>
            {(showComments && posts?.replies) ? posts.replies.map((el) => {
                return <RecursionCompo posts={el} />
            }) : ""}




        </RecursionCompoWrapper>
    )
}


const RecursionCompoWrapper = styled.div`
margin-left: 3rem;
background-color:rgb(129,34,168);
color: white;

padding: 2rem;
.heading{
    font-size: large;
    font-weight: bolder;
}
.postBody{
    margin-top: 20px;
    line-height: 60px;
    margin-left: 15px;
    button{
    border:none;
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: #eb8977;
    outline: none;
    color: #421616;
    font-weight: bold;
    :hover{
        text-decoration:underline;
        color: darkblue;
    }
    }
    .postedBy{

    }
}



`
const LineWrapper = styled.div`

  width: 5px;
    min-height: 10rem;
    position: absolute;
    background-color: ${props => props.showComments ? `red` : `green`};;
    cursor: pointer;

`

export default RecursionCompo
