import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 0,
    label: 'Exciting',
  },
  {
    value: 16,
    label: 'Happy',
  },
  {
    value: 32,
    label: 'Funny',
  },
  {
    value: 50,
    label: 'Neutral',
  },
  {
    value: 66,
    label: 'Sad',
  },
  {
    value: 82,
    label: 'Fear',
  },
  {
    value: 100,
    label: 'Anger',
  }
];

const EmSlider = styled(Slider)({
  color: '#009eb9',
  height: 400,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#009eb9',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default function VerticalSlider() {
  return (
    <div style={{display:'flex', 
    justifyContent: 'space-evenly', 
    fontFamily: 'Garamond',
    fontSize: 11,
    color: 'white',
    height:'100%'}}>
    
      <EmSlider
            aria-label="Emotion"
            defaultValue={50}
            getAriaValueText={valuetext}
            step={null}
            marks={marks}
            orientation="vertical"
            sx={{
              '& .MuiSlider-markLabel': {
                color: 'white',
                fontFamily: 'Gill Sans'
              },
            }}
          />
      
    </div>
  );
  
}