import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import Start from './views/Start'
import Sign from './views/Sign'
import Auth from './views/Auth'
import Container from './components/Container'

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path='/' element={<Start />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
