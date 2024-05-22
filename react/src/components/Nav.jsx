import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                 <Link className="nav-link" to='/'>Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">                        
                        <Link className="nav-link" to='/search'>Search</Link>                         
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to='/career'>Career</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}


export default Nav;