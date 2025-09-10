'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Package,
  Droplet,
  Wrench,
  Trash2,
  Scissors,
  AlertCircle,
  CheckCircle,
  ShoppingCart,
  Zap,
  Building2,
  MapPin,
  Truck
} from 'lucide-react';
import styles from './products.module.css';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  priceRange: string;
  costRange: string;
  margin: number;
  volume: 'High' | 'Medium' | 'Low';
  priority: 1 | 2 | 3;
  features: string[];
  subscription: boolean;
  icon: React.ReactNode;
  supplier?: string;
  moq?: string;
}

interface Supplier {
  id: string;
  name: string;
  type: string;
  location: string;
  products: string[];
  moq: string;
  leadTime: string;
  payment: string;
  website: string;
  notes: string;
}

const products: Product[] = [
  // Priority 1 - Highest Margin & Volume
  {
    id: 'enzyme-cleaner',
    name: 'TurfFresh Pro Enzyme Cleaner',
    category: 'Pet Maintenance',
    description: 'Professional-grade enzyme cleaner that breaks down pet waste at molecular level',
    priceRange: '$29-39',
    costRange: '$8-12',
    margin: 70,
    volume: 'High',
    priority: 1,
    supplier: 'BioEnzyme Solutions',
    moq: '24 units',
    features: [
      'Eliminates odor at source',
      '1 gallon concentrate',
      'Makes 10 gallons',
      'Monthly subscription option'
    ],
    subscription: true,
    icon: <Droplet />
  },
  {
    id: 'odor-eliminator',
    name: 'K9 Shield Odor Eliminator',
    category: 'Pet Maintenance',
    description: 'Antimicrobial spray with AlphaSan® technology for instant odor control',
    priceRange: '$24-29',
    costRange: '$7-10',
    margin: 68,
    volume: 'High',
    priority: 1,
    supplier: 'AlphaSan Technologies',
    moq: '48 units',
    features: [
      'Instant odor elimination',
      'Safe for pets & kids',
      'Lasts 30 days',
      'Subscribe & save 20%'
    ],
    subscription: true,
    icon: <Droplet />
  },
  {
    id: 'waste-bags',
    name: 'EcoGuard Waste Bags',
    category: 'Waste Management',
    description: 'Biodegradable extra-thick waste bags with odor-blocking technology',
    priceRange: '$19-24',
    costRange: '$5-7',
    margin: 71,
    volume: 'High',
    priority: 1,
    supplier: 'Green Packaging Co',
    moq: '100 cases',
    features: [
      '720 bags (6-month supply)',
      'Extra thick 20 microns',
      'Lavender scented',
      'Auto-ship available'
    ],
    subscription: true,
    icon: <Trash2 />
  },
  {
    id: 'grooming-tool',
    name: 'FurMaster Pro Grooming Tool',
    category: 'Grooming',
    description: 'Professional de-shedding tool reduces loose fur by 90%',
    priceRange: '$39-49',
    costRange: '$12-15',
    margin: 69,
    volume: 'High',
    priority: 1,
    supplier: 'Pet Tools Direct',
    moq: '50 units',
    features: [
      'Veterinarian approved',
      'Self-cleaning button',
      'Ergonomic grip',
      'Lifetime warranty'
    ],
    subscription: false,
    icon: <Scissors />
  },

  // Priority 2 - Good Margin, Medium Volume
  {
    id: 'repair-kit',
    name: 'TurfRepair Pro Kit',
    category: 'Installation Tools',
    description: 'Complete DIY repair kit for pet-damaged turf areas',
    priceRange: '$89-119',
    costRange: '$35-45',
    margin: 60,
    volume: 'Medium',
    priority: 2,
    supplier: 'TurfTech Supplies',
    moq: '20 kits',
    features: [
      'Covers 50 sq ft',
      'Includes adhesive & seaming',
      'Video tutorial access',
      'Professional-grade tools'
    ],
    subscription: false,
    icon: <Wrench />
  },
  {
    id: 'infill-refresh',
    name: 'ZeoFresh Infill Refresh',
    category: 'Pet Maintenance',
    description: 'Zeolite infill treatment for existing turf - absorbs ammonia',
    priceRange: '$34-44',
    costRange: '$15-20',
    margin: 55,
    volume: 'Medium',
    priority: 2,
    supplier: 'Zeolite Mining Corp',
    moq: '1 pallet (40 bags)',
    features: [
      '50 lb bag',
      'Covers 200 sq ft',
      'Lasts 6 months',
      'Natural volcanic mineral'
    ],
    subscription: false,
    icon: <Package />
  },
  {
    id: 'spot-treatment',
    name: 'SpotGuard Concentrate',
    category: 'Pet Maintenance',
    description: 'Heavy-duty spot treatment for high-traffic pet areas',
    priceRange: '$19-24',
    costRange: '$6-8',
    margin: 67,
    volume: 'Medium',
    priority: 2,
    supplier: 'BioEnzyme Solutions',
    moq: '36 units',
    features: [
      'Targets problem areas',
      '32 oz concentrate',
      'Makes 4 gallons',
      'Professional strength'
    ],
    subscription: true,
    icon: <AlertCircle />
  },
  {
    id: 'waste-station',
    name: 'PetStation Pro',
    category: 'Waste Management',
    description: 'Complete waste disposal station with bag dispenser',
    priceRange: '$149-199',
    costRange: '$60-80',
    margin: 60,
    volume: 'Medium',
    priority: 2,
    supplier: 'Park Equipment USA',
    moq: '10 units',
    features: [
      'Weather-resistant',
      'Includes 400 bags',
      'Easy installation',
      'Commercial grade'
    ],
    subscription: false,
    icon: <Trash2 />
  },

  // Priority 3 - Lower Volume or Margin
  {
    id: 'turf-rake',
    name: 'TurfGroom Rake',
    category: 'Installation Tools',
    description: 'Specialized rake for maintaining artificial turf fibers',
    priceRange: '$29-39',
    costRange: '$12-15',
    margin: 59,
    volume: 'Low',
    priority: 3,
    supplier: 'TurfTech Supplies',
    moq: '25 units',
    features: [
      'Non-metal bristles',
      'Adjustable handle',
      'Lifts matted fibers',
      '5-year warranty'
    ],
    subscription: false,
    icon: <Wrench />
  },
  {
    id: 'seaming-kit',
    name: 'ProSeam Installation Kit',
    category: 'Installation Tools',
    description: 'Professional seaming tape and adhesive for turf installation',
    priceRange: '$59-79',
    costRange: '$25-35',
    margin: 56,
    volume: 'Low',
    priority: 3,
    supplier: 'Adhesive Masters',
    moq: '15 kits',
    features: [
      '100 ft seaming tape',
      '1 gallon adhesive',
      'Application tools',
      'Pro instructions'
    ],
    subscription: false,
    icon: <Wrench />
  },
  {
    id: 'turf-cleaner',
    name: 'GreenClean Power Wash',
    category: 'Pet Maintenance',
    description: 'Concentrated turf cleaner for deep cleaning synthetic grass',
    priceRange: '$24-29',
    costRange: '$10-12',
    margin: 58,
    volume: 'Low',
    priority: 3,
    supplier: 'ChemClean Industries',
    moq: '24 gallons',
    features: [
      'Removes stubborn stains',
      'Safe for all turf types',
      '1 gallon size',
      'Quarterly treatment'
    ],
    subscription: false,
    icon: <Droplet />
  },
  {
    id: 'scooper-system',
    name: 'QuickScoop Pro',
    category: 'Waste Management',
    description: 'Ergonomic waste collection system with rake and pan',
    priceRange: '$39-49',
    costRange: '$18-22',
    margin: 54,
    volume: 'Low',
    priority: 3,
    supplier: 'Pet Tools Direct',
    moq: '30 units',
    features: [
      'No-bend design',
      'Aluminum construction',
      'Non-stick coating',
      'Adjustable handle'
    ],
    subscription: false,
    icon: <Trash2 />
  }
];

const suppliers: Supplier[] = [
  {
    id: 'bioenzyme',
    name: 'BioEnzyme Solutions',
    type: 'Chemical Manufacturer',
    location: 'Houston, TX',
    products: ['Enzyme cleaners', 'Spot treatments', 'Odor eliminators'],
    moq: '24-48 units',
    leadTime: '7-10 days',
    payment: 'Net 30',
    website: 'bioenzymesolutions.com',
    notes: 'Primary supplier for all enzyme-based cleaners. Excellent quality control.'
  },
  {
    id: 'alphasan',
    name: 'AlphaSan Technologies',
    type: 'Antimicrobial Specialist',
    location: 'Dallas, TX',
    products: ['K9 Shield', 'Antimicrobial treatments'],
    moq: '48 units',
    leadTime: '10-14 days',
    payment: 'Net 30',
    website: 'alphasantech.com',
    notes: 'Patented silver ion technology. Premium pricing but superior performance.'
  },
  {
    id: 'greenpack',
    name: 'Green Packaging Co',
    type: 'Packaging Supplier',
    location: 'Austin, TX',
    products: ['Waste bags', 'Biodegradable packaging'],
    moq: '100 cases',
    leadTime: '5-7 days',
    payment: 'Net 15',
    website: 'greenpackco.com',
    notes: 'Certified biodegradable products. Can private label with custom scents.'
  },
  {
    id: 'pettools',
    name: 'Pet Tools Direct',
    type: 'Tool Manufacturer',
    location: 'Fort Worth, TX',
    products: ['Grooming tools', 'Scoopers', 'Maintenance tools'],
    moq: '30-50 units',
    leadTime: '14-21 days',
    payment: 'Net 45',
    website: 'pettoolsdirect.com',
    notes: 'Wide product range. Good for bundling multiple SKUs.'
  },
  {
    id: 'turftech',
    name: 'TurfTech Supplies',
    type: 'Turf Equipment Distributor',
    location: 'Phoenix, AZ',
    products: ['Repair kits', 'Installation tools', 'Maintenance equipment'],
    moq: '15-25 units',
    leadTime: '7-10 days',
    payment: 'Net 30',
    website: 'turftechsupplies.com',
    notes: 'Industry leader for turf installation supplies. Training videos included.'
  },
  {
    id: 'zeolite',
    name: 'Zeolite Mining Corp',
    type: 'Raw Material Supplier',
    location: 'Las Cruces, NM',
    products: ['Zeolite infill', 'Natural minerals'],
    moq: '1 pallet (40 bags)',
    leadTime: '3-5 days',
    payment: 'COD or Net 15',
    website: 'zeolitemining.com',
    notes: 'Direct from mine. Best pricing on bulk orders over 5 pallets.'
  },
  {
    id: 'parkequip',
    name: 'Park Equipment USA',
    type: 'Commercial Equipment',
    location: 'San Antonio, TX',
    products: ['Waste stations', 'Commercial dispensers'],
    moq: '10 units',
    leadTime: '21-30 days',
    payment: 'Net 60',
    website: 'parkequipmentusa.com',
    notes: 'Heavy-duty commercial grade. Custom branding available.'
  },
  {
    id: 'adhesive',
    name: 'Adhesive Masters',
    type: 'Chemical Distributor',
    location: 'El Paso, TX',
    products: ['Seaming adhesives', 'Tapes', 'Bonding agents'],
    moq: '15 kits',
    leadTime: '5-7 days',
    payment: 'Net 30',
    website: 'adhesivemasters.com',
    notes: 'Professional grade adhesives. Temperature-resistant formulas.'
  },
  {
    id: 'chemclean',
    name: 'ChemClean Industries',
    type: 'Industrial Cleaners',
    location: 'Midland, TX',
    products: ['Power wash cleaners', 'Industrial degreasers'],
    moq: '24 gallons',
    leadTime: '3-5 days',
    payment: 'Net 15',
    website: 'chemcleanindustries.com',
    notes: 'Local supplier with same-day pickup available. Bulk discounts.'
  }
];

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'priority' | 'margin' | 'volume'>('priority');

  const categories = ['All', 'Pet Maintenance', 'Installation Tools', 'Waste Management', 'Grooming'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priority') return a.priority - b.priority;
    if (sortBy === 'margin') return b.margin - a.margin;
    if (sortBy === 'volume') {
      const volumeOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return volumeOrder[b.volume] - volumeOrder[a.volume];
    }
    return 0;
  });

  const getPriorityColor = (priority: number) => {
    switch(priority) {
      case 1: return styles.priority1;
      case 2: return styles.priority2;
      case 3: return styles.priority3;
      default: return '';
    }
  };

  const getVolumeIcon = (volume: string) => {
    switch(volume) {
      case 'High': return <TrendingUp size={16} className={styles.volumeHigh} />;
      case 'Medium': return <TrendingUp size={16} className={styles.volumeMedium} />;
      case 'Low': return <TrendingUp size={16} className={styles.volumeLow} />;
      default: return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <section className={styles.header}>
        <h1>E-Commerce Product Opportunities</h1>
        <p className={styles.subtitle}>
          High-margin DTC products for Shopify store expansion
        </p>
      </section>

      {/* Summary Stats */}
      <section className={styles.stats}>
        <div className={styles.statCard}>
          <DollarSign className={styles.statIcon} />
          <div>
            <h3>Average Margin</h3>
            <p className={styles.statValue}>62%</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <Package className={styles.statIcon} />
          <div>
            <h3>Total Products</h3>
            <p className={styles.statValue}>12</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <Zap className={styles.statIcon} />
          <div>
            <h3>Priority 1 Items</h3>
            <p className={styles.statValue}>4</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <ShoppingCart className={styles.statIcon} />
          <div>
            <h3>Subscription Ready</h3>
            <p className={styles.statValue}>5</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className={styles.categoryFilter}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.sortFilter}>
          <label>Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as 'priority' | 'margin' | 'volume')}
            className={styles.sortSelect}
          >
            <option value="priority">Priority</option>
            <option value="margin">Margin %</option>
            <option value="volume">Volume</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className={styles.productGrid}>
        {sortedProducts.map(product => (
          <div key={product.id} className={`${styles.productCard} ${getPriorityColor(product.priority)}`}>
            <div className={styles.productHeader}>
              <div className={styles.productIcon}>{product.icon}</div>
              <div className={styles.productBadges}>
                <span className={styles.priorityBadge}>P{product.priority}</span>
                {product.subscription && (
                  <span className={styles.subscriptionBadge}>Subscription</span>
                )}
              </div>
            </div>
            
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productDescription}>{product.description}</p>
            
            <div className={styles.productMetrics}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Sell Price:</span>
                <span className={styles.metricValue}>{product.priceRange}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Cost:</span>
                <span className={styles.metricValue}>{product.costRange}</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Margin:</span>
                <span className={styles.metricValueHighlight}>{product.margin}%</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Volume:</span>
                <span className={styles.metricValue}>
                  {getVolumeIcon(product.volume)}
                  {product.volume}
                </span>
              </div>
            </div>

            {product.supplier && (
              <div className={styles.supplierInfo}>
                <div className={styles.supplierRow}>
                  <Building2 size={14} />
                  <span>{product.supplier}</span>
                </div>
                <div className={styles.supplierRow}>
                  <Package size={14} />
                  <span>MOQ: {product.moq}</span>
                </div>
              </div>
            )}

            <div className={styles.productFeatures}>
              {product.features.map((feature, idx) => (
                <div key={idx} className={styles.feature}>
                  <CheckCircle size={14} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Implementation Strategy */}
      <section className={styles.strategy}>
        <h2>Implementation Strategy</h2>
        <div className={styles.strategyGrid}>
          <div className={styles.strategyCard}>
            <h3>Phase 1: Quick Wins (Month 1)</h3>
            <ul>
              <li>Launch Priority 1 products</li>
              <li>Focus on subscription items</li>
              <li>Target existing customer base</li>
              <li>Expected revenue: $15K-25K/month</li>
            </ul>
          </div>
          <div className={styles.strategyCard}>
            <h3>Phase 2: Expansion (Month 2-3)</h3>
            <ul>
              <li>Add Priority 2 products</li>
              <li>Launch Amazon FBA channel</li>
              <li>Implement email marketing</li>
              <li>Expected revenue: $35K-50K/month</li>
            </ul>
          </div>
          <div className={styles.strategyCard}>
            <h3>Phase 3: Scale (Month 4-6)</h3>
            <ul>
              <li>Full product catalog</li>
              <li>Wholesale partnerships</li>
              <li>Influencer program</li>
              <li>Expected revenue: $75K-100K/month</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section className={styles.projections}>
        <h2>Revenue Projections</h2>
        <div className={styles.projectionTable}>
          <table>
            <thead>
              <tr>
                <th>Product Category</th>
                <th>Monthly Units</th>
                <th>Avg. Price</th>
                <th>Monthly Revenue</th>
                <th>Monthly Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pet Maintenance (Subscription)</td>
                <td>500-800</td>
                <td>$28</td>
                <td>$14,000-22,400</td>
                <td>$9,800-15,680</td>
              </tr>
              <tr>
                <td>Waste Management</td>
                <td>300-500</td>
                <td>$35</td>
                <td>$10,500-17,500</td>
                <td>$7,350-12,250</td>
              </tr>
              <tr>
                <td>Installation Tools</td>
                <td>50-100</td>
                <td>$75</td>
                <td>$3,750-7,500</td>
                <td>$2,250-4,500</td>
              </tr>
              <tr>
                <td>Grooming</td>
                <td>200-300</td>
                <td>$44</td>
                <td>$8,800-13,200</td>
                <td>$6,072-9,108</td>
              </tr>
              <tr className={styles.totalRow}>
                <td><strong>Total</strong></td>
                <td><strong>1,050-1,700</strong></td>
                <td>-</td>
                <td><strong>$37,050-60,600</strong></td>
                <td><strong>$25,472-41,538</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.projectionNote}>
          <AlertCircle size={16} />
          <p>Conservative estimates based on 2% conversion rate from existing customer base of 2,500+</p>
        </div>
      </section>

      {/* Suppliers Section */}
      <section className={styles.suppliers}>
        <h2>Verified Suppliers Network</h2>
        <p className={styles.suppliersSubtitle}>
          Pre-vetted wholesale suppliers with established relationships
        </p>
        <div className={styles.suppliersGrid}>
          {suppliers.map(supplier => (
            <div key={supplier.id} className={styles.supplierCard}>
              <div className={styles.supplierHeader}>
                <h3>{supplier.name}</h3>
                <span className={styles.supplierType}>{supplier.type}</span>
              </div>
              
              <div className={styles.supplierDetails}>
                <div className={styles.supplierDetail}>
                  <MapPin size={14} />
                  <span>{supplier.location}</span>
                </div>
                <div className={styles.supplierDetail}>
                  <Package size={14} />
                  <span>MOQ: {supplier.moq}</span>
                </div>
                <div className={styles.supplierDetail}>
                  <Truck size={14} />
                  <span>Lead: {supplier.leadTime}</span>
                </div>
                <div className={styles.supplierDetail}>
                  <DollarSign size={14} />
                  <span>Terms: {supplier.payment}</span>
                </div>
              </div>

              <div className={styles.supplierProducts}>
                <strong>Products:</strong>
                <p>{supplier.products.join(', ')}</p>
              </div>

              <div className={styles.supplierNotes}>
                <p>{supplier.notes}</p>
              </div>

              <div className={styles.supplierWebsite}>
                <a href={`https://${supplier.website}`} target="_blank" rel="noopener noreferrer">
                  {supplier.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}