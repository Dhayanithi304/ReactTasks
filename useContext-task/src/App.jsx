import { useState } from 'react'
import './App.css'
import { Provider } from './Context'
import Card from './Card'
import Header from './Header'

function App() {

  return (
    <Provider>
      <Header />
      <Card />
    </Provider>
  )
}

export default App
