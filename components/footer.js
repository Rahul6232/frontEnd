import React from "react";
import { Link } from "react-router-dom";
import App from '../App';


const foo=()=>{
    return(
        <div>
            <ul className="foo-ul">
                <li> <Link to="/"> E-commerce site</Link></li>
                {/* <li> <Link to="/About"> About</Link></li>
                <li> <Link to="/career"> career</Link></li> */}
            </ul>
        </div>
    )
}

export default foo;