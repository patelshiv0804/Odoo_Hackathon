import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, index }) => {
    return (
        <div
            className="feature-card"
            style={{ animationDelay: `${index * 200}ms` }}
        >
            <div className="feature-icon">
                <Icon size={32} color="white" />
            </div>
            <h3 className="feature-title">
                {title}
            </h3>
            <p className="feature-description">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;