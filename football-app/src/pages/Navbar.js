import React, { Component } from "react";
import '../Table.css'

class Navbar extends Component {
    render() {
        return (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <p className="navbar-brand text-white">Football Data-App</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <p className="nav-link text-white" href="#">Home</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link text-white" href="#">About</p>
                        </li>
                    </ul>
                    <button className="btn btn-danger" href="#">Logout</button>
                </div>
            </nav>
          </>
        );  
    }
}

export default Navbar;