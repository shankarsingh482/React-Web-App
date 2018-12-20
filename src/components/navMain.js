import React from 'react';
import { NavLink } from 'react-router-dom';

class NavMain extends React.Component
{

    render()
    {
        return (
        <div>
                <ul>
                    <li><NavLink exact to="/" className="normal" activeClassName="active" >Home</NavLink></li>
                    <li><NavLink exact to="/about" className="normal" activeClassName="active" >About Us</NavLink></li>
                    <li><NavLink exact to="/contactus" className="normal" activeClassName="active" >Contact Us</NavLink></li>
                    <li className="right-bar"><NavLink exact to="/login" className="normal" activeClassName="active" >Login</NavLink></li>
                    <li  className="right-bar"><NavLink exact to="/logout" className="normal" activeClassName="active" >Sign Up</NavLink></li>
                </ul>
        </div>
        )
    }
}
export default NavMain