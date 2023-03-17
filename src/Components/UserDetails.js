import React, { Component } from 'react'

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usreData: "",
        }
    }
    componentDidMount() {
        fetch("http://localhost:3300/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({ usreData: data.data });
                if(data.data === "token expired"){
                   alert("GOOD")
                }

            });
    }
    logOut=()=>{
        window.localStorage.clear();
        window.location.href="./Login";
    }
    render() {
        return (
            <div>
                <div className="main">

                    {/* <!-- Sing in  Form --> */}
                    <section className="sign-in">
                        <div className="container">
                            <div className="signin-content">
                                <div className="signin-form">
                                    <h2 className="form-title" style={{ color: "#61dafb" }}>User Details</h2>
                                    Name<h1>{this.state.usreData.lname}</h1>
                                    Email <h1>{this.state.usreData.email}</h1>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" onClick={this.logOut} value="Log Out" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}
