import react from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import Login from './componenets/Login'
function App() {

  return (
    <>
     <div className='px-4 sm-px-18 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-500 to-orange-50' >
      <Navbar/>
      <Login/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredits/>}/>
      </Routes>
      <Footer/>
     </div>
    </>
  )
}

export default App
