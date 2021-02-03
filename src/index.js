/*zaimportowanie reacta*/
import React from 'react'
import ReactDOM from 'react-dom'
/*import z zakładki App*/
import App from './App'

/*import z material UI*/
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
/*funkcja ReactDOM - zapakowanie aplikacji w Reacta*/
ReactDOM.render(
  /*import tematu z UI*/
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)