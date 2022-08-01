import React from 'react';
import { createContext, useState } from 'react';
import './App.css';
import { Routes, Route }
  from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import BookingPage from './Pages/BookingPage/BookingPage';
import NavBar from './Components/NavBarMain/NavBarMain';
import LogInPage from './Pages/LogInPage/LogInPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SearchPage from './Components/SearchPage/SearchPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import Testimonials from './Components/Testimonials/Testimonials';
import PackagePage from './Components/Packages/PackagePage';
// import AdContactPage from './Components/Admin Page/AdContactPage';
import {ContactPage} from "./Pages/ContactPage/ContactPage";
// import adminUserPage from './Pages/Admin Page/adminUserPage';
// import './App.css';
import Sidebar from './Components/Sidebar';
import AdminPage from './Pages/dashBoard';
import ContactList from './Pages/ContactList';
import ContactTable from './Components/Table/ContactTable';
import SignInSide from './Components/combineSignInSignUp';
import PackageList from './Pages/PackageList';
// import DashBoard from './Pages/dashBoard';


export const userStatusContext = createContext();

function App() {

  
  return (
    

    <>
    <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/packages" element={<PackagePage/>} />
            <Route path="/login" element={<SignInSide/>} />
            <Route path="/contacts" element={<ContactPage/>} />
            <Route path="/booking/:category" element={<BookingPage />} />
            {/* <Route path="/login" element={<LogInPage />} /> */}
            <Route path="/testimonials" element={<ContactTable />} />

            <Route path='*' element={<NotFoundPage />} />
            <Route path="admin">
              <Route index element={<AdminPage />} />
              <Route path="contact">
                <Route index element={<ContactList />} />               
              </Route>
              <Route path="package">
                <Route index element={<PackageList />} />               
              </Route>
              {/* <Route path="products">
                <Route index element={<ListHouse />} />
               
                <Route
                  path="new"
                  element={<New/>}
                />
              </Route>
              <Route path="users">
                <Route index element={<ListUser />} />
                
               
              </Route> */}
            </Route>

          </Route>



        </Routes>
    
    </>
  );
}

export default App;
