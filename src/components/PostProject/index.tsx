import React from 'react'
import Input from '../Input'
import './PostProject.css'
import { useContext } from '../Hooks/UseContext'



type props = {
   newProject: (project: { 
   nameProject: string, 
   projectDescription: string, 
   codeText: string | null | undefined,
   colorEditor: string
   }) => void
  
}


function PostProject({newProject}: props) {
  const languages = ['Javascript', 'html', 'css']
  const {
   color, 
   setColor, 
   setNameProject, 
   nameProject , 
   projectDescription, 
   setProjectDescription,
   language,
   setLanguage,
   codeElement
   } = useContext()
   

  

  function saveProject(){
    if(nameProject === '' || projectDescription === '') return
      newProject({
         nameProject,
         projectDescription,
         codeText: codeElement.current?.textContent,
         colorEditor: color
      })

   
  }

  return (
    <div className='Post-Project'>
        <h1 className='your-project'>SEU PROJETO</h1>
        <Input placeholder='Nome do seu projeto' width='100%' top='16px' bottom='16px' nameProject={nameProject} setNameProject={setNameProject}/>
        <textarea  
        placeholder='Descrição do seu projeto' 
        value={projectDescription}
        onChange={({target}) => setProjectDescription(target.value)}>
       </textarea> 
        <h1 className='customization'>Personalização</h1>

        <div className='flex-container'> 
            <select value={language} onChange={({target}) => setLanguage(target.value)} className='block w-full rounded-lg bg-bgInput hover:bg-bgInputHover py-5 outline-none pl-2 mb-4'>
            <option value={''}>Selecione</option>
            {languages.map((language) => <option key={language} value={language}>{language}</option>)}
            </select>
            <input className='input-color' type='color' value={color} onChange={({target}) => setColor(target.value)}/>
         </div>
          <button onClick={saveProject} className='btn-save-project'>Salvar Projeto</button>
   </div>
  ) 
}

export default PostProject
