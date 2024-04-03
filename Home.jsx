import React from 'react';
import NavBar from './src/components/NavBar';
import About from './src/components/About';
import Login from './src/components/Login';
import Menu from './src/components/Menu';
import Order from './src/components/Order';
import Reservations from './src/components/Reservations';
import { Link, NavLink } from 'react-router-dom';
import "./Home.css"


function Home() {
  return (
    <>
      <NavBar />
      <section className='hero-section'>
        <div className="container">
        <div className="hero_detail">
          <h1 className='rest_name'>Little Lemon</h1>
          <h2 className='city'>NewYork</h2>
          <p className='desc'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <NavLink className="table_reserve" to="/reservations">Reserve Table</NavLink>
        </div>
           <div className="image">
        <img src='https://little-lemon-react-capstone.vercel.app/static/media/hero-image.4a635f3bd7686ce4f8db.jpg'/> 
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
