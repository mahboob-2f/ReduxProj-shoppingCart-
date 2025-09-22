import { Navbar } from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import NotFound from "./components/NotFound"

function App() {



  return (
    <div>
      <div className="w-full h-20 bg-[#0F172A]   ">
        <Navbar />
      </div>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
