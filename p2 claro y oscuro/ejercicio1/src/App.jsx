import { useState } from 'react'
import './App.css'

import ListaDeNotas from './ListaDeNotas'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
  <>

      <ThemeProvider>
        <ListaDeNotas />
      </ThemeProvider>

  </>  
  )
}

export default App
