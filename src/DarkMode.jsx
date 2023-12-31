import React, { useContext } from 'react'
import UserContext from './UserContext';
import { Link } from 'react-router-dom';

function DarkMode() {
    const { isDarkMode, setIsDarkMode } = useContext(UserContext)

    function poxeluHamar() {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className='rounded-xl flex  gap-4 justify-center bg-green-700 m-2 p-8 border-5 border-red-700 w-full'>
            <div className={`${isDarkMode ? "text-black" : "text-white"} flex flex-col  justify-start w-full`}>
                <h2 className='text-[30px]'>Hi!</h2>
                <p>Choose Your favorite Dogs</p>
            </div>
            <div className={`p-4 flex gap-[10px] text-white`}>
                <Link to={``}>Main Page</Link>
                <Link to={`/Fav`}>Favorites</Link>
                <Link to={`/todos`}>Todos</Link>
            </div>
            <div className='bg-inherit w-[100px] cursor-pointer'>

                <img src={isDarkMode ? "/4883637.png" : "/6559240.png"} onClick={poxeluHamar} />
            </div>
        </div>
    )
}

export default DarkMode