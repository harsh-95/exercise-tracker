import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">ExerTracker</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">Exercises</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/create" className="nav-link" href="#">Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link" href="#" tabIndex="-1">Create User</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>
            </div>
            );
    }
}

export default Navbar;