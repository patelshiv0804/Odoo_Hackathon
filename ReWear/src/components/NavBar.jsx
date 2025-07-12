import React from 'react';
import { Home, Search, Plus, User, Shirt } from 'lucide-react';

// interface NavBarProps {
//     activeTab: string;
//     setActiveTab: (tab: string) => void;
// }

const NavBar = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'explore', label: 'Explore', icon: Search },
        { id: 'add', label: 'Add Item', icon: Plus },
        { id: 'profile', label: 'Profile', icon: User }
    ];

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <Shirt className="logo-icon" />
                    ClothSwap
                </div>
                <nav className="nav">
                    {navItems.map(item => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                            >
                                <IconComponent size={18} />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default NavBar;