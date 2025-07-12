import React, { useState } from 'react';
import { Upload, X, Camera, Info, Plus, Shirt, Search } from 'lucide-react';
import '../styles/Add_items.css'
import NavBar from '../components/Nav_bar.jsx';
const AddNewItemPage = () => {
    const [images, setImages] = useState([]);
    const [dragActive, setDragActive] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        type: '',
        size: '',
        condition: '',
        tags: []
    });
    const [tagInput, setTagInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState('add'); // set default tab to "add"

    const categories = ['Men', 'Women', 'Kids', 'Unisex'];
    const types = ['Shirt', 'Dress', 'Pants', 'Jacket', 'Sweater', 'Skirt', 'Shorts', 'Accessories'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const conditions = ['New', 'Like New', 'Gently Used'];
    const suggestedTags = ['winter', 'summer', 'cotton', 'formal', 'casual', 'vintage', 'designer'];

    const previousListings = [
        { id: 1, title: 'Blue Denim Jacket', image: null },
        { id: 2, title: 'Floral Summer Dress', image: null },
        { id: 3, title: 'Black Leather Boots', image: null },
        { id: 4, title: 'Wool Winter Coat', image: null }
    ];

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFileInput = (e) => {
        const files = Array.from(e.target.files);
        handleFiles(files);
    };

    const handleFiles = (files) => {
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        const newImages = imageFiles.slice(0, 4 - images.length).map(file => ({
            file,
            url: URL.createObjectURL(file),
            id: Date.now() + Math.random()
        }));
        setImages(prev => [...prev, ...newImages]);
    };

    const removeImage = (id) => {
        setImages(prev => prev.filter(img => img.id !== id));
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const addTag = (tag) => {
        if (tag && !formData.tags.includes(tag)) {
            setFormData(prev => ({
                ...prev,
                tags: [...prev.tags, tag]
            }));
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove) => {
        setFormData(prev => ({
            ...prev,
            tags: prev.tags.filter(tag => tag !== tagToRemove)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        alert('Item submitted successfully!');
    };

    return (
        <div className="add-item-page">
            <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="main-content">
                <div className="container">
                    {/* Page Title */}
                    <div className="page-header">
                        <h1 className="page-title">Product Detail Page</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="search-container">
                        <div className="search-bar">
                            <Search className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search items..."
                                className="search-input"
                            />
                        </div>
                        <div className="user-menu">
                            <div className="user-avatar"></div>
                        </div>
                    </div>

                    {/* Main Layout */}
                    <div className="main-layout">
                        {/* Left Side - Image Upload */}
                        <div className="image-section">
                            <div
                                className={`upload-area ${dragActive ? 'drag-active' : ''} ${images.length > 0 ? 'has-images' : ''}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleFileInput}
                                    className="file-input"
                                    id="file-upload"
                                />

                                {images.length === 0 ? (
                                    <label htmlFor="file-upload" className="upload-label">
                                        <Upload className="upload-icon" />
                                        <span className="upload-text">Add Images</span>
                                    </label>
                                ) : (
                                    <div className="images-grid">
                                        {images.map((image) => (
                                            <div key={image.id} className="image-item">
                                                <img src={image.url} alt="Upload preview" className="uploaded-image" />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(image.id)}
                                                    className="remove-image"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>
                                        ))}
                                        {images.length < 4 && (
                                            <label htmlFor="file-upload" className="add-more-btn">
                                                <Plus className="add-icon" />
                                            </label>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Side - Product Description */}
                        <div className="description-section">
                            <div className="description-header">
                                <h2 className="section-title">Add Product Description</h2>
                            </div>

                            <div className="form-fields">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                        className="form-input title-input"
                                        placeholder="Item Title"
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => handleInputChange('description', e.target.value)}
                                        className="form-textarea description-input"
                                        placeholder="Describe your item in detail..."
                                        rows="8"
                                    />
                                </div>

                                <div className="form-row">
                                    <select
                                        value={formData.category}
                                        onChange={(e) => handleInputChange('category', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Category</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>

                                    <select
                                        value={formData.type}
                                        onChange={(e) => handleInputChange('type', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Type</option>
                                        {types.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-row">
                                    <select
                                        value={formData.size}
                                        onChange={(e) => handleInputChange('size', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Size</option>
                                        {sizes.map(size => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </select>

                                    <select
                                        value={formData.condition}
                                        onChange={(e) => handleInputChange('condition', e.target.value)}
                                        className="form-select"
                                    >
                                        <option value="">Condition</option>
                                        {conditions.map(condition => (
                                            <option key={condition} value={condition}>{condition}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="tags-section">
                                    <div className="tags-input">
                                        <input
                                            type="text"
                                            value={tagInput}
                                            onChange={(e) => setTagInput(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag(tagInput))}
                                            className="tag-input"
                                            placeholder="Add tags..."
                                        />
                                        <button
                                            type="button"
                                            onClick={() => addTag(tagInput)}
                                            className="add-tag-btn"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>

                                    {formData.tags.length > 0 && (
                                        <div className="tags-display">
                                            {formData.tags.map(tag => (
                                                <span key={tag} className="tag">
                                                    {tag}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTag(tag)}
                                                        className="remove-tag"
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="action-section">
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="submit-btn"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner"></div>
                                            Processing...
                                        </>
                                    ) : (
                                        'Available/Swap'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Previous Listings */}
                    <div className="previous-listings">
                        <h3 className="listings-title">Previous Listings:</h3>
                        <div className="listings-grid">
                            {previousListings.map(listing => (
                                <div key={listing.id} className="listing-card">
                                    <div className="listing-image">
                                        <Shirt className="placeholder-icon" />
                                    </div>
                                    <div className="listing-info">
                                        <span className="listing-title">{listing.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default AddNewItemPage;