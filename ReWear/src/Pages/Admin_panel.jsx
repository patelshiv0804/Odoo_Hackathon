// import React, { useState } from 'react';
// import {
//     Users,
//     Shirt,
//     RefreshCw,
//     LogOut,
//     Settings,
//     User,
//     Search,
//     Filter,
//     Check,
//     X,
//     Ban,
//     Eye,
//     Flag,
//     Home,
//     Moon,
//     Sun,
//     Bell,
//     ChevronDown
// } from 'lucide-react';
// import '../styles/Admin_panel.css';

// const Admin_panel = () => {
//     const [activeTab, setActiveTab] = useState('dashboard');
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterStatus, setFilterStatus] = useState('all');
//     const [showModal, setShowModal] = useState(false);
//     const [modalType, setModalType] = useState('');
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [toast, setToast] = useState({ show: false, message: '', type: '' });

//     // Mock data
//     const mockUsers = [
//         { id: 1, username: 'sarah_eco', email: 'sarah@email.com', joinDate: '2024-01-15', status: 'active', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
//         { id: 2, username: 'green_mike', email: 'mike@email.com', joinDate: '2024-02-03', status: 'active', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
//         { id: 3, username: 'eco_anna', email: 'anna@email.com', joinDate: '2024-01-28', status: 'banned', avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400' },
//     ];

//     const mockListings = [
//         { id: 1, title: 'Vintage Denim Jacket', category: 'Jackets', uploader: 'sarah_eco', uploadDate: '2024-03-01', status: 'pending', image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400' },
//         { id: 2, title: 'Organic Cotton T-Shirt', category: 'Tops', uploader: 'green_mike', uploadDate: '2024-03-02', status: 'approved', image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400' },
//         { id: 3, title: 'Sustainable Wool Sweater', category: 'Sweaters', uploader: 'eco_anna', uploadDate: '2024-03-03', status: 'rejected', image: 'https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg?auto=compress&cs=tinysrgb&w=400' },
//     ];

//     const mockSwaps = [
//         { id: 1, requester: 'sarah_eco', uploader: 'green_mike', itemTitle: 'Organic Cotton T-Shirt', date: '2024-03-05', status: 'in-progress' },
//         { id: 2, requester: 'eco_anna', uploader: 'sarah_eco', itemTitle: 'Vintage Denim Jacket', date: '2024-03-04', status: 'completed' },
//         { id: 3, requester: 'green_mike', uploader: 'eco_anna', itemTitle: 'Sustainable Wool Sweater', date: '2024-03-03', status: 'cancelled' },
//     ];

//     const dashboardStats = {
//         totalUsers: 1247,
//         activeUsers: 1156,
//         pendingListings: 23,
//         totalListings: 892,
//         activeSwaps: 45,
//         completedSwaps: 756
//     };

//     const showToast = (message, type) => {
//         setToast({ show: true, message, type });
//         setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
//     };

//     const handleAction = (action, item) => {
//         setSelectedItem(item);
//         setModalType(action);
//         setShowModal(true);
//     };

//     const confirmAction = () => {
//         showToast(`Action ${modalType} completed successfully!`, 'success');
//         setShowModal(false);
//     };

//     const renderDashboard = () => (
//         <div className="dashboard">
//             <div className="dashboard-stats">
//                 <div className="stat-card">
//                     <div className="stat-icon users">
//                         <Users size={24} />
//                     </div>
//                     <div className="stat-content">
//                         <h3>{dashboardStats.totalUsers}</h3>
//                         <p>Total Users</p>
//                         <span className="stat-subtitle">{dashboardStats.activeUsers} active</span>
//                     </div>
//                 </div>

//                 <div className="stat-card">
//                     <div className="stat-icon listings">
//                         <Shirt size={24} />
//                     </div>
//                     <div className="stat-content">
//                         <h3>{dashboardStats.totalListings}</h3>
//                         <p>Total Listings</p>
//                         <span className="stat-subtitle">{dashboardStats.pendingListings} pending</span>
//                     </div>
//                 </div>

//                 <div className="stat-card">
//                     <div className="stat-icon swaps">
//                         <RefreshCw size={24} />
//                     </div>
//                     <div className="stat-content">
//                         <h3>{dashboardStats.completedSwaps}</h3>
//                         <p>Completed Swaps</p>
//                         <span className="stat-subtitle">{dashboardStats.activeSwaps} active</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="recent-activity">
//                 <h3>Recent Activity</h3>
//                 <div className="activity-list">
//                     <div className="activity-item">
//                         <div className="activity-icon pending">
//                             <Shirt size={16} />
//                         </div>
//                         <div className="activity-content">
//                             <p><strong>New listing</strong> awaiting approval</p>
//                             <span>Vintage Denim Jacket by sarah_eco</span>
//                         </div>
//                         <span className="activity-time">2 min ago</span>
//                     </div>
//                     <div className="activity-item">
//                         <div className="activity-icon success">
//                             <Check size={16} />
//                         </div>
//                         <div className="activity-content">
//                             <p><strong>Swap completed</strong></p>
//                             <span>Between eco_anna and sarah_eco</span>
//                         </div>
//                         <span className="activity-time">1 hour ago</span>
//                     </div>
//                     <div className="activity-item">
//                         <div className="activity-icon users">
//                             <Users size={16} />
//                         </div>
//                         <div className="activity-content">
//                             <p><strong>New user registered</strong></p>
//                             <span>sustainable_sam joined ReWear</span>
//                         </div>
//                         <span className="activity-time">3 hours ago</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     const renderUsers = () => (
//         <div className="content-section">
//             <div className="section-header">
//                 <div className="search-filter-bar">
//                     <div className="search-box">
//                         <Search size={20} />
//                         <input
//                             type="text"
//                             placeholder="Search users..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>
//                     <div className="filter-dropdown">
//                         <Filter size={20} />
//                         <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
//                             <option value="all">All Users</option>
//                             <option value="active">Active</option>
//                             <option value="banned">Banned</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             <div className="users-grid">
//                 {mockUsers.map(user => (
//                     <div key={user.id} className="user-card">
//                         <div className="user-avatar">
//                             <img src={user.avatar} alt={user.username} />
//                             <span className={`status-indicator ${user.status}`}></span>
//                         </div>
//                         <div className="user-info">
//                             <h4>{user.username}</h4>
//                             <p>{user.email}</p>
//                             <span className="join-date">Joined {user.joinDate}</span>
//                         </div>
//                         <div className="user-actions">
//                             <button className="action-btn warning" onClick={() => handleAction('warning', user)}>
//                                 <Flag size={16} />
//                                 Warning
//                             </button>
//                             <button className="action-btn danger" onClick={() => handleAction('ban', user)}>
//                                 <Ban size={16} />
//                                 {user.status === 'banned' ? 'Unban' : 'Ban'}
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     const renderListings = () => (
//         <div className="content-section">
//             <div className="section-header">
//                 <div className="search-filter-bar">
//                     <div className="search-box">
//                         <Search size={20} />
//                         <input
//                             type="text"
//                             placeholder="Search listings..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>
//                     <div className="filter-dropdown">
//                         <Filter size={20} />
//                         <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
//                             <option value="all">All Listings</option>
//                             <option value="pending">Pending</option>
//                             <option value="approved">Approved</option>
//                             <option value="rejected">Rejected</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             <div className="listings-grid">
//                 {mockListings.map(listing => (
//                     <div key={listing.id} className="listing-card">
//                         <div className="listing-image">
//                             <img src={listing.image} alt={listing.title} />
//                             <span className={`status-badge ${listing.status}`}>{listing.status}</span>
//                         </div>
//                         <div className="listing-content">
//                             <h4>{listing.title}</h4>
//                             <p className="listing-category">{listing.category}</p>
//                             <div className="listing-meta">
//                                 <span>By {listing.uploader}</span>
//                                 <span>{listing.uploadDate}</span>
//                             </div>
//                         </div>
//                         <div className="listing-actions">
//                             <button className="action-btn secondary" onClick={() => handleAction('view', listing)}>
//                                 <Eye size={16} />
//                                 View
//                             </button>
//                             <button className="action-btn success" onClick={() => handleAction('approve', listing)}>
//                                 <Check size={16} />
//                                 Approve
//                             </button>
//                             <button className="action-btn danger" onClick={() => handleAction('reject', listing)}>
//                                 <X size={16} />
//                                 Reject
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     const renderSwaps = () => (
//         <div className="content-section">
//             <div className="section-header">
//                 <div className="search-filter-bar">
//                     <div className="search-box">
//                         <Search size={20} />
//                         <input
//                             type="text"
//                             placeholder="Search swaps..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                         />
//                     </div>
//                     <div className="filter-dropdown">
//                         <Filter size={20} />
//                         <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
//                             <option value="all">All Swaps</option>
//                             <option value="in-progress">In Progress</option>
//                             <option value="completed">Completed</option>
//                             <option value="cancelled">Cancelled</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             <div className="swaps-table">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Requester</th>
//                             <th>Item Owner</th>
//                             <th>Item</th>
//                             <th>Date</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {mockSwaps.map(swap => (
//                             <tr key={swap.id}>
//                                 <td>{swap.requester}</td>
//                                 <td>{swap.uploader}</td>
//                                 <td>{swap.itemTitle}</td>
//                                 <td>{swap.date}</td>
//                                 <td>
//                                     <span className={`status-badge ${swap.status}`}>
//                                         {swap.status.replace('-', ' ')}
//                                     </span>
//                                 </td>
//                                 <td>
//                                     <div className="table-actions">
//                                         <button className="action-btn secondary" onClick={() => handleAction('view', swap)}>
//                                             <Eye size={16} />
//                                         </button>
//                                         <button className="action-btn success" onClick={() => handleAction('complete', swap)}>
//                                             <Check size={16} />
//                                         </button>
//                                         <button className="action-btn warning" onClick={() => handleAction('flag', swap)}>
//                                             <Flag size={16} />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );

//     return (
//         <div className={`admin-panel ${isDarkMode ? 'dark' : ''}`}>
//             {/* Sidebar */}
//             <aside className="sidebar">
//                 <div className="sidebar-header">
//                     <h2>ReWear Admin</h2>
//                     <p>Sustainable Exchange</p>
//                 </div>

//                 <nav className="sidebar-nav">
//                     <button
//                         className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('dashboard')}
//                     >
//                         <Home size={20} />
//                         Dashboard
//                     </button>
//                     <button
//                         className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('users')}
//                     >
//                         <Users size={20} />
//                         Manage Users
//                     </button>
//                     <button
//                         className={`nav-item ${activeTab === 'listings' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('listings')}
//                     >
//                         <Shirt size={20} />
//                         Manage Listings
//                     </button>
//                     <button
//                         className={`nav-item ${activeTab === 'swaps' ? 'active' : ''}`}
//                         onClick={() => setActiveTab('swaps')}
//                     >
//                         <RefreshCw size={20} />
//                         Manage Swaps
//                     </button>
//                 </nav>

//                 <div className="sidebar-footer">
//                     <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
//                         {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
//                         {isDarkMode ? 'Light' : 'Dark'} Mode
//                     </button>
//                     <button className="nav-item logout">
//                         <LogOut size={20} />
//                         Logout
//                     </button>
//                 </div>
//             </aside>

//             {/* Main Content */}
//             <main className="main-content">
//                 {/* Header */}
//                 <header className="main-header">
//                     <div className="header-left">
//                         <h1>
//                             {activeTab === 'dashboard' && 'Dashboard Overview'}
//                             {activeTab === 'users' && 'Manage Users'}
//                             {activeTab === 'listings' && 'Manage Listings'}
//                             {activeTab === 'swaps' && 'Manage Swaps'}
//                         </h1>
//                     </div>
//                     <div className="header-right">
//                         <button className="notification-btn">
//                             <Bell size={20} />
//                             <span className="notification-badge">3</span>
//                         </button>
//                         <div className="admin-profile" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
//                             <img src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Admin" />
//                             <span>Admin User</span>
//                             <ChevronDown size={16} />
//                             {showProfileDropdown && (
//                                 <div className="profile-dropdown">
//                                     <a href="#profile"><User size={16} /> Profile</a>
//                                     <a href="#settings"><Settings size={16} /> Settings</a>
//                                     <a href="#logout"><LogOut size={16} /> Logout</a>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </header>

//                 {/* Content */}
//                 <div className="content">
//                     {activeTab === 'dashboard' && renderDashboard()}
//                     {activeTab === 'users' && renderUsers()}
//                     {activeTab === 'listings' && renderListings()}
//                     {activeTab === 'swaps' && renderSwaps()}
//                 </div>
//             </main>

//             {/* Modal */}
//             {showModal && (
//                 <div className="modal-overlay" onClick={() => setShowModal(false)}>
//                     <div className="modal" onClick={(e) => e.stopPropagation()}>
//                         <h3>Confirm Action</h3>
//                         <p>Are you sure you want to {modalType} this item?</p>
//                         <div className="modal-actions">
//                             <button className="btn secondary" onClick={() => setShowModal(false)}>Cancel</button>
//                             <button className="btn primary" onClick={confirmAction}>Confirm</button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* Toast */}
//             {toast.show && (
//                 <div className={`toast ${toast.type}`}>
//                     {toast.message}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Admin_panel;

import React, { useState, useEffect } from 'react';
import {
    Users,
    Shirt,
    RefreshCw,
    LogOut,
    Settings,
    User,
    Search,
    Filter,
    Check,
    X,
    Ban,
    Eye,
    Flag,
    Home,
    Moon,
    Sun,
    Bell,
    ChevronDown,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Clock,
    UserCheck,
    UserX,
    Trash2,
    Edit,
    Plus
} from 'lucide-react';
// import './AdminPanel.css';
import '../styles/Admin_panel.css';

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });
    const [selectedItems, setSelectedItems] = useState([]);
    const [showBulkActions, setShowBulkActions] = useState(false);

    // State for managing data
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'sarah_eco',
            email: 'sarah@email.com',
            joinDate: '2024-01-15',
            status: 'active',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
            totalListings: 12,
            completedSwaps: 8,
            warnings: 0
        },
        {
            id: 2,
            username: 'green_mike',
            email: 'mike@email.com',
            joinDate: '2024-02-03',
            status: 'active',
            avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
            totalListings: 7,
            completedSwaps: 5,
            warnings: 1
        },
        {
            id: 3,
            username: 'eco_anna',
            email: 'anna@email.com',
            joinDate: '2024-01-28',
            status: 'banned',
            avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
            totalListings: 3,
            completedSwaps: 2,
            warnings: 3
        },
        {
            id: 4,
            username: 'sustainable_sam',
            email: 'sam@email.com',
            joinDate: '2024-03-10',
            status: 'active',
            avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
            totalListings: 15,
            completedSwaps: 12,
            warnings: 0
        }
    ]);

    const [listings, setListings] = useState([
        {
            id: 1,
            title: 'Vintage Denim Jacket',
            category: 'Jackets',
            uploader: 'sarah_eco',
            uploadDate: '2024-03-01',
            status: 'pending',
            image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Classic vintage denim jacket in excellent condition',
            size: 'M',
            condition: 'Good',
            price: 45
        },
        {
            id: 2,
            title: 'Organic Cotton T-Shirt',
            category: 'Tops',
            uploader: 'green_mike',
            uploadDate: '2024-03-02',
            status: 'approved',
            image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '100% organic cotton, soft and comfortable',
            size: 'L',
            condition: 'Excellent',
            price: 25
        },
        {
            id: 3,
            title: 'Sustainable Wool Sweater',
            category: 'Sweaters',
            uploader: 'eco_anna',
            uploadDate: '2024-03-03',
            status: 'rejected',
            image: 'https://images.pexels.com/photos/1006073/pexels-photo-1006073.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Warm wool sweater, perfect for winter',
            size: 'S',
            condition: 'Fair',
            price: 35
        },
        {
            id: 4,
            title: 'Eco-Friendly Dress',
            category: 'Dresses',
            uploader: 'sustainable_sam',
            uploadDate: '2024-03-05',
            status: 'pending',
            image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: 'Beautiful summer dress made from recycled materials',
            size: 'M',
            condition: 'Excellent',
            price: 55
        }
    ]);

    const [swaps, setSwaps] = useState([
        {
            id: 1,
            requester: 'sarah_eco',
            uploader: 'green_mike',
            itemTitle: 'Organic Cotton T-Shirt',
            date: '2024-03-05',
            status: 'in-progress',
            requesterItem: 'Vintage Scarf',
            swapValue: 25
        },
        {
            id: 2,
            requester: 'eco_anna',
            uploader: 'sarah_eco',
            itemTitle: 'Vintage Denim Jacket',
            date: '2024-03-04',
            status: 'completed',
            requesterItem: 'Leather Boots',
            swapValue: 45
        },
        {
            id: 3,
            requester: 'green_mike',
            uploader: 'eco_anna',
            itemTitle: 'Sustainable Wool Sweater',
            date: '2024-03-03',
            status: 'cancelled',
            requesterItem: 'Cotton Pants',
            swapValue: 35
        },
        {
            id: 4,
            requester: 'sustainable_sam',
            uploader: 'sarah_eco',
            itemTitle: 'Summer Blouse',
            date: '2024-03-06',
            status: 'in-progress',
            requesterItem: 'Denim Skirt',
            swapValue: 30
        }
    ]);

    // Calculate dashboard stats dynamically
    const dashboardStats = {
        totalUsers: users.length,
        activeUsers: users.filter(user => user.status === 'active').length,
        bannedUsers: users.filter(user => user.status === 'banned').length,
        pendingListings: listings.filter(listing => listing.status === 'pending').length,
        totalListings: listings.length,
        approvedListings: listings.filter(listing => listing.status === 'approved').length,
        rejectedListings: listings.filter(listing => listing.status === 'rejected').length,
        activeSwaps: swaps.filter(swap => swap.status === 'in-progress').length,
        completedSwaps: swaps.filter(swap => swap.status === 'completed').length,
        cancelledSwaps: swaps.filter(swap => swap.status === 'cancelled').length
    };

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
    };

    const handleAction = (action, item) => {
        setSelectedItem(item);
        setModalType(action);
        setShowModal(true);
    };

    const confirmAction = () => {
        if (!selectedItem) return;

        switch (modalType) {
            case 'ban':
                handleUserAction(selectedItem.id, 'ban');
                break;
            case 'unban':
                handleUserAction(selectedItem.id, 'unban');
                break;
            case 'warning':
                handleUserAction(selectedItem.id, 'warning');
                break;
            case 'approve':
                handleListingAction(selectedItem.id, 'approved');
                break;
            case 'reject':
                handleListingAction(selectedItem.id, 'rejected');
                break;
            case 'complete':
                handleSwapAction(selectedItem.id, 'completed');
                break;
            case 'cancel':
                handleSwapAction(selectedItem.id, 'cancelled');
                break;
            case 'flag':
                handleSwapAction(selectedItem.id, 'flagged');
                break;
            case 'delete':
                handleDeleteAction();
                break;
            default:
                break;
        }
        setShowModal(false);
        setSelectedItem(null);
    };

    const handleUserAction = (userId, action) => {
        setUsers(prevUsers =>
            prevUsers.map(user => {
                if (user.id === userId) {
                    switch (action) {
                        case 'ban':
                            showToast(`User ${user.username} has been banned`, 'warning');
                            return { ...user, status: 'banned' };
                        case 'unban':
                            showToast(`User ${user.username} has been unbanned`, 'success');
                            return { ...user, status: 'active' };
                        case 'warning':
                            showToast(`Warning sent to ${user.username}`, 'info');
                            return { ...user, warnings: user.warnings + 1 };
                        default:
                            return user;
                    }
                }
                return user;
            })
        );
    };

    const handleListingAction = (listingId, newStatus) => {
        setListings(prevListings =>
            prevListings.map(listing => {
                if (listing.id === listingId) {
                    const statusText = newStatus === 'approved' ? 'approved' : 'rejected';
                    showToast(`Listing "${listing.title}" has been ${statusText}`,
                        newStatus === 'approved' ? 'success' : 'warning');
                    return { ...listing, status: newStatus };
                }
                return listing;
            })
        );
    };

    const handleSwapAction = (swapId, newStatus) => {
        setSwaps(prevSwaps =>
            prevSwaps.map(swap => {
                if (swap.id === swapId) {
                    let message = '';
                    let type = 'info';

                    switch (newStatus) {
                        case 'completed':
                            message = `Swap between ${swap.requester} and ${swap.uploader} marked as completed`;
                            type = 'success';
                            break;
                        case 'cancelled':
                            message = `Swap between ${swap.requester} and ${swap.uploader} has been cancelled`;
                            type = 'warning';
                            break;
                        case 'flagged':
                            message = `Swap between ${swap.requester} and ${swap.uploader} has been flagged for review`;
                            type = 'warning';
                            break;
                        default:
                            message = `Swap status updated`;
                    }

                    showToast(message, type);
                    return { ...swap, status: newStatus };
                }
                return swap;
            })
        );
    };

    const handleDeleteAction = () => {
        if (activeTab === 'users') {
            setUsers(prevUsers => prevUsers.filter(user => user.id !== selectedItem.id));
            showToast(`User ${selectedItem.username} has been deleted`, 'error');
        } else if (activeTab === 'listings') {
            setListings(prevListings => prevListings.filter(listing => listing.id !== selectedItem.id));
            showToast(`Listing "${selectedItem.title}" has been deleted`, 'error');
        }
    };

    const handleBulkAction = (action) => {
        if (selectedItems.length === 0) {
            showToast('Please select items first', 'warning');
            return;
        }

        switch (action) {
            case 'approve':
                selectedItems.forEach(id => handleListingAction(id, 'approved'));
                showToast(`${selectedItems.length} listings approved`, 'success');
                break;
            case 'reject':
                selectedItems.forEach(id => handleListingAction(id, 'rejected'));
                showToast(`${selectedItems.length} listings rejected`, 'warning');
                break;
            case 'delete':
                if (activeTab === 'listings') {
                    setListings(prevListings =>
                        prevListings.filter(listing => !selectedItems.includes(listing.id))
                    );
                }
                showToast(`${selectedItems.length} items deleted`, 'error');
                break;
            default:
                break;
        }

        setSelectedItems([]);
        setShowBulkActions(false);
    };

    const toggleItemSelection = (itemId) => {
        setSelectedItems(prev => {
            const newSelection = prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId];

            setShowBulkActions(newSelection.length > 0);
            return newSelection;
        });
    };

    const selectAllItems = () => {
        let allIds = [];
        if (activeTab === 'listings') {
            allIds = getFilteredListings().map(listing => listing.id);
        }

        if (selectedItems.length === allIds.length) {
            setSelectedItems([]);
            setShowBulkActions(false);
        } else {
            setSelectedItems(allIds);
            setShowBulkActions(allIds.length > 0);
        }
    };

    // Filter functions
    const getFilteredUsers = () => {
        return users.filter(user => {
            const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
            return matchesSearch && matchesFilter;
        });
    };

    const getFilteredListings = () => {
        return listings.filter(listing => {
            const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                listing.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                listing.uploader.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filterStatus === 'all' || listing.status === filterStatus;
            return matchesSearch && matchesFilter;
        });
    };

    const getFilteredSwaps = () => {
        return swaps.filter(swap => {
            const matchesSearch = swap.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
                swap.uploader.toLowerCase().includes(searchTerm.toLowerCase()) ||
                swap.itemTitle.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filterStatus === 'all' || swap.status === filterStatus;
            return matchesSearch && matchesFilter;
        });
    };

    // Clear search and filters when switching tabs
    useEffect(() => {
        setSearchTerm('');
        setFilterStatus('all');
        setSelectedItems([]);
        setShowBulkActions(false);
    }, [activeTab]);

    const renderDashboard = () => (
        <div className="dashboard">
            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon users">
                        <Users size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.totalUsers}</h3>
                        <p>Total Users</p>
                        <div className="stat-breakdown">
                            <span className="stat-item success">{dashboardStats.activeUsers} active</span>
                            <span className="stat-item danger">{dashboardStats.bannedUsers} banned</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon listings">
                        <Shirt size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.totalListings}</h3>
                        <p>Total Listings</p>
                        <div className="stat-breakdown">
                            <span className="stat-item warning">{dashboardStats.pendingListings} pending</span>
                            <span className="stat-item success">{dashboardStats.approvedListings} approved</span>
                        </div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon swaps">
                        <RefreshCw size={24} />
                    </div>
                    <div className="stat-content">
                        <h3>{dashboardStats.completedSwaps}</h3>
                        <p>Completed Swaps</p>
                        <div className="stat-breakdown">
                            <span className="stat-item info">{dashboardStats.activeSwaps} active</span>
                            <span className="stat-item secondary">{dashboardStats.cancelledSwaps} cancelled</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="recent-activity">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                        <div className="activity-item">
                            <div className="activity-icon pending">
                                <Clock size={16} />
                            </div>
                            <div className="activity-content">
                                <p><strong>New listing</strong> awaiting approval</p>
                                <span>Vintage Denim Jacket by sarah_eco</span>
                            </div>
                            <span className="activity-time">2 min ago</span>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon success">
                                <CheckCircle size={16} />
                            </div>
                            <div className="activity-content">
                                <p><strong>Swap completed</strong></p>
                                <span>Between eco_anna and sarah_eco</span>
                            </div>
                            <span className="activity-time">1 hour ago</span>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon users">
                                <UserCheck size={16} />
                            </div>
                            <div className="activity-content">
                                <p><strong>New user registered</strong></p>
                                <span>sustainable_sam joined ReWear</span>
                            </div>
                            <span className="activity-time">3 hours ago</span>
                        </div>
                        <div className="activity-item">
                            <div className="activity-icon warning">
                                <AlertTriangle size={16} />
                            </div>
                            <div className="activity-content">
                                <p><strong>User flagged</strong></p>
                                <span>Multiple reports on eco_anna</span>
                            </div>
                            <span className="activity-time">5 hours ago</span>
                        </div>
                    </div>
                </div>

                <div className="quick-actions">
                    <h3>Quick Actions</h3>
                    <div className="action-grid">
                        <button
                            className="quick-action-btn"
                            onClick={() => setActiveTab('listings')}
                        >
                            <Clock size={20} />
                            <span>Review Pending</span>
                            <span className="badge">{dashboardStats.pendingListings}</span>
                        </button>
                        <button
                            className="quick-action-btn"
                            onClick={() => setActiveTab('users')}
                        >
                            <Users size={20} />
                            <span>Manage Users</span>
                        </button>
                        <button
                            className="quick-action-btn"
                            onClick={() => setActiveTab('swaps')}
                        >
                            <RefreshCw size={20} />
                            <span>Active Swaps</span>
                            <span className="badge">{dashboardStats.activeSwaps}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderUsers = () => {
        const filteredUsers = getFilteredUsers();

        return (
            <div className="content-section">
                <div className="section-header">
                    <div className="search-filter-bar">
                        <div className="search-box">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="filter-dropdown">
                            <Filter size={20} />
                            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="all">All Users ({users.length})</option>
                                <option value="active">Active ({dashboardStats.activeUsers})</option>
                                <option value="banned">Banned ({dashboardStats.bannedUsers})</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="users-grid">
                    {filteredUsers.map(user => (
                        <div key={user.id} className="user-card">
                            <div className="user-avatar">
                                <img src={user.avatar} alt={user.username} />
                                <span className={`status-indicator ${user.status}`}></span>
                            </div>
                            <div className="user-info">
                                <h4>{user.username}</h4>
                                <p>{user.email}</p>
                                <span className="join-date">Joined {user.joinDate}</span>
                                <div className="user-stats">
                                    <span>{user.totalListings} listings</span>
                                    <span>{user.completedSwaps} swaps</span>
                                    {user.warnings > 0 && (
                                        <span className="warnings">{user.warnings} warnings</span>
                                    )}
                                </div>
                            </div>
                            <div className="user-actions">
                                <button
                                    className="action-btn secondary"
                                    onClick={() => handleAction('view', user)}
                                >
                                    <Eye size={16} />
                                    View
                                </button>
                                <button
                                    className="action-btn warning"
                                    onClick={() => handleAction('warning', user)}
                                >
                                    <Flag size={16} />
                                    Warning
                                </button>
                                <button
                                    className={`action-btn ${user.status === 'banned' ? 'success' : 'danger'}`}
                                    onClick={() => handleAction(user.status === 'banned' ? 'unban' : 'ban', user)}
                                >
                                    {user.status === 'banned' ? <UserCheck size={16} /> : <Ban size={16} />}
                                    {user.status === 'banned' ? 'Unban' : 'Ban'}
                                </button>
                                <button
                                    className="action-btn danger"
                                    onClick={() => handleAction('delete', user)}
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredUsers.length === 0 && (
                    <div className="empty-state">
                        <Users size={48} />
                        <h3>No users found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        );
    };

    const renderListings = () => {
        const filteredListings = getFilteredListings();

        return (
            <div className="content-section">
                <div className="section-header">
                    <div className="search-filter-bar">
                        <div className="search-box">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search listings..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="filter-dropdown">
                            <Filter size={20} />
                            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="all">All Listings ({listings.length})</option>
                                <option value="pending">Pending ({dashboardStats.pendingListings})</option>
                                <option value="approved">Approved ({dashboardStats.approvedListings})</option>
                                <option value="rejected">Rejected ({dashboardStats.rejectedListings})</option>
                            </select>
                        </div>
                        <div className="bulk-actions">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={selectedItems.length === filteredListings.length && filteredListings.length > 0}
                                    onChange={selectAllItems}
                                />
                                <span className="checkmark"></span>
                                Select All
                            </label>
                        </div>
                    </div>

                    {showBulkActions && (
                        <div className="bulk-action-bar">
                            <span>{selectedItems.length} items selected</span>
                            <div className="bulk-buttons">
                                <button
                                    className="action-btn success"
                                    onClick={() => handleBulkAction('approve')}
                                >
                                    <Check size={16} />
                                    Approve Selected
                                </button>
                                <button
                                    className="action-btn warning"
                                    onClick={() => handleBulkAction('reject')}
                                >
                                    <X size={16} />
                                    Reject Selected
                                </button>
                                <button
                                    className="action-btn danger"
                                    onClick={() => handleBulkAction('delete')}
                                >
                                    <Trash2 size={16} />
                                    Delete Selected
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="listings-grid">
                    {filteredListings.map(listing => (
                        <div key={listing.id} className="listing-card">
                            <div className="listing-checkbox">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(listing.id)}
                                        onChange={() => toggleItemSelection(listing.id)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="listing-image">
                                <img src={listing.image} alt={listing.title} />
                                <span className={`status-badge ${listing.status}`}>{listing.status}</span>
                            </div>
                            <div className="listing-content">
                                <h4>{listing.title}</h4>
                                <p className="listing-category">{listing.category}</p>
                                <div className="listing-details">
                                    <span>Size: {listing.size}</span>
                                    <span>Condition: {listing.condition}</span>
                                    <span className="price">${listing.price}</span>
                                </div>
                                <div className="listing-meta">
                                    <span>By {listing.uploader}</span>
                                    <span>{listing.uploadDate}</span>
                                </div>
                            </div>
                            <div className="listing-actions">
                                <button
                                    className="action-btn secondary"
                                    onClick={() => handleAction('view', listing)}
                                >
                                    <Eye size={16} />
                                    View
                                </button>
                                <button
                                    className="action-btn success"
                                    onClick={() => handleAction('approve', listing)}
                                    disabled={listing.status === 'approved'}
                                >
                                    <Check size={16} />
                                    Approve
                                </button>
                                <button
                                    className="action-btn danger"
                                    onClick={() => handleAction('reject', listing)}
                                    disabled={listing.status === 'rejected'}
                                >
                                    <X size={16} />
                                    Reject
                                </button>
                                <button
                                    className="action-btn danger"
                                    onClick={() => handleAction('delete', listing)}
                                >
                                    <Trash2 size={16} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredListings.length === 0 && (
                    <div className="empty-state">
                        <Shirt size={48} />
                        <h3>No listings found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        );
    };

    const renderSwaps = () => {
        const filteredSwaps = getFilteredSwaps();

        return (
            <div className="content-section">
                <div className="section-header">
                    <div className="search-filter-bar">
                        <div className="search-box">
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search swaps..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="filter-dropdown">
                            <Filter size={20} />
                            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="all">All Swaps ({swaps.length})</option>
                                <option value="in-progress">In Progress ({dashboardStats.activeSwaps})</option>
                                <option value="completed">Completed ({dashboardStats.completedSwaps})</option>
                                <option value="cancelled">Cancelled ({dashboardStats.cancelledSwaps})</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="swaps-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Requester</th>
                                <th>Item Owner</th>
                                <th>Requested Item</th>
                                <th>Offered Item</th>
                                <th>Value</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSwaps.map(swap => (
                                <tr key={swap.id}>
                                    <td>
                                        <div className="user-cell">
                                            <span className="username">{swap.requester}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="user-cell">
                                            <span className="username">{swap.uploader}</span>
                                        </div>
                                    </td>
                                    <td>{swap.itemTitle}</td>
                                    <td>{swap.requesterItem}</td>
                                    <td className="value">${swap.swapValue}</td>
                                    <td>{swap.date}</td>
                                    <td>
                                        <span className={`status-badge ${swap.status}`}>
                                            {swap.status.replace('-', ' ')}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button
                                                className="action-btn secondary"
                                                onClick={() => handleAction('view', swap)}
                                            >
                                                <Eye size={16} />
                                            </button>
                                            {swap.status === 'in-progress' && (
                                                <>
                                                    <button
                                                        className="action-btn success"
                                                        onClick={() => handleAction('complete', swap)}
                                                    >
                                                        <Check size={16} />
                                                    </button>
                                                    <button
                                                        className="action-btn warning"
                                                        onClick={() => handleAction('cancel', swap)}
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </>
                                            )}
                                            <button
                                                className="action-btn warning"
                                                onClick={() => handleAction('flag', swap)}
                                            >
                                                <Flag size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredSwaps.length === 0 && (
                    <div className="empty-state">
                        <RefreshCw size={48} />
                        <h3>No swaps found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={`admin-panel ${isDarkMode ? 'dark' : ''}`}>
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>ReWear Admin</h2>
                    <p>Sustainable Exchange</p>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <Home size={20} />
                        Dashboard
                        {dashboardStats.pendingListings > 0 && (
                            <span className="nav-badge">{dashboardStats.pendingListings}</span>
                        )}
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        <Users size={20} />
                        Manage Users
                        <span className="nav-count">{dashboardStats.totalUsers}</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'listings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('listings')}
                    >
                        <Shirt size={20} />
                        Manage Listings
                        {dashboardStats.pendingListings > 0 && (
                            <span className="nav-badge">{dashboardStats.pendingListings}</span>
                        )}
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'swaps' ? 'active' : ''}`}
                        onClick={() => setActiveTab('swaps')}
                    >
                        <RefreshCw size={20} />
                        Manage Swaps
                        {dashboardStats.activeSwaps > 0 && (
                            <span className="nav-count">{dashboardStats.activeSwaps}</span>
                        )}
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        {isDarkMode ? 'Light' : 'Dark'} Mode
                    </button>
                    <button className="nav-item logout">
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
                <header className="main-header">
                    <div className="header-left">
                        <h1>
                            {activeTab === 'dashboard' && 'Dashboard Overview'}
                            {activeTab === 'users' && 'Manage Users'}
                            {activeTab === 'listings' && 'Manage Listings'}
                            {activeTab === 'swaps' && 'Manage Swaps'}
                        </h1>
                        {activeTab !== 'dashboard' && (
                            <p className="header-subtitle">
                                {activeTab === 'users' && `${dashboardStats.totalUsers} total users`}
                                {activeTab === 'listings' && `${dashboardStats.totalListings} total listings`}
                                {activeTab === 'swaps' && `${swaps.length} total swaps`}
                            </p>
                        )}
                    </div>
                    <div className="header-right">
                        <button className="notification-btn">
                            <Bell size={20} />
                            {dashboardStats.pendingListings > 0 && (
                                <span className="notification-badge">{dashboardStats.pendingListings}</span>
                            )}
                        </button>
                        <div className="admin-profile" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                            <img src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Admin" />
                            <span>Admin User</span>
                            <ChevronDown size={16} />
                            {showProfileDropdown && (
                                <div className="profile-dropdown">
                                    <a href="#profile"><User size={16} /> Profile</a>
                                    <a href="#settings"><Settings size={16} /> Settings</a>
                                    <a href="#logout"><LogOut size={16} /> Logout</a>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="content">
                    {activeTab === 'dashboard' && renderDashboard()}
                    {activeTab === 'users' && renderUsers()}
                    {activeTab === 'listings' && renderListings()}
                    {activeTab === 'swaps' && renderSwaps()}
                </div>
            </main>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>
                                {modalType === 'ban' && 'Ban User'}
                                {modalType === 'unban' && 'Unban User'}
                                {modalType === 'warning' && 'Send Warning'}
                                {modalType === 'approve' && 'Approve Listing'}
                                {modalType === 'reject' && 'Reject Listing'}
                                {modalType === 'complete' && 'Complete Swap'}
                                {modalType === 'cancel' && 'Cancel Swap'}
                                {modalType === 'flag' && 'Flag for Review'}
                                {modalType === 'delete' && 'Delete Item'}
                                {modalType === 'view' && 'View Details'}
                            </h3>
                        </div>
                        <div className="modal-body">
                            {modalType === 'view' ? (
                                <div className="item-details">
                                    {selectedItem && activeTab === 'users' && (
                                        <div className="user-details">
                                            <img src={selectedItem.avatar} alt={selectedItem.username} className="detail-avatar" />
                                            <h4>{selectedItem.username}</h4>
                                            <p>{selectedItem.email}</p>
                                            <div className="detail-stats">
                                                <span>Joined: {selectedItem.joinDate}</span>
                                                <span>Status: {selectedItem.status}</span>
                                                <span>Listings: {selectedItem.totalListings}</span>
                                                <span>Swaps: {selectedItem.completedSwaps}</span>
                                                <span>Warnings: {selectedItem.warnings}</span>
                                            </div>
                                        </div>
                                    )}
                                    {selectedItem && activeTab === 'listings' && (
                                        <div className="listing-details">
                                            <img src={selectedItem.image} alt={selectedItem.title} className="detail-image" />
                                            <h4>{selectedItem.title}</h4>
                                            <p>{selectedItem.description}</p>
                                            <div className="detail-info">
                                                <span>Category: {selectedItem.category}</span>
                                                <span>Size: {selectedItem.size}</span>
                                                <span>Condition: {selectedItem.condition}</span>
                                                <span>Price: ${selectedItem.price}</span>
                                                <span>Uploader: {selectedItem.uploader}</span>
                                                <span>Upload Date: {selectedItem.uploadDate}</span>
                                            </div>
                                        </div>
                                    )}
                                    {selectedItem && activeTab === 'swaps' && (
                                        <div className="swap-details">
                                            <h4>Swap Details</h4>
                                            <div className="swap-info">
                                                <div className="swap-party">
                                                    <strong>Requester:</strong> {selectedItem.requester}
                                                    <span>Offering: {selectedItem.requesterItem}</span>
                                                </div>
                                                <div className="swap-arrow">⇄</div>
                                                <div className="swap-party">
                                                    <strong>Owner:</strong> {selectedItem.uploader}
                                                    <span>Item: {selectedItem.itemTitle}</span>
                                                </div>
                                            </div>
                                            <div className="detail-info">
                                                <span>Swap Value: ${selectedItem.swapValue}</span>
                                                <span>Date: {selectedItem.date}</span>
                                                <span>Status: {selectedItem.status}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <p>
                                    Are you sure you want to {modalType} this {activeTab.slice(0, -1)}?
                                    {modalType === 'delete' && ' This action cannot be undone.'}
                                </p>
                            )}
                        </div>
                        <div className="modal-actions">
                            <button className="btn secondary" onClick={() => setShowModal(false)}>
                                {modalType === 'view' ? 'Close' : 'Cancel'}
                            </button>
                            {modalType !== 'view' && (
                                <button
                                    className={`btn ${modalType === 'delete' ? 'danger' : 'primary'}`}
                                    onClick={confirmAction}
                                >
                                    Confirm
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {toast.show && (
                <div className={`toast ${toast.type}`}>
                    <div className="toast-content">
                        {toast.type === 'success' && <CheckCircle size={20} />}
                        {toast.type === 'warning' && <AlertTriangle size={20} />}
                        {toast.type === 'error' && <XCircle size={20} />}
                        {toast.type === 'info' && <Bell size={20} />}
                        <span>{toast.message}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;