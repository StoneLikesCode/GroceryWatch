import {HashRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Team from './pages/Team'
import Problem from  './components/Problem'
import Solution from './components/Solution'
import Deliverables from "./pages/Deliverables"
import References from "./pages/References"
import Presentations from "./pages/Presentations"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import ProcessFlows from "./pages/ProcessFlows"
import MFCD from "./pages/MFCD"
import CompetitionMatrix from "./pages/CompetitionMatrix"
import RiskMatrices from "./pages/RiskMatrices"
import Glossary from "./pages/Glossary"
import Labs from "./pages/Labs"
import Lab2 from "./pages/Lab2"

function App() {

  return (
    <HashRouter>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/Team" element={<Team/>}></Route>
        <Route path="/Problem" element={<Problem/>}></Route>
        <Route path="/Solution" element={<Solution/>}></Route>
        <Route path="/Presentations" element={<Presentations/>}></Route>
        <Route path="/Deliverables" element={<Deliverables/>}></Route>
        <Route path="/References" element={<References/>}></Route>
        <Route path="/ProcessFlows" element={<ProcessFlows/>}></Route>
        <Route path="/MFCD" element={<MFCD/>}></Route>
        <Route path="/CompetitionMatrix" element={<CompetitionMatrix/>}></Route>
        <Route path="/RiskMatrices" element={<RiskMatrices/>}></Route>
        <Route path="/Glossary" element={<Glossary/>}></Route>
        <Route path="/Labs" element={<Labs/>}></Route>
        <Route path="/labs/lab2" element={<Lab2/>}></Route>
        <Route path="/References" element={<References/>}></Route>
      </Routes>
      <Footer></Footer>
    </HashRouter>
  )
}

export default App
