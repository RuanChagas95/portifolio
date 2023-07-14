import Header  from './components/Header/Header'
import ProjectGroup from './components/projects/ProjectGroup'
import AboutMe from './components/AboutMe/AboutMe';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
    <Header />
    <main>
        <AboutMe />
      <ProjectGroup />
      <Outlet />
    </main>
    <footer>Meu primeiro projeto usando React e TypeScript</footer>
    </>
  )
}
