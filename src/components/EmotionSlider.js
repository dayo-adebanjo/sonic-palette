import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 100,
    label: '100%',
  },
];

export default function VerticalSlider() {
  return (
    <div style={{display:'flex', justifyContent: 'space-evenly'}}>
    <div><Stack sx={{ width: 300 }} spacing={1}>
      <Typography id="track-joy" gutterBottom>
        Joy
      </Typography>
      <Slider
        //aria-label="Joy"
        aria-labelledby="track-joy"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        marks={marks}
        defaultValue={0}
      />
      <Typography id="track-sorrow" gutterBottom>
        Sorrow
      </Typography>
      <Slider
        //aria-label="Sorrow"
        defaultValue={0}
        aria-labelledby="track-sorrow"
        getAriaValueText={valuetext}
        marks={marks}
        valueLabelDisplay="auto"
      />
      <Typography id="track-fear" gutterBottom>
        Fear
      </Typography>
      <Slider
        //getAriaLabel={() => 'Fear'}
        aria-labelledby="track-fear"
        getAriaValueText={valuetext}
        defaultValue={0}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="track-anger" gutterBottom>
        Anger
      </Typography>
      <Slider
        //getAriaLabel={() => 'Fear'}
        aria-labelledby="track-anger"
        getAriaValueText={valuetext}
        defaultValue={0}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="track-amusement" gutterBottom>
        Amusement
      </Typography>
      <Slider
        //getAriaLabel={() => 'Fear'}
        aria-labelledby="track-amusement"
        getAriaValueText={valuetext}
        defaultValue={0}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="track-excitement" gutterBottom>
        Excitement
      </Typography>
      <Slider
        //getAriaLabel={() => 'Fear'}
        aria-labelledby="track-excitement"
        getAriaValueText={valuetext}
        defaultValue={0}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="track-disgust" gutterBottom>
        Disgust
      </Typography>
      <Slider
        //getAriaLabel={() => 'Fear'}
        aria-labelledby="track-disgust"
        getAriaValueText={valuetext}
        defaultValue={0}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <Typography id="track-neutral" gutterBottom>
        Neutral
      </Typography>
      <Slider
        //getAriaLabel={() => 'Fear'}
        aria-labelledby="track-neutral"
        getAriaValueText={valuetext}
        defaultValue={0}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Stack></div>
    </div>
  );
}