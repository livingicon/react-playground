import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div>
        <nav>
          <h3>Logo</h3>
          <ul className="nav-links">
            <Link className="link" to='/about'>
              <li>About</li>
            </Link>
            <Link className="link" to='/shop'>
              <li>Shop</li>
            </Link>
          </ul>
        </nav>
    </div>
  )
}

export default Nav;