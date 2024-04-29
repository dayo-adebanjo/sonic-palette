import './App.css';
import React, { useState } from 'react';
import VideoCarousel from './components/VideoCarousel';
import AudioCarousel from './components/AudioCarousel';
import VerticalSlider from './components/EmotionSlider';
import ReactPlayer from 'react-player'
import { Button } from '@mui/material';
//import { Logo } from './logo.png'

//009eb9
//119cd8
function App() {
  return (
    <div style={{display:'flex', color: 'white'}}>
      <div style={{flex:1, backgroundColor: '#131428'}}>
        <div><img src="./logo.png" style={{height:250}}/></div>
        <div className="carousel-section">
          <AudioCarousel />
        </div>
      </div>
      <div style={{flex:2, backgroundColor: '#009eb9'}}>
        <div style ={{paddingTop:50}}><VideoCarousel/></div>
        <div style={{textAlign: 'center'}}><VerticalSlider/></div>
        <div style={{margin: 'auto'}}>
        <div style={{margin: 'auto', textAlign: 'center', padding:'25px'}}>
          <Button variant="contained">Record Emotion</Button></div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
/*
<div className="App">
      <div className="video-section">
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      </div>
      <div className="audio-section">
        <AudioPlayer src="http://example.com/audio.mp3" />
      </div>
      */