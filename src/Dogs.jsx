import React, { useContext, useEffect, useState } from 'react'
import { getDogs } from './ForDogs'
import UserContext from './UserContext'

export function Dogs({ dogBreeds }) {
    const [dogs, setDogs] = useState([])
    const {isDarkMode} = useContext(UserContext)


    useEffect(() => {
        getDogs(12, dogBreeds).then((response) => {
            setDogs(response.data)
        })
    }, [dogBreeds])

    return (
        <div className="flex flex-col justify-center items-cente p-4 gap-[50px]">

            <div className="flex text-center flex-col  bg-green-700 justify-center items-center flex-wrap rounded-xl">
                <div className={`${isDarkMode ? "text-black" : "text-white"} text-[50px]`}>

                    Dogs
                </div>
                <div className='flex flex-wrap'>

                    {

                        dogs.map((el) => {
                            return (
                                <div className="flex justify-center items-center  p-2 flex-wrap" key={el.id}>
                                    <img src={el.url} className="w-[300px]" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

