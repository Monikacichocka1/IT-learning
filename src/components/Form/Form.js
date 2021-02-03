import React from 'react'

import basicValidates from './basicValidates'

import { TextField } from '@material-ui/core'

class Form extends React.Component {
  constructor(props) {
    super()

    const values = props.inputs.reduce((red, el) => {
      return Object.assign(red, { [el.key]: '' })
    }, {})

    const inputs = props.inputs.map(el => {
      if (!el.key) {
        console.error('YOU DIDNT ADD KEY TO INPUT!! ADD IT!')
        el.key = Math.random().toString(36).substring(2, 15)
      }
      if (typeof el.props === 'object') {
        delete el.props.value
        delete el.props.onChange
      } else {
        el.props = {}
      }

      if (typeof el.validate === 'string') {
        el.validate = basicValidates(el.validate)
      }

      return el
    })

    const eachInputProps = props.eachInputProps || {}
    delete eachInputProps.value
    delete eachInputProps.onChange

    this.state = {
      inputs,
      values,
      errors: {},
      eachInputProps
    }
  }

  validateInputs = () => {
    const errors = {}
    const values = this.state.values
    this.state.inputs.forEach(el => {
      if (typeof el.validate === 'function') {
        const isError = el.validate(values[el.key], values)
        if (isError === true) {
          errors[el.key] = true
        }
        if (typeof isError === 'object') {
          if (isError.isError === true) {
            errors[el.key] = true
          }
          values[el.key] = isError.newValue
        }
      }
    })
    this.setState({ errors, values })
    return Object.values(errors).includes(true)
  }

  submit = (callback) => {
    let canCallCallback = true
    if (this.props.validateOnSubmit) {
      canCallCallback = !this.validateInputs()
    }
    if (canCallCallback) {
      callback(this.state.values)
      return true
    }
  }

  clean = () => {
    const errors = {}
    const values = Object.keys(this.state.values).reduce((red, el) => {
      return Object.assign(red, { [el]: '' })
    }, {})

    this.setState({ errors, values })
  }

  getInputsValues = () => this.state.values

  onChange = (key, validate, alwaysValidate, alwaysAllValidate, dontValidateIfBug, valueFunc) => evt => {
    let value = typeof valueFunc === 'function' ? valueFunc(evt.target.value) : evt.target.value

    if (alwaysAllValidate) {
      this.setState({ values: { ...this.state.values, [key]: value } }, this.validateInputs)
      return
    }

    const errors = {}
    if (alwaysValidate || (this.state.errors[key] && !dontValidateIfBug)) {
      const isError = validate(value, this.state.values)
      errors[key] = isError
      if (typeof isError === 'object') {
        errors[key] = isError.isError
        value = isError.newValue
      }
    }
    this.setState({ values: { ...this.state.values, [key]: value }, errors: { ...this.state.errors, ...errors } })
  }

  render() {
    return (
      <form
        onSubmit={evt => evt.preventDefault()}
        {...this.props.formProps}
      >
        {this.state.inputs.map(el => (
          <TextField
            key={el.key}
            value={this.state.values[el.key]}
            onChange={this.onChange(el.key, el.validate, el.alwaysValidate, el.alwaysAllValidate, el.dontValidateIfBug, el.valueFunc)}
            error={this.state.errors[el.key]}
            helperText={this.state.errors[el.key] ? el.errorText : el.helperText}
            {...this.state.eachInputProps}
            {...el.props}
            style={{ ...this.state.eachInputProps.style, ...el.props.style }}
          />
        ))}
      </form>
    )
  }
}

export default Form