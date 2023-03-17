// //import logo from './logo.svg';
// import './App.css';
// import Home from './Components/Home';
 import Login from './Components/Login';
import Register from './Components/Register';
import UserDetails from './Components/UserDetails';
// // import Routing from './Routing';

// function App() {
//   return (
//     // <div className="App">
//     //  <Login />
//     //  {/* <Home /> */}
//     //  {/* <Register /> */}
//     // </div>
//   );
// }

// export default App;

import React from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import Login from "./components/Login";
//import Register from "./components/Register";
//import userDetails from "./Components/userDetails"
//import ImageUpload from "./components/imageUpload.";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/UserDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
