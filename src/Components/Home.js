import React, { Component } from 'react'
import { useNavigate,Link } from "react-router-dom";
import Login from './Login';

export default class Home extends Component {
  render() {
    return (
        <>
          {/* <Link to="/Login"> Sign Up </Link>login */}
         <div>Welcome Home</div>
        </>
     
    )
  }
}
