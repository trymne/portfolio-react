import { useState } from 'react'
import './App.css'
import * as stylex from '@stylexjs/stylex'
import Header from './components/Header'
import OneProject from './components/OneProject'
import Resume from './components/resume'
import Contact from './components/Contact'
import PrisonerLanding from './components/prisonerLanding'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/Landing'
import './App.css'

const styles = stylex.create({
  grid: {
    display: 'grid',
    margin: 0,
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
    backgroundColor: 'var(--background)',
    width: '100%',
  },
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div {...stylex.props(styles.grid)}>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects/prisoner" element={<PrisonerLanding />} />
          <Route path="/projects/:projectName" element={<OneProject />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
