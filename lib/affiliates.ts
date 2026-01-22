// ===== lib/affiliates.ts =====
// Affiliate link management system

export const AFFILIATE_PROGRAMS = {
  amazon: {
    tag: 'laptopverdicts-20', // Replace with your Amazon Associates ID
    baseUrl: 'https://amazon.com',
  },
  impact: {
    // Dell, HP, Lenovo use Impact.com
    dell: {
      clickId: 'YOUR_DELL_IMPACT_ID',
      baseUrl: 'https://www.anrdoezrs.net/click-XXXXX-XXXXX',
    },
    hp: {
      clickId: 'YOUR_HP_IMPACT_ID', 
      baseUrl: 'https://www.tkqlhce.com/click-XXXXX-XXXXX',
    },
  },
  bestbuy: {
    affiliateId: 'YOUR_BESTBUY_ID',
    baseUrl: 'https://www.bestbuy.com',
  },
}

/**
 * Generate affiliate link with proper tracking
 */
export function generateAffiliateLink(
  product: {
    name: string
    asin?: string // Amazon product ID
    url: string
    retailer: 'amazon' | 'dell' | 'hp' | 'bestbuy' | 'lenovo'
  },
  source: string = 'homepage'
): string {
  const { retailer, url, asin } = product

  switch (retailer) {
    case 'amazon':
      if (asin) {
        return `https://amazon.com/dp/${asin}?tag=${AFFILIATE_PROGRAMS.amazon.tag}&linkCode=ll1&linkId=${generateLinkId()}`
      }
      return `${url}?tag=${AFFILIATE_PROGRAMS.amazon.tag}`

    case 'dell':
      // Dell Impact.com affiliate link
      return `${AFFILIATE_PROGRAMS.impact.dell.baseUrl}?url=${encodeURIComponent(url)}&sid=${source}`

    case 'bestbuy':
      return `${url}?irclickid=${AFFILIATE_PROGRAMS.bestbuy.affiliateId}&ref=${source}`

    default:
      return url
  }
}

function generateLinkId(): string {
  return Math.random().toString(36).substring(2, 15)
}

/**
 * Track affiliate clicks for analytics
 */
export async function trackAffiliateClick(
  productName: string,
  retailer: string,
  position: string
): Promise<void> {
  try {
    // Send to your analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'affiliate_click', {
        product_name: productName,
        retailer: retailer,
        position: position,
      })
    }

    // Optional: Send to your own database for detailed tracking
    await fetch('/api/track-click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productName, retailer, position, timestamp: Date.now() }),
    })
  } catch (error) {
    console.error('Failed to track click:', error)
  }
}


// ===== components/AffiliateButton.tsx =====
// Reusable affiliate button component

'use client'

import { useState } from 'react'
import { generateAffiliateLink, trackAffiliateClick } from '@/lib/affiliates'

interface AffiliateButtonProps {
  product: {
    name: string
    asin?: string
    url: string
    retailer: 'amazon' | 'dell' | 'hp' | 'bestbuy' | 'lenovo'
    price: number
  }
  position?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function AffiliateButton({ 
  product, 
  position = 'review-body',
  variant = 'primary',
  className = ''
}: AffiliateButtonProps) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    trackAffiliateClick(product.name, product.retailer, position)
    setClicked(true)
  }

  const affiliateUrl = generateAffiliateLink(product, position)

  const baseStyles = variant === 'primary'
    ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-2xl'
    : 'bg-white/10 hover:bg-white/20 border border-white/20'

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${baseStyles} ${className}`}
    >
      <span className="mr-2">
        {clicked ? 'Opening...' : `Check Price on ${capitalize(product.retailer)}`}
      </span>
      <span className="text-sm opacity-75">${product.price}</span>
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


// ===== MONETIZATION STRATEGY =====

/**
 * PHASE 1: Months 1-3 ($0-500/month)
 * Focus: Content + Affiliate Applications
 * 
 * 1. Apply to affiliate programs ASAP:
 *    - Amazon Associates (easiest, apply immediately)
 *    - Impact.com for Dell, HP, Lenovo
 *    - Best Buy Affiliate
 *    - Microsoft Store Affiliate
 * 
 * 2. Content strategy:
 *    - 30 articles minimum
 *    - Focus on "best laptop" keywords
 *    - Include affiliate links in every article
 *    - 3-5 product recommendations per article
 * 
 * 3. Link placement best practices:
 *    - Always disclose affiliate relationship
 *    - Use "rel=sponsored" on links
 *    - Place CTA buttons above the fold
 *    - Repeat links 2-3 times in long articles
 */

/**
 * PHASE 2: Months 4-6 ($500-2,000/month)
 * Focus: SEO Optimization + Email List
 * 
 * 1. SEO improvements:
 *    - Target long-tail keywords (lower competition)
 *    - Build backlinks (guest posts, HARO)
 *    - Optimize top-performing articles
 * 
 * 2. Email monetization:
 *    - Build email list (offer free buying guide PDF)
 *    - Weekly newsletter with deals
 *    - Dedicated deal alerts
 * 
 * 3. Conversion optimization:
 *    - A/B test button colors/text
 *    - Add comparison tables
 *    - Create "vs" articles (high intent)
 */

/**
 * PHASE 3: Months 7-12 ($2,000-5,000/month)
 * Focus: Scale + Diversification
 * 
 * 1. Content scaling:
 *    - 100+ articles
 *    - Hire writers ($50-100/article)
 *    - Update old articles monthly
 * 
 * 2. Revenue diversification:
 *    - Add display ads (Mediavine at 50K sessions)
 *    - Sponsored reviews ($500-2,000 each)
 *    - Create digital products (buying guides)
 * 
 * 3. Advanced features:
 *    - Price tracking (automated emails)
 *    - AI product finder (higher engagement)
 *    - Video reviews (YouTube monetization)
 */

/**
 * COMMISSION RATES (Approximate)
 * 
 * Amazon Associates:
 * - Laptops: 1-2% (low but high volume)
 * - Average order: $800 → $8-16 per sale
 * 
 * Dell Affiliate (Impact.com):
 * - 4-7% commission
 * - Average order: $1,200 → $48-84 per sale
 * 
 * HP Affiliate:
 * - 3-6% commission
 * - Average order: $900 → $27-54 per sale
 * 
 * Best Buy:
 * - 1% commission
 * - 24-hour cookie (fast conversion)
 * 
 * KEY INSIGHT: Direct manufacturer affiliates (Dell, HP, Lenovo) 
 * pay 3-5x more than Amazon. Drive traffic there first!
 */

export const REVENUE_PROJECTIONS = {
  conservative: {
    month3: { traffic: 5000, revenue: 250 },
    month6: { traffic: 20000, revenue: 1500 },
    month12: { traffic: 50000, revenue: 4000 },
  },
  optimistic: {
    month3: { traffic: 10000, revenue: 500 },
    month6: { traffic: 40000, revenue: 3000 },
    month12: { traffic: 100000, revenue: 8000 },
  },
}
