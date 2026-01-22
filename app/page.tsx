import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold">
                LV
              </div>
              <span className="text-xl font-bold">LaptopVerdicts</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/reviews" className="hover:text-purple-400 transition">Reviews</Link>
              <Link href="/compare" className="hover:text-purple-400 transition">Compare</Link>
              <Link href="/ai-finder" className="hover:text-purple-400 transition">AI Finder</Link>
              <Link href="/deals" className="hover:text-purple-400 transition">Deals</Link>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full hover:shadow-lg transition">
              Search
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Find Your Perfect Laptop<br/>in 60 Seconds
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered reviews that cut through marketing BS. Real data, honest recommendations, better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-finder" className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105">
                Find My Laptop →
              </Link>
              <Link href="/reviews" className="bg-white/10 backdrop-blur px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition border border-white/20">
                Browse Reviews
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-purple-400">1,247</div>
              <div className="text-gray-400 mt-2">Laptops Tested</div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-blue-400">89K+</div>
              <div className="text-gray-400 mt-2">Real Reviews</div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-green-400">96%</div>
              <div className="text-gray-400 mt-2">Accuracy Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-yellow-400">$8.2M</div>
              <div className="text-gray-400 mt-2">Saved by Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Trust LaptopVerdicts?</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Every other site copies manufacturer specs. We test, measure, and tell you what really matters.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 hover:scale-105 transition border border-white/10">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-World Testing</h3>
              <p className="text-gray-400">
                We don't trust spec sheets. Every laptop gets 2 weeks of real use: coding, gaming, battery drain tests, thermal stress.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 hover:scale-105 transition border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Price Predictions</h3>
              <p className="text-gray-400">
                Should you buy now or wait? Our AI analyzes price history and predicts drops with 92% accuracy. Save hundreds.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-3xl p-8 hover:scale-105 transition border border-white/10">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">No Marketing BS</h3>
              <p className="text-gray-400">
                We call out greenwashing, expose rebranded models, and tell you when NOT to buy. Honesty over commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Latest Reviews</h2>
            <Link href="/reviews" className="text-purple-400 hover:text-purple-300">View All →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ReviewCard 
              category="💻 ULTRABOOK"
              timeAgo="3 hours ago"
              title="MacBook Air M4: Still Worth It in 2026?"
              description="Apple's thinnest laptop gets the M4 chip. But should you wait for the M5 in 6 months?"
              verdict="⏰ WAIT 4 months"
              link="/reviews/macbook-air-m4-2026"
            />
            <ReviewCard 
              category="🎮 GAMING"
              timeAgo="1 day ago"
              title="ASUS ROG Zephyrus G16: Reality Check"
              description="$2,499 for RTX 5080. Is it worth it? We ran 47 games to find out."
              verdict="Truth Score: 8.5/10"
              link="/reviews/asus-rog-zephyrus-g16"
            />
            <ReviewCard 
              category="💼 BUSINESS"
              timeAgo="2 days ago"
              title="Dell XPS 15: 6-Month Long-term Test"
              description="3,847 users reported issues. Here's what actually breaks and when."
              verdict="Reliability: 7.2/10"
              link="/reviews/dell-xps-15-longterm"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Laptop?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join 187,000+ people who trust LaptopVerdicts for honest, AI-powered recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 px-6 py-4 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1 max-w-md"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition">
                Get Weekly Insights
              </button>
            </div>
            <p className="text-sm text-gray-500">Free laptop buying guides. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold">
                  LV
                </div>
                <span className="text-xl font-bold">LaptopVerdicts</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered laptop reviews that help you make better decisions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/best-laptops" className="hover:text-purple-400">Best Laptops 2026</Link></li>
                <li><Link href="/gaming-laptops" className="hover:text-purple-400">Gaming Laptops</Link></li>
                <li><Link href="/business-laptops" className="hover:text-purple-400">Business Laptops</Link></li>
                <li><Link href="/budget-laptops" className="hover:text-purple-400">Budget Laptops</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ai-finder" className="hover:text-purple-400">AI Laptop Finder</Link></li>
                <li><Link href="/compare" className="hover:text-purple-400">Comparison Tool</Link></li>
                <li><Link href="/deals" className="hover:text-purple-400">Best Deals</Link></li>
                <li><Link href="/price-tracker" className="hover:text-purple-400">Price Tracker</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-purple-400">About Us</Link></li>
                <li><Link href="/methodology" className="hover:text-purple-400">Testing Methodology</Link></li>
                <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-purple-400">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 LaptopVerdicts. Built with AI, powered by honesty.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function ReviewCard({ category, timeAgo, title, description, verdict, link }: {
  category: string
  timeAgo: string
  title: string
  description: string
  verdict: string
  link: string
}) {
  return (
    <Link href={link} className="bg-white/5 backdrop-blur rounded-3xl overflow-hidden hover:scale-105 transition border border-white/10 block">
      <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
      <div className="p-6">
        <div className="text-sm text-purple-400 mb-2">{category} • {timeAgo}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-yellow-400 font-semibold">{verdict}</span>
          <span className="text-purple-400 hover:text-purple-300">Read →</span>
        </div>
      </div>
    </Link>
  )
}
