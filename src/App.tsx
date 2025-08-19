import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landing'
import GamePage from './components/gamePage'



function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<LandingPage></LandingPage>}></Route>
            <Route path = "/GamePage" element = {<GamePage></GamePage>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
