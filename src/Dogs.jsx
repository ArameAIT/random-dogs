import React, { useEffect, useState } from 'react'
import { getDogs} from './ForDogs'

export function Dogs({dogBreeds}) {
    const [dogs, setDogs] = useState([])

    useEffect(() => {
        console.log("Dogs.js", dogBreeds);
        getDogs(9, dogBreeds).then((response) => {
            setDogs(response.data)
        })
    }, [dogBreeds])

    return (
        <div className="flex flex-col justify-center items-cente p-4 gap-[50px]">
           
            <div className="flex  bg-green-700 justify-center items-center flex-wrap rounded-xl">
                {

                    dogs.map((el) => {
                        return (
                            <div className="  p-2 flex-wrap" key={el.id}>
                                <img src={el.url} className="w-[300px]" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

