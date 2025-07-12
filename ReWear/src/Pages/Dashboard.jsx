import React, { useState } from 'react';
import {
    User,
    Leaf,
    Plus,
    Edit3,
    Trash2,
    MessageCircle,
    Calendar,
    Home,
    Search,
    Upload,
    LogOut,
    Facebook,
    Twitter,
    Instagram
} from 'lucide-react';
// import './Dashboard.css';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    // Sample data
    const userPoints = 1250;
    const userListings = [
        { id: 1, title: 'Vintage Denim Jacket', status: 'Available', image: '/api/placeholder/120/120' },
        { id: 2, title: 'Cotton Summer Dress', status: 'Swapped', image: '/api/placeholder/120/120' },
        { id: 3, title: 'Wool Sweater', status: 'Available', image: '/api/placeholder/120/120' }
    ];

    const ongoingSwaps = [
        { id: 1, item: 'Vintage Denim Jacket', partner: 'Sarah M.', status: 'Pending Approval' },
        { id: 2, item: 'Cotton Summer Dress', partner: 'Emma L.', status: 'In Transit' }
    ];

    const completedSwaps = [
        { id: 1, item: 'Silk Scarf', partner: 'Lisa K.', date: '2024-06-15' },
        { id: 2, item: 'Leather Boots', partner: 'Anna R.', date: '2024-06-01' }
    ];

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <div className="header-left">
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
            </header>
            
            {/* Main Content */}
            <main className="main-content">
                {/* User Profile Header */}
                <div className="profile-header">
                    <div className="profile-info">
                        <div className="profile-avatar-container">
                            <img
                                src="/api/placeholder/80/80"
                                alt="Profile"
                                className="profile-avatar"
                            />
                        </div>
                        <div className="profile-details">
                            <h2 className="profile-name">Jessica Parker</h2>
                            <p className="profile-email">jessica.parker@email.com</p>
                        </div>
                    </div>
                    <div className="points-container">
                        <div className="points-badge">
                            <Leaf className="points-icon" />
                            <div className="points-text">
                                <span className="points-label">Eco Points</span>
                                <span className="points-value">{userPoints}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="dashboard-grid">
                    {/* My Listings */}
                    <section className="dashboard-section">
                        <div className="section-header">
                            <h3 className="section-title">My Listings</h3>
                            <span className="section-count">({userListings.length})</span>
                        </div>
                        <div className="listings-grid">
                            {userListings.map((item) => (
                                <div key={item.id} className="listing-card">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="listing-image"
                                    />
                                    <div className="listing-content">
                                        <h4 className="listing-title">{item.title}</h4>
                                        <span className={`listing-status ${item.status === 'Available' ? 'status-available' : 'status-swapped'}`}>
                                            {item.status}
                                        </span>
                                        <div className="listing-actions">
                                            <button className="action-button edit-button">
                                                <Edit3 className="action-icon" />
                                            </button>
                                            <button className="action-button delete-button">
                                                <Trash2 className="action-icon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Upload New Item */}
                    {/* <section className="dashboard-section">
                        <div className="upload-section">
                            <div className="upload-card">
                                <div className="upload-icon-container">
                                    <Plus className="upload-icon" />
                                </div>
                                <h3 className="upload-title">List a New Clothing Item</h3>
                                <p className="upload-description">Share your preloved clothes with the community</p>
                                <button className="upload-button">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </section> */}

                    {/* My Swaps */}
                    <section className="dashboard-section swaps-section">
                        <div className="section-header">
                            <h3 className="section-title">My Swaps</h3>
                        </div>

                        {/* Ongoing Swaps */}
                        <div className="swaps-subsection">
                            <h4 className="subsection-title">Ongoing Swaps</h4>
                            <div className="swaps-list">
                                {ongoingSwaps.map((swap) => (
                                    <div key={swap.id} className="swap-card">
                                        <div className="swap-info">
                                            <span className="swap-item">{swap.item}</span>
                                            <span className="swap-partner">with {swap.partner}</span>
                                            <span className="swap-status">{swap.status}</span>
                                        </div>
                                        <button className="contact-button">
                                            <MessageCircle className="contact-icon" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Completed Swaps */}
                        <div className="swaps-subsection">
                            <h4 className="subsection-title">Completed Swaps</h4>
                            <div className="swaps-list">
                                {completedSwaps.map((swap) => (
                                    <div key={swap.id} className="swap-card completed">
                                        <div className="swap-info">
                                            <span className="swap-item">{swap.item}</span>
                                            <span className="swap-partner">with {swap.partner}</span>
                                            <div className="swap-date">
                                                <Calendar className="date-icon" />
                                                <span>{new Date(swap.date).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h4 className="footer-logo">ReWear</h4>
                        <p className="footer-tagline">Sustainable Fashion Exchange</p>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="social-link">
                            <Facebook className="social-icon" />
                        </a>
                        <a href="#" className="social-link">
                            <Twitter className="social-icon" />
                        </a>
                        <a href="#" className="social-link">
                            <Instagram className="social-icon" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;