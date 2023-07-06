import { useState } from 'react'
import './App.css'
import { Breeds } from './Breeds'
import { Dogs } from './Dogs'
import UserContext from './UserContext'
import DarkMode from './DarkMode'

function App() {
  const [forbreeds, setForBreeds] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)

  const forContext = {
    isDarkMode,
    setIsDarkMode
  }

  return (
    <UserContext.Provider value={forContext}>
      <div className={`${isDarkMode ? "bg-black" : "" } font-serif flex justify-center items-center flex-col p-4 w-full`} >
        <DarkMode/>
        <Breeds yntrvacBreeds={setForBreeds} />
        <Dogs dogBreeds={forbreeds} />
      </div>
    </UserContext.Provider>
  )
}

export default App
