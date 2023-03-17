import React, { Component } from 'react'
import {Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props){
       super(props)
       this.state={
        email:"",
        password:"",
       };
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const {email,password}=this.state;
        console.log(email,password);
        fetch("http://localhost:3300/Login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password 
            }),
            
        })
        .then((res)=>res.json())
        .then((data) => {
            console.log(data, "userRegister");
           //console.log(data);
           if(data.status=="Ok"){
            alert("login successful");
            window.localStorage.setItem("token", data.data);
           window.localStorage.setItem("loggedIn",true);
            window.location.href="./userDetails"
           }
        });
    };
    render() {
     return (
    <div className="main">

        {/* <!-- Sing in  Form --> */}
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
                        <h1 className="signup-image-link">Don't have an account<Link to="/Register"> <h1>Sign Up </h1></Link></h1>
                        
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Login</h2>
                        <form onSubmit={this.handleSubmit} className="register-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text"
								email="email" 
								// id="your_name"
								placeholder="Your Email"
                                onChange={(e)=>this.setState({email: e.target.value})}
								/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" 
                                name="your_pass" 
                                id="your_pass"
                                placeholder="Password"
                                onChange={(e)=>this.setState({password: e.target.value})}
                                 />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" onClick={this.state.handleSubmit} value="Log in"/>
                            </div>
                        </form>
                        {/* <div>
                            Don't have account
                            <div><a href="/Register.js"> Sign Up </a></div>
                        </div> */}
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
  }
}


// import React from 'react'

// const Login = () => {
//   return (
//     <div class="main">

//         {/* <!-- Sing in  Form --> */}
//         <section class="sign-in">
//             <div class="container">
//                 <div class="signin-content">
//                     <div class="signin-image">
//                         <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
//                         <a href="#" class="signup-image-link">Create an account</a>
//                     </div>

//                     <div class="signin-form">
//                         <h2 class="form-title">Sign up</h2>
//                         <form method="POST" class="register-form" id="login-form">
//                             <div class="form-group">
//                                 <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
//                                 <input type="text"
// 								name="your_name" 
// 								id="your_name"
// 								placeholder="Your Name"
// 								/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
//                                 <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
//                             </div>
//                             <div class="form-group">
//                                 <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
//                                 <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
//                             </div>
//                             <div class="form-group form-button">
//                                 <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
//                             </div>
//                         </form>
//                         <div>
//                             Don't have account
//                             <div>Sign Up</div>
//                         </div>
//                         <div class="social-login">
//                             <span class="social-label">Or login with</span>
//                             <ul class="socials">
//                                 <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
//                                 <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
//                                 <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     </div>
//   )
// }

// export default Login