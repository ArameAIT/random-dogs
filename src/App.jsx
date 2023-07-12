import { useState } from 'react'
import './App.css'
import { Breeds } from './Breeds'
import { Dogs } from './Dogs'
import UserContext from './UserContext'
import DarkMode from './DarkMode'

import Favorites from './Favorites'
import Pages from './Pages/Pages'



function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)


  const forContext = {
    isDarkMode,
    setIsDarkMode
  }

  return (
    <>
      <UserContext.Provider value={forContext}>
        <Pages />
      </UserContext.Provider>
    </>
  )
}

export default App
