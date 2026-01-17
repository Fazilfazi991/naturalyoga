import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'var(--bg-secondary)', padding: '0 20px' }}>
            <div className="container animate-fade-up">
                <h1 style={{ marginBottom: '1rem' }}>Nature Universal Yoga Center</h1>
                <p style={{ fontSize: '20px', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Dubai's Premier Holistic Yoga Sanctuary. Your Gateway to Mind, Body & Soul Harmony.
                </p>
                <div className="hero-buttons">
                    <a href="https://wa.me/971562050833" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>Claim 2 Trial Classes - AED 108</a>
                    <a href="https://wa.me/971562050833" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ textDecoration: 'none' }}>View Classes</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
