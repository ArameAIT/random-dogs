import React, { useState } from 'react'
import { Breeds } from '../Breeds'
import { Dogs } from '../Dogs'


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