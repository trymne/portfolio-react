import { useState } from 'react'
import './App.css'
import * as stylex from '@stylexjs/stylex'
import Header from './components/Header'
import Footer from './components/Footer'
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
    <div {...stylex.props(styles.grid)}>
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}

export default App
