// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Header  from './components/Header/Header'
import CreateProjectGroup from './components/projects/CreateProjectGroup'

function App() {
  // <iframe src="./projects/learning-to-write/index.html"></iframe>
  // <iframe src="src/projects/yt-list/" width='100%'></iframe>
  // <a href="./src/projects/pixel-art/">pixel art</a>

  return (
    <>
    <Header />
    <br /><br />
    <CreateProjectGroup />
    <footer>Meu primeiro projeto usando React</footer>
    </>
  )
}

export default App
