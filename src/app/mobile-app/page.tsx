'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Smartphone, Bell, Gift, Download, Star, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: <Bell className="h-8 w-8 text-gold" />,
    title: 'Push Notifications',
    description: 'Get instant updates about your order status, special offers, and exclusive deals.'
  },
  {
    icon: <Gift className="h-8 w-8 text-gold" />,
    title: 'Loyalty Program',
    description: 'Earn points with every order and unlock exclusive rewards and discounts.'
  },
  {
    icon: <Zap className="h-8 w-8 text-gold" />,
    title: 'Offline Functionality',
    description: 'Browse the menu and access your favorites even when you are offline.'
  },
  {
    icon: <Shield className="h-8 w-8 text-gold" />,
    title: 'Secure Payments',
    description: 'Safe and secure payment processing with multiple payment options.'
  }
]

const screenshots = [
  {
    title: 'Menu Browse',
    description: 'Beautiful menu with high-quality food photography'
  },
  {
    title: 'Order Tracking',
    description: 'Real-time order status and delivery tracking'
  },
  {
    title: 'Loyalty Rewards',
    description: 'Track points and redeem exclusive rewards'
  }
]

export default function MobileAppPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 bg-dark-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-white hover:text-gold">
              <a href="/">
                <ArrowLeft className="h-5 w-5" />
              </a>
            </Button>
            <h1 className="text-2xl font-semibold text-gold">Mobile App</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-gold text-xl">🍽</div>
            <span className="text-lg font-semibold text-gold">AURORA EATS</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Smartphone className="h-16 w-16 text-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Aurora Eats
              <br />
              <span className="text-gold">Mobile App</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Experience the ultimate dining convenience with our feature-rich mobile app.
              Order, track, and enjoy your favorite meals with just a few taps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground text-lg px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gold fill-current" />
                <span className="text-white font-semibold">4.8</span>
                <span className="text-gray-400">App Store</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gold fill-current" />
                <span className="text-white font-semibold">4.7</span>
                <span className="text-gray-400">Google Play</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">App Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover why millions of users love the Aurora Eats mobile experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-dark-card border-border/20 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-lg">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">App Screenshots</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See the beautiful and intuitive interface of our mobile app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <Card key={index} className="bg-dark-card border-border/20 overflow-hidden">
                <div className="aspect-[9/16] bg-gradient-to-b from-dark-bg to-dark-card/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-24 w-24 text-gold/30 mx-auto mb-4" />
                      <p className="text-gold font-semibold">App Screenshot</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-white mb-2">{screenshot.title}</h3>
                  <p className="text-sm text-gray-400">{screenshot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">500K+</div>
              <p className="text-gray-400">Downloads</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">4.8</div>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">50K+</div>
              <p className="text-gray-400">Daily Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">1M+</div>
              <p className="text-gray-400">Orders Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Technical Specifications</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Built with cutting-edge technology for the best user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-dark-card border-border/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="text-2xl mr-3">📱</div>
                    iOS Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">iOS Version</span>
                    <span className="text-white">13.0+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size</span>
                    <span className="text-white">45.2 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Languages</span>
                    <span className="text-white">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Developer</span>
                    <span className="text-white">Aurora Eats Inc.</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark-card border-border/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="text-2xl mr-3">🤖</div>
                    Android Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Android Version</span>
                    <span className="text-white">8.0+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size</span>
                    <span className="text-white">52.1 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Languages</span>
                    <span className="text-white">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target SDK</span>
                    <span className="text-white">34</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-dark-bg to-dark-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Download the Aurora Eats app today and experience the future of food ordering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}