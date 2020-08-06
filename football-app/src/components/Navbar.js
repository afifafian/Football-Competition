import React from "react";
import {Link} from "react-router-dom";
import '../Table.css'

const Navbar = () => {    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <p className="navbar-brand text-white">Football Data-App</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <p className="navbar-brand text-white favorite">
                    <Link className="navbar-brand text-white" to={{ pathname: '/favorites',}}>Favorites
                    </Link>
                </p>
            </nav>
        </>
    );  
}

export default Navbar;