import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddProfile from './Pages/Dashboard/AddProfile';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfiles from './Pages/Dashboard/MyProfiles';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPortfolio';
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
       <Route path='home' element={<Home></Home>}></Route>
       <Route path='/tool/:toolId' element={
         <RequireAuth>
           <Purchase></Purchase>
         </RequireAuth>
       }></Route>
       <Route path='about' element={<About></About>}></Route>
       <Route path='blog' element={<Blog></Blog>}></Route>
       <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>

       {/* <Route path='/addProduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route> */}


       <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>}>

            <Route index element={<MyProfiles></MyProfiles>}></Route>

            <Route path='addProfile' element={<AddProfile></AddProfile>}></Route>

            <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>

            <Route path='addReview' element={<AddReview></AddReview>}></Route>

            <Route path='manageOrders' element={<ManageAllOrder></ManageAllOrder>}></Route>

            <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>

            <Route path='myOrders' element={<MyOrder></MyOrder>}></Route>
            
            <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>

        </Route>

       {/* <Route path='/myProfile' element={
          <RequireAuth>
            <MyProfiles></MyProfiles>
          </RequireAuth>
        }></Route> */}

       {/* <Route path='/addProfile' element={
          <RequireAuth>
            <AddProfile></AddProfile>
          </RequireAuth>
        }></Route> */}

       {/* <Route path='/addReview' element={
          <RequireAuth>
            <AddReview></AddReview>
          </RequireAuth>
        }></Route> */}

       {/* <Route path="/myOrders" element={
          <RequireAuth>
            <MyOrder></MyOrder>
          </RequireAuth>
        }></Route> */}

       {/* <Route path="/manageProduct" element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route> */}

       {/* <Route path="/manageOrders" element={
          <RequireAuth>
            <ManageAllOrder></ManageAllOrder>
          </RequireAuth>
        }></Route> */}
       <Route path='login' element={<Login></Login>}></Route>
       <Route path='register' element={<Register></Register>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>

     <Footer></Footer>
     <ToastContainer />
     
      
    </div>
  );
}

export default App;
