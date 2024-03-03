
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SrPagePart1 from './Pages/SrPagePart1'
import Home from './Pages/Home'
import SrPagePart2 from './Pages/SrPagePart2'
import SrPagePart1Myself from './Pages/SrPagePart1Myself'
import Sample from './Components/Sample'
import SamplePage from './Pages/SamplePage'

function App() {


  return (
    <>

      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/sr-page-part-1" element={<SrPagePart1 />} />
          <Route path="/sr-page-part1-myself" element={<SrPagePart1Myself />} />
          <Route path="/sr-page-part-2" element={<SrPagePart2 />} />
          <Route path="/sample" element={<SamplePage />} />





        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
