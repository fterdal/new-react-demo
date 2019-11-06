// These two imports tell Parcel to compile async functions correctly
import 'core-js'
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'

// This async function won't work with default Parcel
// Importing core-js and regenerator-runtime/runtime
// at the top is necessary
const gee = async function() {
  await Promise.resolve()
  return 'hello'
}

console.log(gee())

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
