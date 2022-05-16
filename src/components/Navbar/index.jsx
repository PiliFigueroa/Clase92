import React from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {

    const links = [
        {
            id: 1,
            label: "About",
            icon: "fa-solid fa-circle-info"
        },
        {
            id: 2,
            label: "Contact",
            icon: "fa-solid fa-envelope"
        },
        {
            id: 3,
            label: "Account",
            icon: "fa-solid fa-user"
        }
    ]

    return(
        <nav>
            <img src={logo} alt="" />
            <div className="links">
                {links.map(link => <a href='#' key={link.id}><i className={link.icon}></i>{link.label}</a>)}
            </div>
        </nav>
    )
}

export { Navbar }