import React from 'react';

const Promo: React.FC = () => {
    return (
        <section id="promo" className="section" style={{ backgroundColor: 'var(--accent-green)', color: '#FFFFFF', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ color: '#FFFFFF', marginBottom: '1rem' }}>Start Your Journey Today</h2>
                <p style={{ fontSize: '20px', marginBottom: '2rem' }}>2 Trial Classes for AED 108. Experience our space, meet our teachers.</p>
                <button className="btn" style={{ backgroundColor: '#FFFFFF', color: 'var(--accent-green)' }}>Register Now</button>
            </div>
        </section>
    );
};

export default Promo;
