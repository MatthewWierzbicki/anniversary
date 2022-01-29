import React, { useEffect } from 'react'
import { makeStyles, Box, Button } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
} from 'assets/images'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '80vw',
  },
  pane: {
    backgroundColor: '#000',
  },
  image: {
    height: '50vh',
  },
  button: {
    justifySelf: 'center',
    margin: 'auto',
    zIndex: 2,
    color: '#FFF',
    textTransform: 'lowercase',
  },
}))
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
]
interface SlideShowProps {
  onComplete: () => void
}
export const SlideShow = ({ onComplete }: SlideShowProps) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Carousel
        autoPlay
        stopAutoPlayOnHover={false}
        navButtonsAlwaysInvisible
        interval={4000}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            className={classes.pane}
            py={2}
            border="30px solid #FFF"
          >
            <img
              className={classes.image}
              src={image}
              alt={`matt and sylvia ${index}`}
            />
          </Box>
        ))}
      </Carousel>
      <Box display="flex">
        <Button className={classes.button} onClick={onComplete} variant="text">
          Continue
        </Button>
      </Box>
    </Box>
  )
}
