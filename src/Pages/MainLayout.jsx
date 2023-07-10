import React, { useContext } from 'react'
import UserContext from '../UserContext'
import DarkMode from '../DarkMode'
import { Outlet } from 'react-router-dom'

function MainLayout() {

    const {isDarkMode} = useContext(UserContext)
  return (
    <div className={`${isDarkMode ? "bg-black" : "" } font-serif flex justify-center items-center flex-col p-4 w-full`}>
        <DarkMode/>
        <Outlet/>
    </div>
  )
}

export default MainLayout