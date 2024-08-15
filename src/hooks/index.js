import { useState } from 'react'

export const useField = name => {
  const [value, setValue] = useState('')

  // Purpose is to abstract away the state changing of the inputs
  const onChange = event => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    name,
    value,
    onChange,
    reset,
  }
}
