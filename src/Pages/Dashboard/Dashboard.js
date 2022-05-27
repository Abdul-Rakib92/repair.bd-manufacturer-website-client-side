import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <h2 className='text-2xl font-bold text-lime-600 mt-16'>Welcome to your Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-red-50 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">My Profile</Link></li>

      { admin && <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>}

      { !admin && <li><Link to="/dashboard/addReview">Add Review</Link></li>}

      { admin && <li><Link to="/dashboard/manageOrders">Manage all Orders</Link></li>}

      { admin && <li><Link to="/dashboard/addProduct">Add Product</Link></li>}

      { !admin && <li><Link to="/dashboard/myOrders">My Orders</Link></li>}

      {/* { admin && <li><Link to="/dashboard/addProfile">Add Profile</Link></li>} */}

      { admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;