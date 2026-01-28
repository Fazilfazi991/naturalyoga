import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header" style={{ height: 'var(--header-height)', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-primary)', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div className="logo">
                    <img src="/logo-updated.png" alt="Nature Universal Yoga Logo" style={{ height: '70px', width: 'auto' }} />
                </div>

                <nav className="header-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#about" style={{ fontWeight: 600 }}>About</a>
                    <a href="#mind" style={{ fontWeight: 600 }}>Mind</a>
                    <a href="#body" style={{ fontWeight: 600 }}>Body</a>
                    <a href="#soul" style={{ fontWeight: 600 }}>Soul</a>
                    <a href="#offers" style={{ fontWeight: 600 }}>Offers</a>
                    <a href="#contact" style={{ fontWeight: 600 }}>Contact</a>
                    <a href="#team" style={{ fontWeight: 600 }}>Team</a>

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
