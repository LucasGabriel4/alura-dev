import React from 'react'


  
type propsContext = {
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    nameProject: string,
    setNameProject: React.Dispatch<React.SetStateAction<string>>,
    projectDescription: string,
    setProjectDescription: React.Dispatch<React.SetStateAction<string>>,
    language: string,
    setLanguage: React.Dispatch<React.SetStateAction<string>>,
    codeElement: {
        current: HTMLElement | null
    },
    projects: never[] | { nameProject: string,
        projectDescription: string,
        codeText: string | null | undefined,
        colorEditor: string
    }[],
    setProjects: React.Dispatch<React.SetStateAction<never[] | {nameProject: string,
        projectDescription: string,
        codeText: string | null | undefined,
        colorEditor: string
    }[]>>
}


 const GlobalContext = React.createContext<propsContext | null>(null)

export function useContext(){
    const context = React.useContext(GlobalContext)
    if(!context) throw new Error('useContext deve estar dentro do Provider')
    return context
}



export default function GlobalStorage({children}: React.PropsWithChildren){
    const [color, setColor] = React.useState('')
    const [nameProject, setNameProject] = React.useState('')
    const [projectDescription, setProjectDescription] = React.useState('')
    const [language , setLanguage] = React.useState('')
    const codeElement = React.useRef<HTMLElement>(null)
    const [projects , setProjects] = React.useState<never[] | {nameProject: string,
        projectDescription: string,
        codeText: string | null | undefined,
        colorEditor: string
    }[]>([])

 
    return (
      <GlobalContext.Provider 
        value={{color, 
        setColor, 
        nameProject,
        setNameProject, 
        projectDescription, 
        setProjectDescription,
        language,
        setLanguage,
        codeElement,
        projects,
        setProjects}}>
         {children}
      </GlobalContext.Provider>

    )
}