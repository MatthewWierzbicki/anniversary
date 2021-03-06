import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

const useStyles = makeStyles(({ palette }) => ({
  subtitle: {
    color: palette.common.white,
    textAlign: 'center',
  },
  fadeIn: {
    transition: 'opacity 1s ease',
  },
  fadeOut: {
    opacity: 0,
    transition: 'opacity 1s ease',
  },
}))
enum FadeState {
  FADE_IN,
  FADE_OUT,
}

interface FadeTextProps {
  child: string
  onComplete: () => void
}
export const FadeText = ({ child, onComplete }: FadeTextProps) => {
  const classes = useStyles()
  const [fade, setFade] = useState<FadeState>(FadeState.FADE_IN)
  useEffect(() => {
    const timeout = setInterval(
      () => {
        if (fade === FadeState.FADE_IN) {
          setFade(FadeState.FADE_OUT)
        } else {
          setFade(FadeState.FADE_IN)
        }
      },
      fade === FadeState.FADE_IN ? 2000 : 4000,
    )
    return () => {
      clearInterval(timeout)
      if (fade === FadeState.FADE_OUT) {
        setTimeout(() => {
          onComplete()
        }, 2000)
      }
    }
  }, [fade, onComplete])

  const fadeClasses = classnames(classes.subtitle, {
    [classes.fadeOut]: fade === FadeState.FADE_IN,
    [classes.fadeIn]: fade === FadeState.FADE_OUT,
  })
  return (
    <>
      <Typography className={fadeClasses} variant="h2">
        {child}
      </Typography>
    </>
  )
}
