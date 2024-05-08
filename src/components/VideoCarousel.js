import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import ReactPlayer from 'react-player';
import { styled } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import { PropTypes } from 'prop-types';
import Grid from '@mui/material/Grid';

const DUMMY_VIDEOS = [
  {
   _id: 'door',
   videoUrl: './vids/door.mov', 
   desc: 'mysterious violin melody about locked doors'
  },
  {
    _id: 'beach',
    videoUrl: './vids/beach.mov', 
    desc: 'beachy vibes about someone walking down the beach'
   },
   {
    _id: 'lightning',
    videoUrl: './vids/light.mp4', //change
    desc: 'song about lightning striking'
   },
   {
    _id: 'horses',
    videoUrl: './vids/horses.mp4',
    desc: 'country song about horses running down a field'
   }
];

/*const useStyles = makeStyles(theme => ({
  carousel: {
  margin: theme.spacing(2)
 }
}));*/

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="550px" url={url} playing={isSelected} loop={true} />
);


const CarouselVideo = ({ data, setAudioURL, setSongDesc }) => {
  //const classes = useStyles();
  const onClickThumb = (index, item) => {
    console.log(item)
    setAudioURL(item.props.url);
    setSongDesc(item.props.desc);
  };
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );
  const customRenderThumb = children =>
    children.map(item => {
      const videoId = item.key;
      const src = './vids/thumbnail/' + videoId + '.png'; 
      return <img key={videoId} src={src} url={item.props.url} desc={item.props.desc}/>;
      //return <img key={videoId} src={getVideoThumb(videoId)} />;

  });

  return (
    <Grid item md={6} xs={12}>
      <Carousel
       autoPlay={false}
       emulateTouch={true}
       showArrows={true}
       showThumbs={true}
       showStatus={false}
       infiniteLoop={true}
       renderItem={customRenderItem}
       renderThumbs={customRenderThumb}
       onClickThumb={onClickThumb}
       style={{height:20}}
     >
      {data.map(v => (
        <YoutubeSlide
          url={v.videoUrl}
          muted
          playing={false}
          key={v._id ? v._id : v.id}
          desc={v.desc}
        />
      ))}
     </Carousel>
   </Grid>
  );
 };

 YoutubeSlide.propTypes = {
   url: PropTypes.string,
   isSelected: PropTypes.bool
 };

 CarouselVideo.propTypes = {
   data: PropTypes.array
 };

 CarouselVideo.defaultProps = {
  data: DUMMY_VIDEOS
 };

export default CarouselVideo;