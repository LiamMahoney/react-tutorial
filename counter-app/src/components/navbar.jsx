import React, { Component } from "react";

// Stateless functional component
// can't use lifecycle hooks in a SFC
const NavBar = ({ totalCounters }) => {
    console.log("NavBar - Rendered");

    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='#'>
                Navbar{" "}
                <span className='badge badge-pill badge-secondary'>
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default NavBar;
