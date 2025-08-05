'use client';

import { usePathname } from 'next/navigation';

export default function Schema() {
  const pathname = usePathname();
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://permianturfpro.com/#organization",
    "name": "Permian Turf Solutions",
    "image": "https://permianturfpro.com/logo.png",
    "logo": "https://permianturfpro.com/logo.png",
    "telephone": "(432) 555-0100",
    "email": "info@permianturfpro.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Business Park Dr",
      "addressLocality": "Midland",
      "addressRegion": "TX",
      "postalCode": "79701",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.9973,
      "longitude": -102.0779
    },
    "url": "https://permianturfpro.com",
    "sameAs": [
      "https://www.facebook.com/permianturfpro",
      "https://www.linkedin.com/company/permian-turf-solutions",
      "https://www.instagram.com/permianturfpro"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$-$$$",
    "servesCuisine": null,
    "acceptsReservations": null,
    "menu": null,
    "hasMap": "https://maps.google.com/?q=Permian+Turf+Solutions+Midland+TX",
    "areaServed": [
      {
        "@type": "City",
        "name": "Midland",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Odessa",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Big Spring",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Andrews",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Crane",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      }
    ],
    "description": "Permian Turf Solutions specializes in water-saving artificial turf installation for commercial properties, RV parks, and workforce housing in the Permian Basin. We help property managers reduce water usage by 70% while maintaining beautiful, maintenance-free landscapes.",
    "foundingDate": "2020",
    "slogan": "Save Water. Save Money. Still Stay Green.",
    "paymentAccepted": ["Cash", "Check", "Credit Card", "Invoice"],
    "currenciesAccepted": "USD",
    "legalName": "Permian Turf Solutions LLC",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 25
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Jake Thompson"
        },
        "reviewBody": "We're saving $8,000/month on water and our occupancy is up 15%. Best investment for our RV park."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Turf Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Turf Installation",
            "description": "Professional artificial turf installation for commercial properties including RV parks, apartment complexes, and office buildings."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workforce Housing Landscaping",
            "description": "Specialized turf solutions for man camps and oil field housing facilities, designed for heavy traffic and minimal maintenance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Turf Installation",
            "description": "High-quality artificial grass installation for residential properties, including yards, pool areas, and putting greens."
          }
        }
      ]
    }
  };

  // Page-specific schema additions
  const pageSchemas: { [key: string]: Record<string, unknown> } = {
    '/': {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://permianturfpro.com/"
      }
    },
    '/commercial': {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://permianturfpro.com/commercial",
        "name": "Commercial Turf Installation Services - Permian Basin",
        "description": "Professional artificial turf installation for commercial properties, RV parks, and workforce housing in Midland-Odessa."
      }
    },
    '/residential': {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://permianturfpro.com/residential",
        "name": "Residential Turf Installation - Midland & Odessa TX",
        "description": "Transform your home with beautiful, water-saving artificial grass. Perfect for West Texas climate."
      }
    },
    '/portfolio': {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://permianturfpro.com/portfolio",
        "name": "Turf Installation Portfolio - Before & After Projects",
        "description": "See our completed artificial turf installations across the Permian Basin. Real projects, real results."
      }
    },
    '/water-savings': {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://permianturfpro.com/water-savings",
        "name": "Water Savings Calculator - Artificial Turf ROI",
        "description": "Calculate how much water and money you can save with artificial turf in the Permian Basin."
      }
    },
    '/quote': {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://permianturfpro.com/quote",
        "name": "Get a Free Turf Installation Quote",
        "description": "Request a free quote for artificial turf installation in Midland, Odessa, and surrounding areas."
      },
      "potentialAction": {
        "@type": "ScheduleAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://permianturfpro.com/quote",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Free Turf Installation Quote"
        }
      }
    }
  };

  // Merge base schema with page-specific schema
  const currentPageSchema = pageSchemas[pathname] || {};
  const schema = { ...baseSchema, ...currentPageSchema };

  // Add breadcrumb schema for non-home pages
  const breadcrumbSchema = pathname !== '/' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://permianturfpro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1).replace('-', ' '),
        "item": `https://permianturfpro.com${pathname}`
      }
    ]
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}