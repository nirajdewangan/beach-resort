import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Linkslist from './Linkslist';

class Navbar extends Component {
  state = {
    isOpen: false
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
      
            <Link to="/" >
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? " nav-links show-nav" : "nav-links"}>
          {Linkslist.map((link)=>{
            return(
              <li key={link.id}><Link to={link.path} > {link.pathname}</Link> </li>
            )
          })}
            
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
