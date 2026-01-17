import React from 'react';

const ProductsSection: React.FC = () => {
    const products = [
        { name: 'Eco-Friendly Yoga Mat', price: 'AED 120', image: 'https://placehold.co/300x300/4A7C59/FFFFFF?text=Yoga+Mat' },
        { name: 'Cork Yoga Block', price: 'AED 45', image: 'https://placehold.co/300x300/4A7C59/FFFFFF?text=Cork+Block' },
        { name: 'Cotton Yoga Strap', price: 'AED 35', image: 'https://placehold.co/300x300/4A7C59/FFFFFF?text=Yoga+Strap' },
        { name: 'Meditation Cushion', price: 'AED 150', image: 'https://placehold.co/300x300/4A7C59/FFFFFF?text=Cushion' },
    ];

    return (
        <section id="products" className="section" style={{ backgroundColor: 'var(--bg-light-green)' }}>
            <div className="container">
                <h2 className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Yoga Products</h2>
                <p className="animate-fade-up delay-100" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '-2rem', color: 'var(--text-secondary)' }}>
                    Enhance your practice with our curated selection of high-quality essentials.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {products.map((product, index) => (
                        <div key={index} className={`animate-fade-up delay-${(index + 2) * 100}`} style={{
                            backgroundColor: 'var(--bg-primary)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '18px', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{product.name}</h3>
                                <p style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '16px' }}>{product.price}</p>
                                <button className="btn btn-secondary" style={{ marginTop: '1rem', padding: '8px 16px', fontSize: '14px', width: '100%' }}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
