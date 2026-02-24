import {HashRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Team from './pages/Team'
import Problem from  './pages/Problem'
import Solution from './pages/Solution'
import Deliverables from "./pages/Deliverables"
import References from "./pages/References"
import Presentations from "./pages/Presentations"

function App() {

  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/Team" element={<Team/>}></Route>
        <Route path="/Problem" element={<Problem/>}></Route>
        <Route path="/Solution" element={<Solution/>}></Route>
        <Route path="/Presentations" element={<Presentations/>}></Route>
        <Route path="/Deliverables" element={<Deliverables/>}></Route>
        <Route path="/References" element={<References/>}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
