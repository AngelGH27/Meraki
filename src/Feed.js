import React, { useEffect } from 'react';
import TweetBox from './TweetBox';
import {Avatar} from "@mui/material";
import Post from "./Post";
import './Feed.css';
//import db from './firebase';

function Feed() {
//   const[posts, setPosts]=useState([]);


// useEffect(()=>{
 
//   db.collection('posts').onSnapshot(snapshot =>(
//   setPosts(snapshot.docs.map(doc => doc.data()))
//   ))
// }, []);






  return (

    
     
      <div className ="feed">
         {/* Header */}
        <div className="feed__header">
      <h2>Home</h2>
      </div>
      
      
      
      
      {/* TweetBox */}
      <TweetBox/>


      {/* Post */}
      <Post 
      displayName="Sunny Sangha"
      username='ssssangha'
      verified={true}
      text="YOO IT'S WORKING...... 🏃‍♂️💨"
      avatar ="/static/images/avatar/2.jpg"
      image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
    
    
    />
    <Post 
      displayName="Salman Khan"
      username='salman_5'
      verified={true}
      text="EID Mubarak 🙏"
      avatar ="/static/images/avatar/3.jpg"
      image="https://th.bing.com/th/id/OIP.kcD7CrhB7EE36DKrlSt_XAHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7"
      
    
    />

<Post 
      displayName="Traver yaar"
      username='travel_756'
      verified={false}
      text="Places to visit in South India....
      Go travel!!! ✈️"
      avatar ="/static/images/avatar/1.jpg"
      image="https://th.bing.com/th/id/OIP.Z4F3UUyL624jsTvlUtveawHaE0?w=304&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7"
      />
      <Post 
      displayName="Alia Bhatt"
      username='aliakapoor_27'
      verified={false}
      text="Hey guys!!!!😍"
      avatar ="/static/images/avatar/1.jpg"
      image="https://www.bing.com/th?id=OIP.nPQ9Q8YQKh6WCxHQTEDmiwHaEQ&w=329&h=189&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    
    
    />
    
    
    
    <Post 
      displayName="Rohit Sharma"
      username='Rsharma'
      verified={true}
      text="Go catch your jersey....🏏"
      avatar ="/static/images/avatar/4.jpg"
      image="https://www.bing.com/th?id=OIP.tnK_U4339vhnh3m1fhk7OgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    
    
    />
    <Post 
      displayName="Christiano Ronaldo"
      username='Chris_7'
      verified={true}
      text="Let's footbal......⚽"
      avatar ="/static/images/avatar/3.jpg"
      image="https://th.bing.com/th/id/OIP.AUh7lixkqHOSYQclG3iAZgHaD4?w=345&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    
    
    />

<Post 
      displayName="Narendra Modi"
      username='Nmodi'
      verified={true}
      text="🙏"
      avatar ="/static/images/avatar/3.jpg"
      image="https://th.bing.com/th/id/OIP.Ew4f5HumDYb9tAL3iG0eBwHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    
    
    />
    <Post 
      displayName="MEMER"
      username='memeryo_2'
      verified={false}
      text="😂😂"
      avatar ="/static/images/avatar/3.jpg"
      image="https://th.bing.com/th/id/OIP.Dv1TKYmto5i276wJbR7L8wHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    
    
    />
    
      
    </div>
  )
}

export default Feed
