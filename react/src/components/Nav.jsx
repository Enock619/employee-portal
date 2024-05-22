import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                 <Link class="nav-link" to='/'>Home</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">                          
                        <Link class="nav-link" to='/search'>Search</Link>                         
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to='/career'>Career</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}


export default Nav;