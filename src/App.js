import './App.css';
import React, { useState } from 'react';
import VideoCarousel from './components/VideoCarousel';
import AudioCarousel from './components/AudioCarousel';
import VerticalSlider from './components/EmotionSlider';
import ReactPlayer from 'react-player'
import { Button } from '@mui/material';

function App() {
  return (
    <div style={{display:'flex', backgroundColor: 'black', color: 'white'}}>
      <div className="carousel-section" style={{flex:1}}>
        <AudioCarousel />
      </div>
      <div style={{flex:2}}>
        <div><VideoCarousel/></div>
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