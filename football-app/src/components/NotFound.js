import React from "react";
import {Link} from "react-router-dom";
import '../NotFound.css'

const NotFound = () => {    
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! Page not found</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>we are sorry, but the page you requested was not found</h2>
                <Link to={{ pathname: '/',}}><h2>Back to Main Page</h2></Link>
            </div>
        </div>
    );  
}

export default NotFound;