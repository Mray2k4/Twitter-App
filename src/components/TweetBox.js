import React from 'react'
import './TweetBox.css'
// import Retweets from "./Retweets";

function TweetBox({closeTweet}) {
  return (
    <div className='tweetBackgornd'>
      <div className="tweetContainer">
        <div className='closeBtn' >
        <button onClick={() => closeTweet(false)} > X </button>
        </div>
        <div className="title">
          <h2>Username</h2>
          <div className="body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      A, rem. Minus mollitia pariatur sit molestiae ipsa sint 
      praesentium aut, illo neque dignissimos officiis placeat
      hic explicabo nesciunt iure delectus laborum!</p>
            <div className="footer">
              <h3>Retweets and Likes</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TweetBox;