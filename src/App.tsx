// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Header  from './components/Header/Header'
import CreateProjectGroup from './components/projects/CreateProjectGroup'
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  // <iframe src="./projects/learning-to-write/index.html"></iframe>
  // <iframe src="src/projects/yt-list/" width='100%'></iframe>
  // <a href="./src/projects/pixel-art/">pixel art</a>

  return (
    <>
    <Header />
    <br /><br />
    <main>
        <AboutMe />
      <CreateProjectGroup />
    </main>
    <footer>Meu primeiro projeto usando React e TypeScript</footer>
    </>
  )
}

export default App
