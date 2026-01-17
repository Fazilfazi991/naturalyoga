import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: 'var(--bg-secondary)', padding: '0 20px' }}>
            <div className="container animate-fade-up">
                <h1 style={{ marginBottom: '1rem' }}>Nature Universal Yoga Center</h1>
                <p style={{ fontSize: '20px', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
                    Dubai's Premier Holistic Yoga Sanctuary. Your Gateway to Mind, Body & Soul Harmony.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn btn-primary">Claim 2 Trial Classes - AED 108</button>
                    <button className="btn btn-secondary">View Classes</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
