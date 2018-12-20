import React from 'react';
import '../styles/loginStyle.css';
import InputBtn from '../Login/inputbtn';
import SubmitBtn from '../Login/submitbtn'
import NavMain from '../navMain';

import PropTypes from 'prop-types';
//import axios from 'axios';

class Signup extends React.Component
{   
    constructor(props)
    {
        super(props);
        this.state=
        {
            fname:'',
            lname:'',
            email:'',
            password:'',
            mobile:'',

        }
        this.onChange=this.onChange.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e)
    {
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e)
    {       e.preventDefault();
      // axios.post('/api/users',{user:this.state })
        this.props.userSignupRequest(this.state);
    }
    render()
    {
        return (
            <main>
            <NavMain/>
            <div className="login">   
             <div className="login-triangle"></div>
                <h2 className="login-header">Sign up</h2>
                <form className="login-container" onSubmit={this.onSubmit}>
                <span><InputBtn type="text" name="fname" placeholder="First Name" className="inputname" value={this.state.fname} onChangeFunc={this.onChange}/>
                <InputBtn type="text" name="lname" placeholder=" Last Name" className="inputname" value={this.state.lname} onChangeFunc={this.onChange} /></span>
            <p><InputBtn type="email" name="email" placeholder="Enter Your Mail Id" className="inputemail" value={this.state.email} onChangeFunc={this.onChange} /> </p>
            <p><InputBtn type="number" name="mobile" placeholder="Mobile Number" className="inputemail" value={this.state.mobile} onChangeFunc={this.onChange} /> </p>

            <p><InputBtn type="password" name="password" placeholder="Enter Password" className="inputpassword" value={this.state.password} onChangeFunc={this.onChange} /></p>
            <SubmitBtn type="submit" name="submit" value="Register"  className="btnlogin"/>
            </form>
            </div>
            </main>
        )
    }   
}

Signup.PropTypes = {
    userSignupRequest:PropTypes.func.isRequired
}


export default Signup;