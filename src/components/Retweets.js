import React from 'react'
import TweetBox from "./TweetBox";
import { useState } from 'react';

function Retweets() {

  const [openTweet, setOpenTweet] = useState(false);

  function btnOpen() {
    setOpenTweet(true)
  }

  return (
    <>
    <div>Retweets</div>
       <button className="openTweetBtn"
     onClick={btnOpen}
      >Open</button>
    {openTweet && <TweetBox closeTweet={setOpenTweet}/>}
  
    </>
  )
}

export default Retweets;