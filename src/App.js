import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import InternationalCurriculum from "./components/allcourses/InternationalCurriculum"
import IELTSPage from "./components/allcourses/ILETS"
import SATPreparation from "./components/allcourses/SATprepration"
import EngineeringSemester from "./components/allcourses/EngineeringSemester"
import TermsAndConditions from "./components/home/TermsAndCondition.js"
import Privacy from "./components/home/Privacy.js"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<CourseHome />} />
        <Route path='/team' element={<Team />} />
        <Route path='/download' element={<Pricing />} />
        <Route path='/journal' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/courses/international-curriculum' element={<InternationalCurriculum />} />
        <Route path='/courses/Languages' element={<IELTSPage />} />
        <Route path='/courses/sat' element={<SATPreparation />} />
        <Route path='/courses/engineering' element={<EngineeringSemester />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
