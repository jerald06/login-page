import React from "react";
//import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//import Table from "./table";
import { Link } from 'react-router-dom';

function login() {
    console.log('Maharajan')
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            passwod: '',
        };
        this.handleEvent = this.handleEvent.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlepassw = this.handlepassw.bind(this);

    }
    handleName(event) {
        const newname = event.target.value
        this.setState({
            username: newname
        });
        console.log(this.state.newname)
    }

    handleEvent(event) {
        const newemail = event.target.value
        this.setState({
            email: newemail
        });
        console.log(this.state.email)
    }
    handlepassw(event) {
        const newpassword = event.target.value
        this.setState({
            password: newpassword
        });
        console.log(this.state.password)
    }


    render() {
        return (

            <
            div className = "Auth-form-container" >
            <
            form className = "Auth-form" >
            <
            div className = "Auth-form-content" >
            <
            h3 className = "Auth-form-title" > Sign In < /h3>  <
            div className = "form-group mt-3" >
            <
            label > User Name < /label>  <
            input type = "text"
            className = "form-control mt-1"
            placeholder = "User Name"
            onChange = { this.handleName }
            />  <
            label value = { this.state.email } > < /label> <
            /div>  <
            div className = "form-group mt-3" >

            <
            label > Email address < /label>  <
            input type = "email"
            className = "form-control mt-1"
            placeholder = "Enter email"
            onChange = { this.handleEvent }
            />  <
            label value = { this.state.email } > < /label>  <
            /div>  <
            div className = "form-group mt-3" >

            <
            label > Password < /label>  <
            input type = "password"
            className = "form-control mt-1"
            placeholder = "Enter password"
            onChange = { this.handlepassw }
            />  <
            label value = { this.state.password } > < /label>  <
            /div>  <
            div className = "d-grid gap-2 mt-3" >

            <
            button type = "button"
            className = "btn btn-primary" >
            <
            Link to = "/abc" > Submit < /Link>

            <
            /button> <
            /div>  <
            p className = "forgot-password text-right mt-2" >
            Forgot < a href = "#" > password ? < /a>  <
            /p>  <
            /div>  <
            /form>  <
            /div>
        )
    }
}

export default LoginForm;