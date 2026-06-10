import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import data from './data/videojuegos.js'
import TablaVideojuegos from './components/TablaVideojuegos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <TablaVideojuegos videojuegos={data} />
     </div>
    </>
  )
}

export default App
