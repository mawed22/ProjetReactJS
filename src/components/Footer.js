import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
<div>
        {/* footer section starts  */}
<section className="footer">
  <div className="box-container">
    <div className="box">
      <h3> <i className="fas fa-lightbulb" /> educa </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
    <div className="box">
      <h3>quick links</h3>
      <NavLink exact to='/' className="link">home</NavLink>
      <NavLink exact to='/about' className="link">about</NavLink>
      <NavLink exact to='/courses' className="link">courses</NavLink>
      <NavLink exact to='/contact' className="link">contact</NavLink>
    </div>
    <div className="box">
      <h3>useful links</h3>
      <a href="#" className="link">help center</a>
      <a href="#" className="link">ask questions</a>
      <a href="#" className="link">send feedback</a>
      <a href="#" className="link">private policy</a>
      <a href="#" className="link">terms of use</a>
    </div>
    <div className="box">
      <h3>newsletter</h3>
      <p>subscribe for latest upadates</p>
      <form action>
        <input type="email" name placeholder="enter your email" id className="email" />
        <input type="submit" defaultValue="subscribe" className="btn" />
      </form>
    </div>
  </div>
  <div className="credit"> created by <span>Coding team</span> | all rights reserved! </div>
</section>
{/* footer section ends */}

        </div>
    );
};

export default Footer;