import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <h2 className='text-2xl font-bold text-purple-500 mt-16'>Welcome to your Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-red-50 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">Manage Product</Link></li>
      <li><Link to="/dashboard/addReview">Add Review</Link></li>
      <li><Link to="/dashboard/myProfile">My Profile</Link></li>
      <li><Link to="/dashboard/manageOrders">Manage all Orders</Link></li>
      <li><Link to="/dashboard/addProduct">Add Product</Link></li>
      <li><Link to="/dashboard/myOrders">My Orders</Link></li>
      <li><Link to="/dashboard/addProfile">Add Profile</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;