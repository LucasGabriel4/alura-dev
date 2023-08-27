import React from 'react'
import PostProject from '../PostProject'
import './CodeEditor.css'
import Editor from '../Editor'
import hljs from 'highlight.js';
import { useContext } from '../Hooks/UseContext';



function CodeEditor() {
const {language, codeElement,projects , setProjects} = useContext()

  function addHighlight(){
    if(language === '') return
     if(codeElement.current){
      hljs.highlightElement(codeElement.current)
     } 
    
  } 

  
  type Projectprops = {
    nameProject: string,
    projectDescription: string,
    codeText: string | null | undefined
    colorEditor: string
 }


  function saveNewProject(project: Projectprops){
      setProjects([...projects, project])
  }
 


  return (
    <section className='Code-Editor-container'>
      <div className='Code-Editor'>
         <Editor/>
        <button onClick={addHighlight}className='btn-highlight'>Visualizar com o highlight</button>
      </div>
      
       <PostProject newProject={(project: Projectprops) =>  saveNewProject(project)}/>
    </section>
  )
}

export default CodeEditor
