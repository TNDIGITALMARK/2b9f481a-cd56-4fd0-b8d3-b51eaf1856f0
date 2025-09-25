'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, User, Mail, Phone, MapPin, Clock, Star, Gift, CreditCard, Plus } from 'lucide-react'

interface OrderHistory {
  id: string
  date: string
  items: string[]
  total: number
  status: 'delivered' | 'preparing' | 'out-for-delivery'
}

const orderHistory: OrderHistory[] = [
  {
    id: '#2024-001',
    date: '2024-01-15',
    items: ['Truffle Pasta', 'Lamb Shank'],
    total: 63,
    status: 'delivered'
  },
  {
    id: '#2024-002',
    date: '2024-01-20',
    items: ['Artisan Mezze', 'Desert Platter'],
    total: 42,
    status: 'delivered'
  }
]

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  if (!isLoggedIn) {
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
              <h1 className="text-2xl font-semibold text-gold">My Account</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-gold text-xl">🍽</div>
              <span className="text-lg font-semibold text-gold">AURORA EATS</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="text-gold text-3xl">🍽</div>
                <span className="text-2xl font-semibold text-gold">AURORA EATS</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-gray-400">Sign in to your account or create a new one</p>
            </div>

            <Tabs defaultValue="login" className="space-y-6">
              <TabsList className="grid grid-cols-2 w-full bg-dark-card">
                <TabsTrigger value="login" className="data-[state=active]:bg-gold data-[state=active]:text-gold-foreground">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-gold data-[state=active]:text-gold-foreground">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Card className="bg-dark-card border-border/20">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button
                      className="w-full bg-gold hover:bg-gold/90 text-gold-foreground"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Sign In
                    </Button>
                    <div className="text-center">
                      <Button variant="link" className="text-gold hover:text-gold/80">
                        Forgot password?
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="register">
                <Card className="bg-dark-card border-border/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button
                      className="w-full bg-gold hover:bg-gold/90 text-gold-foreground"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Create Account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }

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
            <h1 className="text-2xl font-semibold text-gold">My Account</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setIsLoggedIn(false)}
              className="border-border/20 text-white hover:bg-gold hover:text-gold-foreground"
            >
              Sign Out
            </Button>
            <div className="flex items-center space-x-2">
              <div className="text-gold text-xl">🍽</div>
              <span className="text-lg font-semibold text-gold">AURORA EATS</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-dark-card border-border/20">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-gold-foreground font-bold">
                    JD
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">John Doe</h3>
                    <p className="text-sm text-gray-400">Gold Member</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <Button
                    variant={activeTab === 'profile' ? 'default' : 'ghost'}
                    className={`w-full justify-start ${activeTab === 'profile'
                      ? 'bg-gold hover:bg-gold/90 text-gold-foreground'
                      : 'text-white hover:text-gold hover:bg-gold/10'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button
                    variant={activeTab === 'orders' ? 'default' : 'ghost'}
                    className={`w-full justify-start ${activeTab === 'orders'
                      ? 'bg-gold hover:bg-gold/90 text-gold-foreground'
                      : 'text-white hover:text-gold hover:bg-gold/10'
                    }`}
                    onClick={() => setActiveTab('orders')}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    Order History
                  </Button>
                  <Button
                    variant={activeTab === 'loyalty' ? 'default' : 'ghost'}
                    className={`w-full justify-start ${activeTab === 'loyalty'
                      ? 'bg-gold hover:bg-gold/90 text-gold-foreground'
                      : 'text-white hover:text-gold hover:bg-gold/10'
                    }`}
                    onClick={() => setActiveTab('loyalty')}
                  >
                    <Gift className="mr-2 h-4 w-4" />
                    Loyalty Program
                  </Button>
                  <Button
                    variant={activeTab === 'payment' ? 'default' : 'ghost'}
                    className={`w-full justify-start ${activeTab === 'payment'
                      ? 'bg-gold hover:bg-gold/90 text-gold-foreground'
                      : 'text-white hover:text-gold hover:bg-gold/10'
                    }`}
                    onClick={() => setActiveTab('payment')}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === 'profile' && (
              <Card className="bg-dark-card border-border/20">
                <CardHeader>
                  <CardTitle className="text-white">Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input
                        id="firstName"
                        defaultValue="John"
                        className="bg-dark-bg border-border/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input
                        id="lastName"
                        defaultValue="Doe"
                        className="bg-dark-bg border-border/20 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      defaultValue="john@example.com"
                      className="bg-dark-bg border-border/20 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      defaultValue="(555) 123-4567"
                      className="bg-dark-bg border-border/20 text-white"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-white">Default Delivery Address</Label>
                    <Input
                      id="address"
                      defaultValue="123 Main St, New York, NY 10001"
                      className="bg-dark-bg border-border/20 text-white"
                    />
                  </div>

                  <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            )}

            {activeTab === 'orders' && (
              <Card className="bg-dark-card border-border/20">
                <CardHeader>
                  <CardTitle className="text-white">Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="border border-border/20 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-white">{order.id}</h4>
                            <p className="text-sm text-gray-400">{order.date}</p>
                          </div>
                          <Badge
                            className={order.status === 'delivered'
                              ? 'bg-green-600 hover:bg-green-700'
                              : order.status === 'preparing'
                                ? 'bg-yellow-600 hover:bg-yellow-700'
                                : 'bg-blue-600 hover:bg-blue-700'
                            }
                          >
                            {order.status.replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Items:</p>
                            <p className="text-white">{order.items.join(', ')}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-400">Total</p>
                            <p className="font-semibold text-gold">${order.total}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'loyalty' && (
              <Card className="bg-dark-card border-border/20">
                <CardHeader>
                  <CardTitle className="text-white">Aurora Loyalty Program</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg p-6 border border-gold/30">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Gold Member</h3>
                        <div className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-gold fill-current" />
                          <span className="text-gold font-semibold">1,250 points</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Next tier: Platinum</p>
                        <p className="text-sm text-white">750 points needed</p>
                      </div>
                    </div>
                    <div className="w-full bg-dark-bg rounded-full h-2">
                      <div className="bg-gold h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-border/20 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Available Rewards</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Free Appetizer</span>
                          <span className="text-xs bg-gold text-gold-foreground px-2 py-1 rounded">500 pts</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">10% Off Next Order</span>
                          <span className="text-xs bg-gold text-gold-foreground px-2 py-1 rounded">750 pts</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Free Dessert</span>
                          <span className="text-xs bg-gold text-gold-foreground px-2 py-1 rounded">400 pts</span>
                        </div>
                      </div>
                    </div>

                    <div className="border border-border/20 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Recent Activity</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Order #2024-002</span>
                          <span className="text-sm text-green-400">+42 pts</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Order #2024-001</span>
                          <span className="text-sm text-green-400">+63 pts</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Birthday bonus</span>
                          <span className="text-sm text-green-400">+100 pts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'payment' && (
              <Card className="bg-dark-card border-border/20">
                <CardHeader>
                  <CardTitle className="text-white">Payment Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border border-border/20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-8 w-8 text-gold" />
                        <div>
                          <p className="font-semibold text-white">•••• •••• •••• 4567</p>
                          <p className="text-sm text-gray-400">Expires 12/27</p>
                        </div>
                      </div>
                      <Badge className="bg-gold text-gold-foreground">Default</Badge>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-gold-foreground">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}