import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormCustomHook } from './02-useEffect/FormCustomHook'
import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
// import { HooksApp } from './HooksApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FocusScreen />
  /* </React.StrictMode> */
)
