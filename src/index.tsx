import React from 'react'
import ReactDOM from 'react-dom'

// import { App } from './App'
import Demo from './__demo__'
import reportWebVitals from './reportWebVitals'

import './index.css'

const app = (
  <React.StrictMode>
    {/* <App /> */}
    <Demo />
  </React.StrictMode>
)

const path = document.getElementById('root')

ReactDOM.render(app, path)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
