import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    School Admin
                </Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        color: isActive ? "Black" : "gray",
                                    };
                                }}
                                className="nav-link active"
                                aria-current="page"
                                to="/students"
                            >
                                Students
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
