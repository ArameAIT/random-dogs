import React, { useState,useEffect, useContext } from 'react'
import { getDogsBreeds } from './ForDogs'
import UserContext from './UserContext'

export function Breeds({yntrvacBreeds}){
    const [dogBreed, setDogBreed] = useState([])
    const [selectedBreeds, setSelectedBreeds] = useState([])

    const {isDarkMode} = useContext(UserContext)


    useEffect(() => {
        const randomPage = Math.round(Math.random() * 34)
        getDogsBreeds(6, randomPage).then((resp) => {
            setDogBreed(resp.data);
        })
    }, [])

    useEffect(()=>{
        yntrvacBreeds(selectedBreeds)
    },[selectedBreeds])

    function isThereBreed(selectedBreed){
        return selectedBreeds.includes(selectedBreed)
    }

    function forSelectedBreeds(id){
        if(isThereBreed(id)) {
            setSelectedBreeds(prev => prev.filter(el => el !== id))
        }else{
            setSelectedBreeds(prev => [...prev, id])
        }
    } 


    return(
        <div className="text-black rounded-xl flex  gap-4 justify-center bg-green-700 p-8 border-5 w-full">
        {
            dogBreed.map((el) => {
                return (
                    <div onClick={() => forSelectedBreeds(el.id)} className={`${selectedBreeds.includes(el.id) ?  "bg-white text-black" : ""} ${isDarkMode ? " border-black text-black" : ""} p-3 border-4 rounded-xl text-white transition hover:opacity-20 hover:cursor-pointer`} key={el.id}>
                        <p>{el.name}</p>
                    </div>
                )
            })
        }

    </div>
    )
}