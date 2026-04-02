import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Navbar from './Components/Navbar'
import Events from './Components/Events'
import Hero from './Components/Hero'
import ContactUs from './Components/ContactUs'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import SearchedEvent from './Components/SearchedEvent';
function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/home' element={<Hero/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/searchedEvents' element={<SearchedEvent/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
