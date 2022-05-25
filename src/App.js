import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrder from './Pages/Dashboard/MyOrder';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/NotFound';
import Purchase from './Pages/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/tool/:toolId' element={
         <RequireAuth>
           <Purchase></Purchase>
         </RequireAuth>
       }></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>

       <Route path='/addProduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>

       <Route path="/myOrders" element={
          <RequireAuth>
            <MyOrder></MyOrder>
          </RequireAuth>
        }></Route>

       <Route path="/manageProduct" element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>

       <Route path="/manageOrders" element={
          <RequireAuth>
            <ManageAllOrder></ManageAllOrder>
          </RequireAuth>
        }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>

     <Footer></Footer>
     <ToastContainer />
     
      
    </div>
  );
}

export default App;
