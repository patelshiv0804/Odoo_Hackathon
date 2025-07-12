import React from 'react';
import { Heart, Star } from 'lucide-react';

const ClothingCard = ({ image, title, category, condition, points }) => {
    return (
        <div className="clothing-card">
            <div className="clothing-image-container">
                <img
                    src={image}
                    alt={title}
                    className="clothing-image"
                />
                <div className="clothing-favorite">
                    <Heart size={20} color="#EF4444" />
                </div>
                <div className="clothing-condition">
                    {condition}
                </div>
            </div>

            <div className="clothing-info">
                <div className="clothing-header">
                    <h3 className="clothing-title">
                        {title}
                    </h3>
                    <div className="clothing-rating">
                        <Star size={16} color="#F59E0B" fill="#F59E0B" />
                        <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>4.8</span>
                    </div>
                </div>
                <p className="clothing-category">{category}</p>
                <div className="clothing-footer">
                    <div className="clothing-points">
                        <span className="points-value">{points}</span>
                        <span className="points-label">points</span>
                    </div>
                    <button className="clothing-swap-btn">
                        Swap Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClothingCard;