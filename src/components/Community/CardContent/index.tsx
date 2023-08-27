import React from 'react'
import './CardContent.css'
import heart from '../../../assets/heart.svg'
import comments from '../../../assets/comments.svg'
import User from '../../User'


type props = {
  nameProject: string,
  projectDescription: string,
}
function CardContent({nameProject, projectDescription}: props) {
  return (
    <div className='card-content'>
       <h1>{nameProject}</h1>
       <p>{projectDescription}</p>
       <div className='mt-6 flex justify-between items-center'>
          <div className='flex'>
              <div className='flex items-center'>
                 <div className='px-3 py-1.5 hover:bg-bgInput rounded-2xl cursor-pointer'>
                   <img src={comments} />
                 </div>
                 <span className='ml-2.5'>9</span>
              </div>

              <div className='flex ml-4 items-center'>
                 <div className='px-3 py-1.5 hover:bg-bgInput rounded-2xl cursor-pointer'>
                   <img src={heart} />
                 </div>
                 <span className='ml-2.5'>9</span>
              </div>
          </div>
          <User/>
       </div>
    </div>
  )
}

export default CardContent
