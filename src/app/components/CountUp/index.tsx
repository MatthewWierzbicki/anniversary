import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useCountUp } from 'utils/hooks/useCountUp'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    zIndex: 1,
  },
  subtitle: {
    color: palette.common.white,
    textAlign: 'center',
  },
}))

export const CountUp = () => {
  const classes = useStyles()
  const { difference } = useCountUp()
  console.log({ difference })
  return (
    <Box className={classes.root}>
      <Typography className={classes.subtitle} variant="h2">
        We've been together for
      </Typography>
      <Typography className={classes.subtitle} variant="h2">
        {difference}
      </Typography>
    </Box>
  )
}
