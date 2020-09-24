import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import Editor from './Editor'

test('renders learn react link', () => {
  const { getByTestId } = render(<App />)
  
  const iframe = getByTestId('1')

  expect(iframe).toBeInTheDocument()
  expect(render(<Editor />).container).toBeInTheDocument()
})
