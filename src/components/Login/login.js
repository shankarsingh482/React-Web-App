import React from 'react';
import InputBtn from './inputbtn'
import SubmitBtn from './submitbtn'
import '../styles/loginStyle.css'
import NavMain from '../navMain'
class Login extends React.Component
{
 
        render()
        {
            return (
                <main>
                <NavMain/>
                <div className="login">   
                 <div class="login-triangle"></div>
                    <h2 class="login-header">Log in</h2>
                    <form className="login-container">
                <p><InputBtn type="email" name="Email" placeholder="Enter Your Mail Id" className="inputemail"/> </p>
                <p><InputBtn type="password" name="Password" placeholder="Enter Password" className="inputpassword"/></p>
                <SubmitBtn type="submit" name="submit" value="Login" className="btnlogin"/>
                </form>
                </div>
                </main>
            )
        }   
}

export default Login