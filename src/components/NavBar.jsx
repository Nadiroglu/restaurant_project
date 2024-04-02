import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css"

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
         <img  src='https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/Logo.370f832fad423c516d56.png'></img>
      </Link>
      <ul>
        <li>
          <NavLink className='home_link' to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className='menu_link'to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink className='about_link'to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className='reservations_link'to="/reservations">Reservations</NavLink>
        </li>
        <li>
          <NavLink className='order_link'to="/order">Order Online</NavLink>
        </li>
        <li>
          <NavLink className='login_link'to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar