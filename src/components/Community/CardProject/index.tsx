import React from 'react'
import './CardProject.css'
import Editor from '../../Editor'
import CardContent from '../CardContent'


type props = {
  nameProject: string,
  projectDescription: string,
  codeText: string | null | undefined,
  colorEditor: string
}
function CardProject({nameProject, projectDescription, codeText, colorEditor}: props) {
  return (
    <div className='Card-project'>
        <Editor colorEditor={colorEditor} codeText={codeText}/>
        <CardContent nameProject={nameProject} projectDescription={projectDescription}/>
    </div>
  )
}

export default CardProject
