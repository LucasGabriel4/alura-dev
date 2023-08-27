import React from 'react'
import './MenuMobile.css'
import Menu from '../../assets/menuHamburguer.svg'
import MenuNavItem from '../MenuNavItem'
import User from '../User'
import search from '../../assets/search.svg'


function MenuMobile() {
  const [menu, setMenu] = React.useState(false)

  
  return (
    <nav className='menu-mobile'>
      <div className='flex gap-[34px]'>
          <img className='search' src={search} />
         
          <div className={`menu-hamburguer  ${menu && 'active'}`}>
              <img src={Menu} onClick={() => setMenu(!menu)}/>
          </div>
      </div>
     
      
        <ul className={menu ? 'active' : ''}>
            <MenuNavItem />
            <div className='w-[206px] h-[1px] bg-bgInput  mb-6'></div>
            <User/>
        </ul>
      
    </nav>
  )
}

export default MenuMobile
