import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FadeText } from '../FadeText'

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    zIndex: 1,
  },
}))

const script: string[] = [
  'Hi there',
  `I'm here to tell you a story`,
  `About a boy and girl who fell in love`,
  'It goes a little like this',
]
interface IntroScriptProps {
  onComplete: () => void
}
// Space song beach house playing
export const IntroScript = ({ onComplete }: IntroScriptProps) => {
  const classes = useStyles()
  const [scriptIndex, setScriptIndex] = useState(0)
  useEffect(() => {
    if (scriptIndex === script.length) onComplete()
  }, [onComplete, scriptIndex])
  return (
    <>
      <Box className={classes.root}>
        {/* <CountUp /> */}
        <FadeText
          child={script[scriptIndex]}
          onComplete={() => {
            setScriptIndex(scriptIndex + 1)
          }}
        />
      </Box>
    </>
  )
}
