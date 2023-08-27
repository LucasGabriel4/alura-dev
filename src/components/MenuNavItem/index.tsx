import React from 'react'
import {NavLink} from 'react-router-dom' 
import tagcode from '../../assets/tagcode.svg'
import community from '../../assets/community.svg'
import './MenuNavItem.css'

function MenuNavItem() {
  return (
    <>
        <li className='nav-item'>
              <div className='flex items-center'>
                  <NavLink to='/' end>
                      <div className='nav-item-icon'>
                          <img src={tagcode} />
                      </div>
                  </NavLink>
                  <NavLink to='/' end>
                      <h3>Editor de Código</h3>
                  </NavLink>
              </div>
        </li>

          <li className='nav-item'>
                <div className='flex items-center'>
                      <NavLink to='community'>
                            <div className='nav-item-icon'>
                               <img src={community} />
                            </div>
                        </NavLink>
                        <NavLink to='community'>
                            <h3>Comunidade</h3>
                        </NavLink>
                </div>
          </li>
    </>
    
  )
}

export default MenuNavItem
