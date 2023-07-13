// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Header  from './components/Header/Header'
import ProjectGroup from './components/projects/ProjectGroup'
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <>
    <Header />
    <main>
        <AboutMe />
      <ProjectGroup />
    </main>
    <footer>Meu primeiro projeto usando React e TypeScript</footer>
    </>
  )
}

export default App
