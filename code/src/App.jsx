import { useState } from 'react'
import './App.css'
import * as stylex from '@stylexjs/stylex'
import Header from './components/Header'
import OneProject from './components/OneProject'
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
    gap: 20,
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
          <Route path="/projects/:projectName" element={<OneProject />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
