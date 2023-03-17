import React, { Component } from 'react'
import { useNavigate,Link } from "react-router-dom";


export class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            email:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const {fname,lname,email,password}=this.state;
        //console.log(fname,lname,email,password);
        fetch("http://localhost:3300/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                fname,
                lname,
                email,
                password
                
            }),
            
        })
        .then((res)=>res.json())
        .then((data) => {
            console.log(data, "userRegister");
           //console.log(data);
        })
    };
  
  render() {
    return (
      <div>
         <div class="main">

{/* <!-- Sign up form --> */}
<section class="signup">
    <div class="container">
        <div class="signup-content">
            <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form  onSubmit={this.handleSubmit} class="register-form"  >
                    <div class="form-group">
                        <label for="fname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" fname="fname" id="fname" placeholder="Enter firstName"
                        onChange={(e)=>this.setState({fname:e.target.value})}
                        />
                    </div>
                    <div class="form-group">
                        <label for="lname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" lname="lname" id="lname" placeholder="Enter lastName"
                        onChange={(e)=>this.setState({lname:e.target.value})}
                        />
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                        <input type="email" name="email" id="email" placeholder="Your Email"
                        onChange={(e)=>this.setState({email:e.target.value})}
                        />
                    </div>
                    <div class="form-group">
                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password"
                        onChange={(e)=>this.setState({password:e.target.value})}
                        />
                    </div>
                    {/* <div class="form-group">
                        <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"
                        onChange={(e)=>this.setState({password:e.target.value})}
                        />
                    </div> */}
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                    <div class="form-group form-button">
                        <input type="submit" name="signup" id="signup" class="form-submit" onClick={this.state.handleSubmit}  value="Register"/>
                    </div>
                </form>
            </div>
            <div class="signup-image">
                <figure><img src="images/signup-image.jpg" alt="sing up image"/></figure>
                <h1 href="" class="signup-image-link">I am already member<Link to="/Login"><h1>Login</h1>  </Link></h1>
                
            </div>
        </div>
    </div>
</section>

</div>
      </div>
    )
  }
}

export default Register