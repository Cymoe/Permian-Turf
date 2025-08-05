import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://permianturfpro.com';
  
  // Define all routes with their metadata
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/water-savings`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // Location pages
  const locationPages = [
    'artificial-turf-midland-tx',
    'synthetic-grass-odessa-tx',
    'commercial-turf-installation-permian-basin',
    'rv-park-landscaping-midland-odessa',
    'man-camp-turf-big-spring-tx',
  ];

  locationPages.forEach(slug => {
    routes.push({
      url: `${baseUrl}/location/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    });
  });

  // Blog pages
  routes.push({
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  });

  const blogPosts = [
    { slug: 'artificial-turf-perfect-for-permian-basin-climate', date: '2024-01-15' },
    { slug: 'top-5-rv-parks-midland-odessa-save-water', date: '2024-01-08' },
    { slug: 'oil-field-housing-smart-landscaping-solution', date: '2024-01-01' },
    { slug: 'calculating-water-savings-midland-drought-reality', date: '2023-12-25' },
  ];

  blogPosts.forEach(post => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    });
  });

  // Case Studies pages
  routes.push({
    url: `${baseUrl}/case-studies`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  });

  const caseStudies = [
    'midessa-rv-park-transformation',
    'eagle-ford-man-camp-success',
    'permian-plaza-apartments-renovation',
  ];

  caseStudies.forEach(study => {
    routes.push({
      url: `${baseUrl}/case-studies/${study}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    });
  });

  return routes;
}