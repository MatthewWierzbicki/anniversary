import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { FadeText } from '../FadeText'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    zIndex: 1,
  },
}))

const script = [
  'january 25th 2020',
  'has it really been that long?',
  'happy 2 years',
]
interface IntroScriptProps {
  onComplete: () => void
}

export const IntroScript = ({ onComplete }: IntroScriptProps) => {
  const classes = useStyles()
  const [scriptIndex, setScriptIndex] = useState(0)
  useEffect(() => {
    if (scriptIndex > script.length) onComplete()
  }, [onComplete, scriptIndex])
  return (
    <>
      <Box className={classes.root}>
        <FadeText
          text={script[scriptIndex]}
          onComplete={() => {
            setScriptIndex(scriptIndex + 1)
            console.log('complete')
          }}
        />
      </Box>
    </>
  )
}
