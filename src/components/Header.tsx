import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-primary)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div className="logo">
                    <img src="/logo-new.png" alt="Nature Universal Logo" style={{ height: '50px', width: 'auto' }} />
                </div>

                <nav className="header-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#about" style={{ fontWeight: 600 }}>About</a>
                    <a href="#classes" style={{ fontWeight: 600 }}>Classes</a>
                    <a href="#promo" style={{ fontWeight: 600 }}>Offers</a>

                    <a
                        href="https://wa.me/971562050833"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '8px 16px', fontSize: '14px', textDecoration: 'none', display: 'inline-block' }}
                    >
                        Book Now
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
