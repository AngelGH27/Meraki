import React from 'react'
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder='Search Twitter' type="text"/>
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1574320851536576512"}/>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="imVkohli"
        options={{height: 400}}
        />

        <TwitterShareButton
        url={"https://facebook.com/Virat Kohli"}
        options={{text: "#reactjs is awesome", via: "imVkohli"}}/>
      </div>
    </div>
  );
}

export default Widgets;

