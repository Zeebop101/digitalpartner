import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AdminLoginView from './Views/AdminLoginView/AdminLoginView';
import AdminDashboardView from './Views/AdminDashboardView/AdminDashboardView';
import HomeView from './Views/HomeView/HomeView';
import LibraryView from './Views/LibraryView/LibraryView';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  let isAuthenticated = false;
  if (sessionStorage.getItem('currentAdmin')) isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to='/admin-login' />;
};

const CheckAuth = ({ children }) => {
  let isAuthenticated = false;
  if (sessionStorage.getItem('currentAdmin')) isAuthenticated = true;
  return isAuthenticated ? <Navigate to='/admin-dashboard' /> : children;
};

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} exact />
      <Route path='/library' element={<LibraryView />} exact />
      <Route
        path='/admin-login'
        element={
          <CheckAuth>
            <AdminLoginView />
          </CheckAuth>
        }
        exact
      />
      <Route
        path='/admin-dashboard'
        element={
          <RequireAuth>
            <AdminDashboardView />
          </RequireAuth>
        }
        exact
      />
    </Routes>
  );
};

export default MyRoutes;
