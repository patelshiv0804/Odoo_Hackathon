import React, { useState } from 'react';
import {
    User,

} from 'lucide-react';

const Nav_bar = ({ title = "ReWear", navItems = [] }) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <h1 className="logo">{title}</h1>
                </div>
                <nav className="nav-desktop">
                    {navItems.map((item, index) => (
                        <button key={index} className="nav-button" onClick={item.onClick}>
                            <item.icon className="nav-icon" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
                <div className="nav-mobile">
                    <button className="mobile-menu-button">
                        <User className="mobile-menu-icon" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Nav_bar;