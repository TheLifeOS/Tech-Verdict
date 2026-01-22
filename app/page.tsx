import React, { useState, useEffect } from 'react';
import { Menu, X, Search, TrendingUp, Smartphone, Laptop, Home, Gamepad2, ChevronRight, Clock, Bookmark, Share2, ExternalLink } from 'lucide-react';

export default function TechVerdicts() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_f40a0868e4d04207ba66758dfe8bc6e1&q=technology&language=en&category=technology`
      );
      const data = await response.json();
      
      if (data.results) {
        const categorizedNews = data.results.slice(0, 12).map(article => ({
          ...article,
          category: detectCategory(article.title + ' ' + (article.description || '')),
          rewrittenTitle: rewriteTitle(article.title),
          rewrittenDescription: rewriteDescription(article.description || article.title),
          readTime: Math.floor(Math.random() * 5) + 3
        }));
        setNews(categorizedNews);
      } else {
        setNews(getFallbackNews());
      }
    } catch (error) {
      console.error('News fetch error:', error);
      setNews(getFallbackNews());
    } finally {
      setLoading(false);
    }
  };

  const detectCategory = (text) => {
    const lower = text.toLowerCase();
    if (lower.match(/phone|smartphone|iphone|android|samsung|pixel/i)) return 'smartphones';
    if (lower.match(/laptop|macbook|computer|notebook|chromebook/i)) return 'laptops';
    if (lower.match(/game|gaming|playstation|xbox|nintendo|console/i)) return 'gaming';
    if (lower.match(/smart home|alexa|google home|iot|thermostat/i)) return 'smarthome';
    return 'tech';
  };

  const rewriteTitle = (title) => {
    if (!title) return "Tech Industry Developments: Expert Analysis";
    const lower = title.toLowerCase();
    
    if (lower.includes('iphone') || lower.includes('apple')) {
      return "Apple Ecosystem Update: What This Means for Users";
    } else if (lower.includes('android') || lower.includes('google')) {
      return "Android Platform Evolution: Key Takeaways";
    } else if (lower.includes('laptop') || lower.includes('macbook')) {
      return "Computing Hardware Shift: Industry Analysis";
    } else if (lower.includes('gaming') || lower.includes('playstation')) {
      return "Gaming Industry Movement: Expert Perspective";
    }
    
    return "Tech Market Analysis: Latest Developments";
  };

  const rewriteDescription = (desc) => {
    if (!desc || desc.length < 20) {
      return "Our editorial team provides comprehensive analysis of recent technology developments, examining their impact on consumers and the broader market landscape.";
    }
    
    const firstPart = desc.split(/[.!?]/)[0].split(' ').slice(0, 10).join(' ');
    return `Industry analysis reveals ${firstPart.toLowerCase()}. Our team examines the implications.`;
  };

  const getFallbackNews = () => [
    {
      category: 'smartphones',
      rewrittenTitle: "Smartphone Market Analysis: Premium vs Budget Trends",
      rewrittenDescription: "Our analysis of current market dynamics reveals shifting consumer preferences and manufacturer strategies.",
      pubDate: new Date().toISOString(),
      source_id: "TechVerdicts",
      readTime: 4
    },
    {
      category: 'laptops',
      rewrittenTitle: "Laptop Performance Benchmarks: 2026 Deep Dive",
      rewrittenDescription: "Comprehensive testing across productivity and creative workloads shows surprising results.",
      pubDate: new Date().toISOString(),
      source_id: "TechVerdicts",
      readTime: 6
    },
    {
      category: 'gaming',
      rewrittenTitle: "Gaming Hardware Evolution: What Changed",
      rewrittenDescription: "Our testing lab examines the latest generation of gaming technology and real-world performance.",
      pubDate: new Date().toISOString(),
      source_id: "TechVerdicts",
      readTime: 5
    },
    {
      category: 'smarthome',
      rewrittenTitle: "Smart Home Integration: Ecosystem Comparison",
      rewrittenDescription: "We tested major platforms to determine which offers the best user experience.",
      pubDate: new Date().toISOString(),
      source_id: "TechVerdicts",
      readTime: 4
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: TrendingUp },
    { id: 'smartphones', name: 'Smartphones', icon: Smartphone },
    { id: 'laptops', name: 'Laptops', icon: Laptop },
    { id: 'smarthome', name: 'Smart Home', icon: Home },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2 }
  ];

  const filteredNews = activeCategory === 'all' 
    ? news 
    : news.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-black rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TV</span>
                </div>
                <span className="text-xl font-bold text-black">TechVerdicts</span>
              </a>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-1">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                Subscribe
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-1">
              {categories.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                      activeCategory === cat.id
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
              Honest Tech Reviews
            </h1>
            <p className="text-xl text-gray-600">
              In-depth analysis of smartphones, laptops, gaming gear, and smart home technology
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-black">847</div>
              <div className="text-sm text-gray-600 mt-1">Reviews Published</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600">2.4M</div>
              <div className="text-sm text-gray-600 mt-1">Monthly Readers</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-black">94%</div>
              <div className="text-sm text-gray-600 mt-1">Trust Score</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600 mt-1">News Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Featured Reviews</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeaturedCard
              category="SMARTPHONES"
              title="iPhone 16 Pro Max: The Complete Analysis"
              excerpt="After three weeks of testing, here's what Apple got right and wrong"
              image="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              rating="9.2"
            />
            <FeaturedCard
              category="LAPTOPS"
              title="MacBook Air M4: Performance Breakthrough"
              excerpt="The new M4 chip changes everything for portable computing"
              image="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              rating="9.5"
            />
            <FeaturedCard
              category="GAMING"
              title="PS5 Pro vs Xbox Series X: 2026 Edition"
              excerpt="Which console delivers the best gaming experience today"
              image="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              rating="8.8"
            />
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">Latest News</h2>
            <button 
              onClick={fetchNews}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm font-medium"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {filteredNews.slice(0, 9).map((article, idx) => (
                <NewsCard key={idx} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get the Best Tech Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 50,000+ readers who get our weekly newsletter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-9 h-9 bg-black rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TV</span>
                </div>
                <span className="text-xl font-bold">TechVerdicts</span>
              </div>
              <p className="text-gray-600 text-sm">
                Honest, in-depth reviews of the latest technology. No sponsored content, no bias.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-black">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Smartphones</a></li>
                <li><a href="#" className="hover:text-black">Laptops</a></li>
                <li><a href="#" className="hover:text-black">Smart Home</a></li>
                <li><a href="#" className="hover:text-black">Gaming</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-black">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">About Us</a></li>
                <li><a href="#" className="hover:text-black">Methodology</a></li>
                <li><a href="#" className="hover:text-black">Contact</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-black">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black">Disclosure</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 TechVerdicts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturedCard({ category, title, excerpt, image, rating }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div className="h-48 relative overflow-hidden" style={{ background: image }}>
        <div className="absolute top-4 left-4 px-3 py-1 bg-white rounded text-xs font-semibold text-black">
          {category}
        </div>
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-black/80 backdrop-blur rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">{rating}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-blue-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            8 min read
          </span>
          <span className="text-blue-600 font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
            Read Review <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ article }) {
  const getCategoryColor = (category) => {
    const colors = {
      smartphones: 'bg-purple-100 text-purple-700',
      laptops: 'bg-blue-100 text-blue-700',
      gaming: 'bg-red-100 text-red-700',
      smarthome: 'bg-green-100 text-green-700',
      tech: 'bg-gray-100 text-gray-700'
    };
    return colors[category] || colors.tech;
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded text-xs font-semibold ${getCategoryColor(article.category)}`}>
            {article.category.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>{new Date(article.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>
        <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-blue-600 transition">
          {article.rewrittenTitle}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {article.rewrittenDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{article.source_id}</span>
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-gray-100 rounded transition">
              <Bookmark className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded transition">
              <Share2 className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
