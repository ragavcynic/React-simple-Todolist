import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseLine from "@mui/material/CssBaseline"
import './App.css'
import { Css } from '@mui/icons-material'
import TodoList from './TodoList'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>
      <CssBaseLine/>
  
      <TodoList/>
    </>
  )
}

export default App
