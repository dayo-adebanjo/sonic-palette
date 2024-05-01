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
   videoUrl: './vids/door.mov'
  },
  {
    _id: 'beach',
    videoUrl: './vids/beach.mov'
   },
   {
    _id: 'fire',
    videoUrl: './vids/fire.mov'
   },
   {
    _id: 'lightning',
    videoUrl: './vids/lighting.mov'//change
   }
];

/*const useStyles = makeStyles(theme => ({
  carousel: {
  margin: theme.spacing(2)
 }
}));*/

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="550px" url={url} playing={isSelected} />
);

const CarouselVideo = ({ data }) => {
  //const classes = useStyles();

  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );
  const customRenderThumb = children =>
    children.map(item => {
      console.log(item)
      const videoId = item.key;
      const src = './vids/thumbnail/' + videoId + '.png'; 
      console.log(src); 
      return <img key={videoId} src={src} />;
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
       style={{height:20}}
     >
      {data.map(v => (
        <YoutubeSlide
          url={v.videoUrl}
          muted
          playing={false}
          key={v._id ? v._id : v.id}
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