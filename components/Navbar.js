import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import App from '../App';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/SignUp')
    }
    return (
        <div>
            <img 
            className='logo'
            src=" https://www.coreldraw.com/static/cdgs/landing_pages/seo/logo-design/04-colors.jpg"></img>
            {
                auth ?


                    <ul className='nav-ul'>
                        <li> <Link to="/">Products</Link></li>
                        <li> <Link to="/add">Add products</Link></li>
                        <li> <Link to="/update"> Update products</Link></li>

                        <li> <Link to="/profile">Profile</Link></li>
                        <li> <Link onClick={logout} to="/SignUp">logout({JSON.parse(auth).name})</Link> </li>
                    </ul>
                    : <ul>
                        <li className='nav-ul nav-ul-r'>
                            <Link to="/SignUp">SignUp</Link></li>
                        <li className='nav-ul nav-ul-r'> <Link to="/Login">Login</Link></li>
                    </ul>
            }

        </div>
    )
}


export default Nav;