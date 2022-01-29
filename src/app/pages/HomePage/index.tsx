import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Button, makeStyles, Box } from '@material-ui/core'
import { IntroScript } from 'app/components/IntroScript'
import { ParticlesWrapper } from 'app/components/ParticlesWrapper/Loadable'
// import Carousel from 'react-material-ui-carousel'
import { useAudio } from 'utils/hooks/useAudio'
import space_song from 'assets/audio/space_song.mp3'
import image1 from 'assets/images/image1.jpg'
import { SlideShow } from 'app/components/Slideshow'
import { CountUp } from 'app/components/CountUp'
enum Stage {
  Welcome,
  Script,
  SlideShow,
  Outro,
}
const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    zIndex: 1,
  },
  button: {
    zIndex: 2,
    color: '#FFF',
    backgroundColor: '#5e5d5c82',
    textTransform: 'lowercase',
  },
  image: {
    height: '50vh',
  },
}))

export const HomePage = () => {
  const classes = useStyles()
  const [stage, setStage] = useState<Stage>(Stage.Outro)
  const { playing, start, stop } = useAudio(space_song)

  const handleWelcome = () => {
    console.log(space_song)
    console.log({ playing })

    setStage(Stage.Script)
    start()
  }
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="sylvia" />
      </Helmet>
      {stage === Stage.Welcome && (
        <Box className={classes.root} display="flex" justifyContent="center">
          <Button
            size="large"
            variant="outlined"
            className={classes.button}
            onClick={handleWelcome}
          >
            Happy Anniversary Sylvia
          </Button>
        </Box>
      )}
      {stage === Stage.Script && (
        <IntroScript
          onComplete={() => {
            console.log('complete')
            setStage(Stage.SlideShow)
          }}
        />
      )}
      {stage === Stage.SlideShow && (
        <SlideShow
          onComplete={() => {
            stop()
            setStage(Stage.Outro)
          }}
        />
      )}
      {stage === Stage.Outro && <CountUp />}
      <ParticlesWrapper />
    </>
  )
}
