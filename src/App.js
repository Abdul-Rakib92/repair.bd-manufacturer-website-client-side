import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='home' element={<Home></Home>}></Route>
       <Route path='about' element={<About></About>}></Route>
       <Route path='blog' element={<Blog></Blog>}></Route>
       <Route path='login' element={<Login></Login>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>

     <Footer></Footer>
      
    </div>
  );
}

export default App;
