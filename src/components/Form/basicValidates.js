const minLength = length => {
  length = Number(length)
  return value => {
    let isError = false
    if (value.length < length) {
      isError = true
    }
    return isError
  }
}

const email = value => {
  let isError = false
  if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    isError = true
  }
  return isError
}

const sameAs = key => (value, allValues) => {
  let isError = false
  if (value !== allValues[key]) {
    isError = true
  }

  return isError
}

export default (string) => {
  const validateBy = string.split(':')

  switch (validateBy[0]) {
    case 'minLength':
      return minLength(validateBy[1])
    case 'email':
      return email
    case 'sameAs':
      return sameAs(validateBy[1])
    default:
      console.log(`"${string}" IS WRONG VALIDATE TYPE !!! THIS INPUT WONT BE VALIDATE`)
      return () => false
  }
}
