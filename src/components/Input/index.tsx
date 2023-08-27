import React from 'react'
import './Input.css'


type Input = React.ComponentProps<'input'> & {
    placeholder?: string,
    width?: string,
    top?: string,
    bottom?: string,
    nameProject?: string,
    setNameProject?: React.Dispatch<React.SetStateAction<string>>
}


function Input({placeholder, width, top, bottom, nameProject, setNameProject}: Input) {

  return (
    <input 
    className='InputComponent'
    placeholder={placeholder} 
    style={{width: width, paddingTop: top, paddingBottom: bottom}} 
    value={nameProject}
    onChange={({target}) => setNameProject && setNameProject(target.value)}/>
  )
}

export default Input
