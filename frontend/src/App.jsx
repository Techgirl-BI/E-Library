import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import MyFooter from './home/MyFooter'

function App() {
  return (
    <>
   <Navbar/>
   <div className='min-h-screen'>
   <Outlet/>
   </div>
   <MyFooter/>
    </>
  )
}

export default App
