```
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container animate-fade-up" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <h2>Yoga for Every-Body at Nature Universal</h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Nature Universal Yoga Center believes every body holds natural wisdom to self-heal.
                    Classical sessions ease beginners into mindful practice. Advanced Hatha Vinyasa flows
                    build strength and awareness for deeper journeys.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <img 
                        src="/yoga-everybody.png" 
                        alt="Yoga postures demonstrating flexibility and strength" 
                        style={{ 
                            maxWidth: '100%', 
                            height: 'auto', 
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                        }} 
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
```
