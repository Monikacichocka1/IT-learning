import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Appbar from './views/Appbar'
import Dashboard from './views/Dashboard'
import SaveForm from './views/SaveForm'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '30px auto',
    maxWidth: 1000
  }
}))


const App = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Appbar />
      <Router>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/zapisz-sie' component={SaveForm} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  )
}

export default App