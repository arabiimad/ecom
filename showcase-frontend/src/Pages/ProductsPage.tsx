import React from 'react';
import styles from './ProductsPage.module.css';

// Sample Product Data Interface
interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl?: string; // Optional image URL
  category: string;
}

// Sample Data
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'InnovateX Laptop',
    description: 'High-performance laptop for professionals and creatives. Features the latest Intel i9 processor, 32GB RAM, and a 1TB NVMe SSD.',
    price: '$1499.99',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=InnovateX+Laptop',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'EcoSustain Water Bottle',
    description: 'Durable and eco-friendly water bottle, made from recycled materials. Keeps drinks cold for 24 hours or hot for 12 hours.',
    price: '$29.99',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=EcoSustain+Bottle',
    category: 'Lifestyle',
  },
  {
    id: '3',
    name: 'ProGamer Mouse',
    description: 'Ergonomic gaming mouse with customizable DPI settings, RGB lighting, and 10 programmable buttons for the ultimate gaming experience.',
    price: '$79.99',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=ProGamer+Mouse',
    category: 'Gaming Peripherals',
  },
  {
    id: '4',
    name: 'SmartHome Hub Gen 2',
    description: 'Control all your smart home devices with this centralized hub. Supports Zigbee, Z-Wave, and Wi-Fi.',
    price: '$129.99',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=SmartHome+Hub',
    category: 'Smart Home',
  },
];

const ProductsPage: React.FC = () => {
  return (
    <div className={styles.productsPage}>
      <header className={styles.pageHeader}>
        <h1>Our Products</h1>
        <p>Explore our curated selection of high-quality items.</p>
      </header>

      <section className={styles.filterSection}>
        {/* Placeholder for filter controls */}
        <p className={styles.filterPlaceholder}>Filter by category (coming soon)</p>
      </section>

      <main className={styles.productListGrid}>
        {sampleProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImageContainer}>
              <img
                src={product.imageUrl || 'https://via.placeholder.com/300x200.png?text=Product+Image'}
                alt={product.name}
                className={styles.productImage}
              />
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productCategory}>{product.category}</p>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>{product.price}</p>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProductsPage;
