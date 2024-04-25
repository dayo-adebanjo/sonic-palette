import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import ReactPlayer from 'react-player';
import { styled } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import { PropTypes } from 'prop-types';
import Grid from '@mui/material/Grid';

const DUMMY_VIDEOS = [
  {
   _id: '5fd025a181e2c80897c14ae1',
   videoUrl: 'https://www.youtube.com/watch?v=dVBm5gM4DAA'
  },
  {
    _id: '5fd025a181e2c80897c14ae2',
    videoUrl: 'https://www.youtube.com/watch?v=xyFxXRTQpt4'
   },
   {
    _id: '5fd025a181e2c80897c14ae3',
    videoUrl: 'https://www.youtube.com/watch?v=l7gXw-3KwU4'
   },
   {
    _id: '5fd025a181e2c80897c14ae4',
    videoUrl: 'https://www.youtube.com/watch?v=nJ9Fj2mSdQY'
   },{
    _id: '5fd025a181e2c80897c14ae5',
    videoUrl: 'https://www.youtube.com/watch?v=kslVCIxyU8Q'
   },{
    _id: '5fd025a181e2c80897c14ae5',
    videoUrl: 'https://www.youtube.com/watch?v=9Y7A4cXph9U'
   },{
    _id: '5fd025a181e2c80897c14ae5',
    videoUrl: 'https://www.youtube.com/watch?v=R_yMclBMw5k'
   },{
    _id: '5fd025a181e2c80897c14ae5',
    videoUrl: 'https://www.youtube.com/watch?v=SXAOuDsd0BQ'
   }
];

/*const useStyles = makeStyles(theme => ({
  carousel: {
  margin: theme.spacing(2)
 }
}));*/

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" height="400px" url={url} playing={isSelected} />
);

const CarouselVideo = ({ data }) => {
  //const classes = useStyles();

  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );
  const getVideoThumb = videoId =>`https://img.youtube.com/vi/${videoId}/default.jpg`;
  const getVideoId = url =>url.substr('https://www.youtube.com/watch?v='.length, url.length);
  const customRenderThumb = children =>
    children.map(item => {
      const videoId = getVideoId(item.props.url);
      return <img key={videoId} src={getVideoThumb(videoId)} />;
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