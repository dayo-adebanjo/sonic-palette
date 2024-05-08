import './App.css';
import React, { useState, useEffect } from 'react';
import VideoCarousel from './components/VideoCarousel';
import AudioCarousel from './components/AudioCarousel';
import VerticalSlider from './components/EmotionSlider';
import { Button, CircularProgress } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import { AssemblyAI } from 'assemblyai';
import 'react-h5-audio-player/lib/styles.css';
//import { Logo } from './logo.png'

//009eb9
//119cd8

function App() {
  const [songURL, setSunoSong] = useState("");
  const [audioURL, setAudioURL ] = useState(""); 
  const [songDesc, setSongDesc] = useState(""); 
  const [emotion, setEmotion] = useState("neutral"); 
  const [isGenerating, setGenerating] = useState(false);

  useEffect(() => {
    // This effect will run after each state update
    console.log('songURL has been updated:', songURL);
  }, [songURL]);

  async function generateSummary(){
    setGenerating(true);
    console.log(audioURL);
    const API_key = '1d64342dd11a49d395a4bfd9c2c6fd56';
    const client = new AssemblyAI({ apiKey: API_key });
    await client.transcripts.transcribe({
      audio: audioURL,
      summarization: true,
      summary_model: "informative",
      summary_type: "headline"
      })
      .then(transcript => {
        console.log(transcript)
        generateScore(transcript.summary)
      })
      .catch(console.error);

  }

  async function generateScore(transcript) {
    setGenerating(true);
    console.log( emotion  + " melody to a scene of " + songDesc); 
    const response = await fetch("http://127.0.0.1:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "prompt": "",
        "mv": "chirp-v3-0",
        "title": "",
        "tags": emotion  + " " + songDesc
      })
    });
    const songJSON = await response.json();
    const feed = songJSON.clips[0].id; 

    for (let i = 0; i < 20; i++) {
      const songResponse = await fetch("http://127.0.0.1:8000/feed/" + feed ); 
      const song = await songResponse.json();
      console.log(song)
      if (song[0].status === "streaming") {
        console.log(song[0].audio_url);
        setSunoSong(song[0].audio_url);
        setGenerating(false);
        break;
      }
      // sleep 5s
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }  
  }

  return (
    <div style={{display:'flex', color: 'white'}}>
      <div style={{flex:1, backgroundColor: '#131428'}}>
        <div><img src="./logo.png" style={{height:250, textAlign: 'center', paddingLeft: 27}}/></div>
        <div>
          <div style={{textAlign: 'center', fontSize: 11}}><VerticalSlider setEmotion={setEmotion}/></div>
            <div style={{margin: 'auto', textAlign: 'center', padding:'25px'}}>
              <Button variant="contained" onClick={generateScore}
              style={{ backgroundColor: '#009eb9', textTransform: 'none'}}>Generate Score</Button>
            </div>
        </div>
      </div>
      <div style={{flex:2, backgroundColor: '#009eb9'}}>
        <div style ={{paddingTop:-5}}><VideoCarousel setAudioURL={setAudioURL} setSongDesc={setSongDesc}/></div>
       { isGenerating ? 
       <div style={{margin: "auto"}}> <CircularProgress /> </div> :
       <div className="carousel-section">
          <AudioPlayer
            autoPlay
            src={songURL}
            onPlay={e => console.log("onPlay")}
            // other props here
          />
        </div> }
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