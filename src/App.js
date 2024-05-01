import './App.css';
import React, { useState } from 'react';
import VideoCarousel from './components/VideoCarousel';
import AudioCarousel from './components/AudioCarousel';
import VerticalSlider from './components/EmotionSlider';
import { Button } from '@mui/material';
//import { Logo } from './logo.png'

//009eb9
//119cd8


function App() {

  const [songURL, setSunoSong] = useState("");
  
  async function generateScore() {
    const response = await fetch("http://127.0.0.1:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(data)
    });
    const songJSON = await response.json();
    const feed = songJSON.clips[0].id; 
    const song = await fetch("http://127.0.0.1:8000/feed" + feed ); 
    
  }

  return (
    <div style={{display:'flex', color: 'white'}}>
      <div style={{flex:1, backgroundColor: '#131428'}}>
        <div><img src="./logo.png" style={{height:250, textAlign: 'center', paddingLeft: 27}}/></div>
        <div>
          <div style={{textAlign: 'center', fontSize: 11}}><VerticalSlider/></div>
            <div style={{margin: 'auto', textAlign: 'center', padding:'25px'}}>
              <Button variant="contained" onClick={generateScore()}
              style={{ backgroundColor: '#009eb9', textTransform: 'none'}}>Generate Score</Button>
            </div>
        </div>
      </div>
      <div style={{flex:2, backgroundColor: '#009eb9'}}>
        <div style ={{paddingTop:-5}}><VideoCarousel/></div>
        <div className="carousel-section">
          <AudioCarousel />
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