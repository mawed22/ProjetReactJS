import React from 'react';
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
     <div>
     <div>
        {/* header section starts  */}
        <header className="header">
            <NavLink exact to="/" className="logo"> <i className="fas fa-lightbulb" /> educa </NavLink>
            <nav className="navbar">
            <div id="close-navbar" className="fas fa-times" />
           <NavLink exact to="/">home</NavLink>
           <NavLink exact to="/about">about</NavLink>
           <NavLink exact to="/courses">courses</NavLink>
           <NavLink exact to="/contact">contact</NavLink>
            </nav>
            <div className="icons">
            <div id="account-btn" className="fas fa-user" />
            <div id="menu-btn" className="fas fa-bars" />
            </div>
        </header>
        {/* account form section starts  */}
        <div className="account-form">
            <div id="close-form" className="fas fa-times" />
            <div className="buttons">
            <span className="btn active login-btn">login</span>
            <span className="btn register-btn">register</span>
            </div>
            <form className="login-form active" action>
            <h3>login now</h3>
            <input type="email" placeholder="enter your email" className="box" />
            <input type="password" placeholder="enter your password" className="box" />
            <div className="flex">
                <input type="checkbox" name id="remember-me" />
                <label htmlFor="remember-me">remember me</label>
                <a href="#">forgot password?</a>
            </div>
            <input type="submit" defaultValue="login now" className="btn" />
            </form>
            <form className="register-form" action>
            <h3>register now</h3>
            <input type="email" placeholder="enter your email" className="box" />
            <input type="password" placeholder="enter your password" className="box" />
            <input type="password" placeholder="confirm your password" className="box" />
            <input type="submit" defaultValue="register now" className="btn" />
            </form>
        </div>
        </div>
     </div>
    );
};

export default header;