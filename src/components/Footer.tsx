import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="section" style={{ backgroundColor: '#2C3E50', color: '#FFFFFF', padding: '60px 0' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div>
                    <h3 style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>Nature Universal Yoga Center</h3>
                    <p>F-29, The Market Mall, Green Community</p>
                    <p>Dubai Investment Park-1, Dubai</p>
                </div>
                <div>
                    <h3 style={{ color: '#FFFFFF', marginBottom: '1.5rem' }}>Contact Us</h3>
                    <p>📱 <a href="https://wa.me/971562050833" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>+971 56 205 0833</a></p>
                    <p>✉️ hello@natureuniversalyoga.com</p>
                    <p>🕒 Daily 7AM - 10PM</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '14px', opacity: 0.7 }}>
                &copy; {new Date().getFullYear()} Nature Universal Yoga Center. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
