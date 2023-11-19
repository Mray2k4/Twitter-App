import React from 'react'
import Retweets from "./Retweets";

function TweetBox(openTweet) {
  return (
    <div className='tweetBackgornd'>
      <div className="tweetContainer">
        <button> X </button>
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