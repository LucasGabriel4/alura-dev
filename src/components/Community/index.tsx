import React from 'react'
import './Community.css'
import CardProject from './CardProject'
import { useContext } from '../Hooks/UseContext'

function Community() {
  const {projects} = useContext()

  return (
    <div className='Community'>
       {projects.map(({nameProject, projectDescription, codeText, colorEditor}) => (
         <CardProject
         key={nameProject} 
         nameProject={nameProject} 
         projectDescription={projectDescription} 
         codeText={codeText}
         colorEditor={colorEditor} />
       ))}
    </div>
  )
}

export default Community
