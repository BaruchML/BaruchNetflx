import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MoviesListContainer from './components/Movies/MoviesListContainer'
import SearchContainer from './components/Search/SearchContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<Navbar/>
<SearchContainer/>
<MoviesListContainer/>
    </>
  )
}

export default App
