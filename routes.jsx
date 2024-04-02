import React from 'react'
import NavBar from './src/components/NavBar';
import About from './src/components/About';
import Login from './src/components/Login';
import Menu from './src/components/Menu';
import Order from './src/components/Order';
import Reservations from './src/components/Reservations';
import Home from './Home';


const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
   { path: '/menu',
    element: <Menu />
  },
    { path: '/reservations',
     element: <Reservations />
    }
    , { path: '/login',
     element: <Login />
    }
     ]

export default routes