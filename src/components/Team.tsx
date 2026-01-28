import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

    return (
        <section id="team" className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0' }}>
            <div ref={ref} className="container" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 className={isVisible ? 'animate-fade-up' : ''} style={{ marginBottom: '3rem', color: 'var(--text-primary)' }}>Founder</h2>

                <div className={`animate-fade-up`} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    <div style={{
                        width: '250px',
                        height: '250px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                        marginBottom: '1rem',
                        border: '4px solid #fff'
                    }}>
                        <img
                            src="/yoga-pose-1.png"
                            alt="Sandhya Vijayadas"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div>
                        <h3 style={{ fontSize: '28px', marginBottom: '0.5rem', color: 'var(--accent-green)' }}>Sandhya Vijayadas</h3>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '18px' }}>Founder & Reiki Master</p>

                        <div style={{ textAlign: 'left', lineHeight: '1.8', color: 'var(--text-primary)', maxWidth: '800px', margin: '0 auto', fontSize: '16px' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Nature Universal Yoga Centre is a wellness space founded by Sandhya Vijayadas, created from a deep personal journey in holistic healing and wellness. As a qualified Reiki Master and a practitioner trained in multiple therapeutic modalities, Sandhya’s passion for conscious living and inner balance led to the birth of this center.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Nature Universal Yoga Centre believes in the power of community, connection, and conscious growth. This space is dedicated to supporting and encouraging wellness practitioners, instructors, and individuals who seek a deeper connection with themselves through yoga and holistic practices.
                            </p>
                            <p style={{ fontWeight: 500, fontStyle: 'italic', textAlign: 'center', marginTop: '2rem', fontSize: '18px', color: 'var(--accent-green)' }}>
                                "Nature Universal Yoga Centre would love to be a part of your growth journey.
                                We invite you to come explore, experience, and evolve with us."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
