import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    ArrowRight,
    Upload,
    RefreshCw,
    ShoppingBag,
    Recycle,
    DollarSign,
    Users,
    Target,
    ChevronLeft,
    ChevronRight,
    Instagram,
    Linkedin,
    Mail,
    Sparkles
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import ClothingCard from '../components/ClothingCard';
import FloatingParticles from '../components/FloatingParticles';
import logo from '../assets/logo.png';
import '../styles/Homepage.css';    

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-slide for carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const featuredItems = [
        {
            image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Vintage Denim Jacket",
            category: "Outerwear",
            condition: "Like New",
            points: 150
        },
        {
            image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Floral Summer Dress",
            category: "Dresses",
            condition: "Excellent",
            points: 120
        },
        {
            image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Cozy Knit Sweater",
            category: "Knitwear",
            condition: "Good",
            points: 100
        },
        {
            image: "https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Elegant Blazer",
            category: "Formal",
            condition: "Like New",
            points: 180
        }
    ];

    const workSteps = [
        {
            icon: Upload,
            title: "List Your Items",
            description: "Upload photos and details of clothes you no longer wear. Set your preferred swap conditions and earn points."
        },
        {
            icon: RefreshCw,
            title: "Swap or Redeem",
            description: "Browse available items and either direct swap with other users or use your earned points to redeem items you love."
        },
        {
            icon: ShoppingBag,
            title: "Refresh Your Wardrobe",
            description: "Receive your new-to-you clothes and give your pre-loved items a new life with someone who will treasure them."
        }
    ];

    const valueProps = [
        {
            icon: Recycle,
            title: "♻️ Eco-Friendly Fashion",
            description: "Reduce textile waste and carbon footprint by giving clothes a second life instead of buying new."
        },
        {
            icon: DollarSign,
            title: "💸 Save Money, Get Style",
            description: "Refresh your wardrobe without breaking the bank. Earn points from your listings and redeem amazing items."
        },
        {
            icon: Users,
            title: "🌍 Community-Driven",
            description: "Join a passionate community of fashion lovers who believe in sustainable choices and sharing resources."
        },
        {
            icon: Target,
            title: "🎯 Gamified Experience",
            description: "Earn points, unlock badges, and level up your sustainable fashion journey with our fun reward system."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
    };

    return (
        <div className="app">
            {/* Navigation */}
            <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    {/* Logo */}
                    <div className="nav-logo">
                        <div className="nav-logo-icon">
                            <img src={logo} alt="ReWear Logo" className="nav-logo-image" />
                        </div>
                        <span className="nav-logo-text">ReWear</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="nav-links">
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#browse" className="nav-link">Browse</a>
                        <a href="#how-it-works" className="nav-link">How It Works</a>
                        <a href="#about" className="nav-link">About</a>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="nav-auth">
                        <button className="nav-login">Log In</button>
                        <button className="nav-signup">Sign Up</button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="nav-mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="nav-mobile">
                        <div className="nav-mobile-links">
                            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                            <a href="#browse" className="nav-link" onClick={() => setIsMenuOpen(false)}>Browse</a>
                            <a href="#how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
                        </div>
                        <div className="nav-mobile-auth">
                            <button className="nav-login">Log In</button>
                            <button className="nav-signup">Sign Up</button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-background"></div>
                <FloatingParticles />

                <div className="hero-container">
                    <h1 className="hero-title">
                        ♻️ ReWear: Swap Clothes. Save the Planet.
                    </h1>
                    <p className="hero-subtitle">
                        Join a community that exchanges fashion, not waste. Give your clothes a new life and discover amazing pre-loved pieces while making a positive impact on the environment.
                    </p>
                    <div className="hero-buttons">
                        <a href="#how-it-works" className="btn-primary">
                            <span>Start Swapping</span>
                            <ArrowRight size={20} />
                        </a>
                        <a href="#featured" className="btn-secondary">
                            Browse Items
                        </a>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="how-it-works">
                <div className="section-container">
                    <h2 className="section-title">How ReWear Works</h2>
                    <p className="section-subtitle">
                        Transform your wardrobe sustainably in three simple steps
                    </p>

                    <div className="steps-grid">
                        {workSteps.map((step, index) => (
                            <div key={index} className="step-card">
                                <div className="step-icon">
                                    <step.icon size={32} color="white" />
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Items Section */}
            <section id="featured" className="featured-items">
                <div className="section-container">
                    <h2 className="section-title">Featured Items</h2>
                    <p className="section-subtitle">
                        Discover amazing pre-loved pieces from our community
                    </p>

                    <div className="carousel-container">
                        <div
                            className="carousel-wrapper"
                            style={{ transform: `translateX(-${currentSlide * 300}px)` }}
                        >
                            {featuredItems.map((item, index) => (
                                <ClothingCard key={index} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className="carousel-controls">
                        <button className="carousel-btn" onClick={prevSlide}>
                            <ChevronLeft size={20} />
                        </button>
                        <button className="carousel-btn" onClick={nextSlide}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="value-props">
                <div className="section-container">
                    <h2 className="section-title">Why Choose ReWear?</h2>
                    <p className="section-subtitle">
                        More than just a clothing exchange - it's a movement towards sustainable fashion
                    </p>

                    <div className="value-grid">
                        {valueProps.map((prop, index) => (
                            <FeatureCard key={index} {...prop} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Banner */}
            {/* <section className="cta-banner">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Give Your Clothes a New Life?
          </h2>
          <p className="cta-description">
            Join thousands of fashion-forward individuals who are making a difference, one swap at a time.
          </p>
          <a href="#signup" className="cta-button">
            <span>List an Item Now</span>
            <Sparkles size={20} />
          </a>
        </div>
      </section> */}

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>ReWear</h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>
                                Building a sustainable future through community-driven fashion exchange.
                                Every swap makes a difference.
                            </p>
                            <div className="footer-social">
                                <a href="#" className="social-link">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="social-link">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="social-link">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <div className="footer-links">
                                <a href="#home" className="footer-link">Home</a>
                                <a href="#browse" className="footer-link">Browse Items</a>
                                <a href="#how-it-works" className="footer-link">How It Works</a>
                                <a href="#about" className="footer-link">About Us</a>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>Support</h3>
                            <div className="footer-links">
                                <a href="#" className="footer-link">Help Center</a>
                                <a href="#" className="footer-link">Contact Us</a>
                                <a href="#" className="footer-link">Community Guidelines</a>
                                <a href="#" className="footer-link">Safety Tips</a>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>Legal</h3>
                            <div className="footer-links">
                                <a href="#" className="footer-link">Privacy Policy</a>
                                <a href="#" className="footer-link">Terms of Service</a>
                                <a href="#" className="footer-link">Cookie Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2024 ReWear. Made with ❤️ by the ReWear Hackathon Team</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
