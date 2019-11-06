import 'core-js'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'

const gee = async function() {
  await Promise.resolve()
  return 'hello'
}

gee()

import './styles.scss'
const App = () => {
  return (
    <>
      <h1>Hello from React</h1>
      <div>Hello there</div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
