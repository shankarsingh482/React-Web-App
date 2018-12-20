import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from '../components/home'
import About from '../components/about'
import Contact from '../components/contact'
import Login  from '../components/Login/login'
import Signup from '../components/Signup/signup'
export default () => (
    <BrowserRouter>
            <div>   
                    <Route exact path="/" component= {Home}/>
                    <Route exact path="/about" component = {About}/>
                    <Route exact path ="/contactus" component = {Contact}/>
                     <Route exact path="/login" component={Login}/>
                     <Route exact path="/logout" component = {Signup}/>   
            
            </div>        
    </BrowserRouter>
)
