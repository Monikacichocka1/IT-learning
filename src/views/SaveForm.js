import React from 'react'
import { Paper, Button, TextField, MenuItem, Snackbar, Typography, SnackbarContent } from '@material-ui/core'

import Form from '../components/Form'

const styles = {
  root: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  input: {
    marginBottom: 20,
    width: 230
  },
  form: {
    display: 'flex', flexDirection: 'column'
  },
}

const telAllowCharacters = ' ()+-0123456789'.split('')

class SaveForm extends React.Component {
  state = {
    select: '',
    selectItems: ['Java', 'Python', 'C++', 'C#'],
    isSelectError: false,
    description: '',
    openSnackbar: false,
  }

  inputs = [
    {
      key: 'firstname', validate: 'minLength:3', errorText: 'Minimum 3 znaki', props: { label: 'Imię' },
      valueFunc: value => value.length > 15 ? value.substring(0, value.length - 1) : value
    },
    {
      key: 'lastname', validate: 'minLength:3', errorText: 'Minimum 3 znaki', props: { label: 'Nazwisko' },
      valueFunc: value => value.length > 25 ? value.substring(0, value.length - 1) : value
    },
    { key: 'email', validate: 'email', errorText: 'Wprowadź prawidłowy adres e-mail', props: { label: 'Email' } },
    {
      key: 'tel',
      validate: 'minLength:7',
      valueFunc: value => {
        if ((!value || telAllowCharacters.includes(value[value.length - 1])) && value.length < 13) {
          return value
        } else {
          return value.substring(0, value.length - 1)
        }
      },
      errorText: 'Wprowadź prawidłowy numer telefonu',
      props: { label: 'Numer telefonu' }
    }
  ]

  submit = () => {
    const isSelectError = !this.state.select
    const isError = this.form.validateInputs()

    if (!isError && !isSelectError) {
      this.form.clean()
      this.setState({
        select: '',
        description: '',
        openSnackbar: true
      })
    } else {
      this.setState({ isSelectError })
    }
  }

  render() {

    return (
      <Paper style={styles.root}>
        <Typography variant='h4' gutterBottom>Zapisz się</Typography>
        <Form
          ref={ref => this.form = ref}
          inputs={this.inputs}
          eachInputProps={{
            variant: 'outlined',
            style: styles.input
          }}
          formProps={{ style: styles.form }}
        />
        <TextField
          value={this.state.select}
          style={styles.input}
          onChange={evt => {
            this.setState({ select: evt.target.value })
            evt.target.value && this.state.isSelectError && this.setState({ isSelectError: false })
          }}
          label='Wybierz kurs'
          variant='outlined'
          select
          error={this.state.isSelectError}
        >
          {this.state.selectItems.map(el => (
            <MenuItem
              key={el}
              value={el}
            >{el}</MenuItem>
          ))}

        </TextField>
        <TextField
          variant='outlined'
          style={styles.input}
          label='Uwagi'
          value={this.state.description}
          onChange={evt => this.setState({ description: evt.target.value })}
          multiline
          rows={3}
        />
        <Button
          variant='outlined'
          color='primary'
          onClick={this.submit}
        >
          Zapisz
        </Button>
        <Snackbar
          style={{ backgroundColor: 'green' }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.openSnackbar}
          autoHideDuration={7000}
          onClose={(evt, reason) => reason !== 'clickaway' && this.setState({ openSnackbar: false })}
        >
          <SnackbarContent
            style={{ backgroundColor: 'green' }}
            message='Zapisaliśmy Twoje dane! Wkrótce dostaniesz wiadomość z propozycją szkolenia.'
          />

        </Snackbar>
      </Paper >
    )
  }
}

export default SaveForm