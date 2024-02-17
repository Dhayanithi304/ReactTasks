import { useState } from 'react'
import './App.css'
import { Provider } from './Context'
import Card from './Card'
import CardsGrp from './CardsGrp'

function App() {

  return (
    <Provider>
      <Card />
    </Provider>
  )
}

export default App
