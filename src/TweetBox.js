import React from 'react'
import "./TweetBox.css";

import {Avatar, Button} from "@mui/material";

import { deepOrange } from '@mui/material/colors';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';


function TweetBox() {
  return (
    <div className="tweetBox">
        <form>
         <div className="tweetBox__input">
         <Avatar
        sx={{ bgcolor: deepOrange[500] }}
           alt="Remy Sharp"
           src="/broken-image.jpg"
            >B</Avatar>
         <input placeholder="Whats's happening?"  type="text"/>
        
         </div>
          
        <div className='tweetBox__imageInput'>
        
          <PhotoSizeSelectActualOutlinedIcon fontSize="small"/>&nbsp; &nbsp;
          <GifBoxOutlinedIcon fontSize="small"/>&nbsp;&nbsp;
          <SentimentSatisfiedAltOutlinedIcon fontSize="small"/>&nbsp;&nbsp;
          <PlaceOutlinedIcon fontSize="small"/>&nbsp;&nbsp;
          <EventNoteOutlinedIcon fontSize="small"/>&nbsp;&nbsp;
          <PollOutlinedIcon fontSize="small"/>&nbsp;&nbsp;
          
        </div>
        
        
         
          <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default TweetBox
