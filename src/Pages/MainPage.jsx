import React, { useState } from 'react'
import DarkMode from '../DarkMode'
import { Breeds } from '../Breeds'
import { Dogs } from '../Dogs'
import UserContext from '../UserContext'

function MainPage() {
    const [forbreeds, setForBreeds] = useState([])


    return (

        <div >
            <Breeds yntrvacBreeds={setForBreeds} />
            <Dogs dogBreeds={forbreeds} />
        </div>
    )
}

export default MainPage