import React from 'react';
import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import BookingPage from './Components/BookingPage/BookingPage';
import NavBar from './Components/NavBar/NavBar';
import LogInPage from './Components/LogInPage/LogInPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SearchPage from './Components/SearchPage/SearchPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';

export const userStatusContext = createContext();

function App() {
  const[userStatus, setUserStatus] = useState({
    isNewUser: false,
    pageName: "",
  });
  
  return (
    <userStatusContext.Provider value={[userStatus, setUserStatus]}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/booking/:category" component={BookingPage} />
        <Route exact path="/login" component={LogInPage} />
        <PrivateRoute exact path="/searches">
          <SearchPage />
        </PrivateRoute>
        <Route exact path="*" component={NotFoundPage}/>
      </Switch>
    </Router>
    </userStatusContext.Provider>
  );
}

export default App;
