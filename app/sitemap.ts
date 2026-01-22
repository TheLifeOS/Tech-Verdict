# Create this file: app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual domain
  const baseUrl = 'https://laptopverdicts.com'

  // Static pages
  const staticPages = [
    '',
    '/reviews',
    '/compare',
    '/ai-finder',
    '/deals',
    '/best-laptops',
    '/gaming-laptops',
    '/business-laptops',
    '/budget-laptops',
    '/about',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // TODO: Later, fetch your review posts dynamically
  // Example:
  // const reviews = await getReviews()
  // const reviewPages = reviews.map(review => ({
  //   url: `${baseUrl}/reviews/${review.slug}`,
  //   lastModified: review.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // }))

  return [
    ...staticPages,
    // ...reviewPages, // Add when you have dynamic reviews
  ]
}
