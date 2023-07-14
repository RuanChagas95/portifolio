import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ProjectDescribe from './components/projects/ProjectDescribe/ProjectDescribe';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='projects/:project' element={<ProjectDescribe />}/>
      </Route>
      <Route path='*'element={<Layout />}/>

    </Routes>

  )
}

export default App
