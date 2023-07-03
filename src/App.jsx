import { useState } from 'react'
import './App.css'
import { Breeds } from './Breeds'
import { Dogs} from './Dogs'

function App() {
  const [forbreeds, setForBreeds] = useState([])

  function forBreeds(yntrvacBreeds){
    setForBreeds(yntrvacBreeds)
  }
  
  return (
    <div className="font-serif">
      <Breeds yntrvacBreeds={forBreeds}/>
      <Dogs dogBreeds={forbreeds}/>
    </div>
  )
}

export default App
