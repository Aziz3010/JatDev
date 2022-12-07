import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./Sidebar.css";
import { Links } from "../../Assets/Data/Data";

const Sidebar = () => {
    return (
        <section className='Sidebar'>
            <Link className="logo_textlogo" to={'/'} >
                <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 9.9855V25.5071C0 26.2288 0.388793 26.8945 1.01736 27.249L7.82203 31.0876V27.8785H10.8305V23.6667H15.0424V17.6497H9.02542V11.4322H15.0424V7.01977H19.8559V4.0113H22.4633L16.9319 0.850524C16.0096 0.323496 14.8774 0.323498 13.9551 0.850526L1.00772 8.24902C0.384572 8.6051 0 9.26779 0 9.9855Z" fill="#5051F9" />
                    <path d="M29.722 8.4417L23.0649 4.41241V7.42089H19.8559V11.8333H15.4435V17.6497H21.4604V23.6667H15.4435V28.2796H11.0311V31.4887H8.42371L13.9283 34.6341C14.8649 35.1694 16.0169 35.1605 16.9452 34.6108L29.7054 27.0554C30.3135 26.6954 30.6864 26.0412 30.6864 25.3345V10.1527C30.6864 9.45292 30.3207 8.80404 29.722 8.4417Z" fill="#1DA7FF" />
                </svg>
                <h1>octom.</h1>
            </Link>
            <ul className='sidebar_links'>
                {
                    Links.map((link, index) => (
                        <li key={index} className="sidebar_link">
                            <NavLink to={link.to} className={({ isActive }) => isActive ? 'activeLink' : ''} >
                                {link.icon}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </section >
    )
}

export default Sidebar;