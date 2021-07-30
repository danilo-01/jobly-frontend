import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import FormsContext from './context/FormsContext';
import { BrowserRouter } from "react-router-dom";
import NavbarLoggedIn from "./components/NavbarLoggedIn.js";
import NavbarLoggedOut from "./components/NavbarLoggedOut.js";
import JoblyApi from './api';
import LoggedInRoutes from './components/LoggedInRoutes';
import LoggedOutRoutes from './components/LoggedOutRoutes';

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState(null);

  console.debug("Curr", currentUser, username)
  useEffect(()=>{
    const getUserData = async () => {
      if(username || localStorage.getItem("username")){

        console.debug("APP TOKEN:", token)
        const res = await JoblyApi.getUserData(
          username ? 
          username : 
          localStorage.getItem("username"), 
          token ? token : localStorage.getItem("_token"));
        localStorage.setItem("username", res.username);
        setCurrentUser(res);
      }
    }
    getUserData();
  }, [token])
  //Get users token on loginto recall useEffect
  const loginUser = async (data) => {
    try{
      const res = await JoblyApi.login(data);
      localStorage.setItem("_token", res);
      setToken(res);
    }catch(err){
      console.log(err);
    }
  }
// Gets users token on signup to recall useEffect
  const signupUser = async (data) => {
    try{
      const res = await JoblyApi.signup(data);
      localStorage.setItem("_token", res);
      setToken(res);
    }catch(err){
      console.log(err);
    }
  }
// Updates a user 
  const updateUser = async (data) => {
    try{
      const res = await JoblyApi.updateUser(username, data, token);
      setCurrentUser(res);
    }catch(err){
      console.log(err);
    }
  }

  const logoutUser = () => {
    localStorage.removeItem("_token");
    localStorage.removeItem("username");
    console.debug("local storage:", localStorage.getItem("username"))
    setCurrentUser(null);
  }


  return (
    <>
    <UserContext.Provider value={currentUser}>
    <FormsContext.Provider value={{
      login: loginUser,
      signup: signupUser,
      update: updateUser,
      logout: logoutUser,
      setCurrentUser: setCurrentUser,
    }}>
      <BrowserRouter>
        {currentUser ? <NavbarLoggedIn/> : <NavbarLoggedOut/>}
        {currentUser ? <LoggedInRoutes/> : <LoggedOutRoutes 
        setUsername={setUsername}/>}
      </BrowserRouter>
    </FormsContext.Provider>      
    </UserContext.Provider>
    </>

  );
}

export default App;
