import React from 'react'
import TweetBox from "./TweetBox";
import { useState } from 'react';
import axios from 'axios';

function Retweets() {

  const [openTweet, setOpenTweet] = useState(false);


  function btnOpen() {
    setOpenTweet(true)
  }

  return (
    <>
    <div>Retweets</div>
    {/* <button onClick={api} >API</button> */}
       <button className="openTweetBtn"
     onClick={btnOpen}
      >Open</button>
    {openTweet && <TweetBox closeTweet={setOpenTweet}/>}
  
    </>
  )
}

export default Retweets;