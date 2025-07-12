import React from 'react';
import { Home, Search, Upload, LogOut, User } from 'lucide-react';
import '../styles/Nav_bar.css';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const NavBar = ({ activeTab, setActiveTab }) => {
    return (
        <>
            <header header className="header" >
                <div className="header-content">
                    <div className="header-left">
                        <div className="nav-logo-icon">
                            <img src={logo} alt="ReWear Logo" className="nav-logo-image" />
                        </div>
                        <h1 className="logo">ReWear</h1>
                    </div>
                    <nav className="nav-desktop">
                        <button
                            onClick={() => setActiveTab('dashboard')}
                            className={`nav-button ${activeTab === 'dashboard' ? 'nav-button-active' : ''}`}
                        >
                            <Home className="nav-icon" />
                            <span>Dashboard</span>
                        </button>
                        <button className="nav-button">
                            <Search className="nav-icon" />
                            <span>Browse</span>
                        </button>
                        <button className="nav-button">
                            <Upload className="nav-icon" />
                            <span>Add Item</span>
                        </button>
                        <button className="nav-button">
                            <LogOut className="nav-icon" />
                            <span>Logout</span>
                        </button>
                    </nav>
                    <div className="nav-mobile">
                        <button className="mobile-menu-button">
                            <User className="mobile-menu-icon" />
                        </button>
                    </div>
                </div>
            </header >
        </>
    );
};

export default NavBar;
