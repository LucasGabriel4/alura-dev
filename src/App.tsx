import React from 'react'
import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import CodeEditor from './components/CodeEditor'
import Menu from './components/MenuDesktop'
import Community from './components/Community'
import GlobalStorage from './components/Hooks/UseContext'

function App() {

  return (
    <BrowserRouter>
      <GlobalStorage>
            <Header />
            <div className='grid-container'>
                <Menu />
                <Routes>
                    <Route path='/' element={<CodeEditor/>}></Route>
                    <Route path='community' element={<Community />}></Route>
                </Routes>
            </div>
      </GlobalStorage>
    </BrowserRouter>
  )
}

export default App
