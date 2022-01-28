import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Button, makeStyles, Box } from '@material-ui/core'
import { IntroScript } from 'app/components/IntroScript'
import { ParticlesWrapper } from 'app/components/ParticlesWrapper/Loadable'
import Carousel from 'react-material-ui-carousel'
import { useAudio } from 'utils/hooks/useAudio'
// import space_song from 'audio/space_song.mp3'
enum Stage {
  Welcome,
  Script,
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
}))

export const HomePage = () => {
  const classes = useStyles()
  const [stage, setStage] = useState<Stage>(Stage.Welcome)
  // const { start, stop } = useAudio(space_song)

  const handleWelcome = () => {
    setStage(Stage.Script)
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
            setStage(Stage.Outro)
          }}
        />
      )}
      {stage === Stage.Outro && (
        <Carousel>
          <img src="/static/images/outro/1.jpg" alt="outro" />
        </Carousel>
      )}
      <ParticlesWrapper />
    </>
  )
}
