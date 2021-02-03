import React from 'react'
import { Paper, Button, Typography } from '@material-ui/core'

import img from '../assets/learnign.jpg'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: '100%'
  },
  button: {
    marginTop: 30,
    marginBottom: 50
  },
  img: {
    maxWidth: '100%'
  }

}))


const Dashboard = props => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography align='center' variant='h4' gutterBottom>
        Witaj na naszej stronie!

      </Typography>
      <Typography align='center' variant='h6' gutterBottom>
        Już dzisiaj zacznij swoją przygodę z programowaniem. Skorzystaj z opieki naszych specjalistów w dziedzinach nauki języków programowania. Wypełnij krótki formularz, a my odezwiemy się do Ciebie i zaproponujemy odpowiedni kurs.
      </Typography>
      <Button
        className={classes.button}
        variant='outlined'
        color='primary'
        onClick={() => props.history.push('/zapisz-sie')}
      >
        Zapisz się
           </Button>
      <img
        alt='learning'
        src={img}
        className={classes.img}
      />
    </Paper>
  )
}

export default Dashboard