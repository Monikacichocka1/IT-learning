import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    color: 'white'
  }
}))


const Appbar = props => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography variant='h4' className={classes.text}>
        IT Learning
      </Typography>
    </Paper>
  )
}

export default Appbar