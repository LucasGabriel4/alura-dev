import React from 'react'
import './MenuDesktop.css'
import { NavLink } from 'react-router-dom'
import MenuNavItem from '../MenuNavItem'

function Menu() {
  return (
    <nav className='Menu-desktop'>
        <h1>MENU</h1>
        <ul>
             <MenuNavItem/>
        </ul>
    </nav>
  )
}

export default Menu
