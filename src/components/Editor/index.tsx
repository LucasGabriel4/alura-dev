import React from 'react'
import './Editor.css'
import Ellipse_1 from '../../assets/Ellipse 1.svg'
import Ellipse_2 from '../../assets/Ellipse 2.svg'
import Ellipse_3 from '../../assets/Ellipse 3.svg'
import hljs from 'highlight.js'
import "highlight.js/styles/tokyo-night-dark.css"
import { useContext } from '../Hooks/UseContext'




type props = {
  colorEditor?: string, 
  codeText?: string | null | undefined
}

function Editor({colorEditor, codeText}: props) {
  const {color,language, codeElement} = useContext()



  React.useEffect(() => {
   hljs.highlightAll()
  },[])

  return (
    <div className='bg-code-editor' style={{backgroundColor:  colorEditor ? colorEditor : color}}>
          <div className='icons-editor'>
             <img  src={Ellipse_1} />
             <img  src={Ellipse_2} />
             <img  src={Ellipse_3} />
          </div>
 
          <div className='Editor'>
              <pre>
              <code  ref={codeElement}
                className={`preview hljs ${language}`} 
                contentEditable='true'>
                  {codeText}
                </code>
              </pre>
              
               
          </div>
           
        
    </div>
  )
}

export default Editor
