
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Top_Header from './components/Top_Header/Top_Header'


import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
   
      <div className='max-w-7xl mx-auto'>
        <Top_Header />
        <Navbar />
        <Outlet />
      </div>
      < Footer />
    </>
  )
}

export default App
