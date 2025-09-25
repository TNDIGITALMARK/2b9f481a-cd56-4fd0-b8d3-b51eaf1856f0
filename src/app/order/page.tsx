'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Minus, Plus, ShoppingCart, Star, ArrowLeft, CreditCard, Truck } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
}

interface CartItem extends MenuItem {
  quantity: number
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Pasta',
    description: 'Fresh handmade pasta with truffle cream sauce and parmesan',
    price: 28,
    image: '/generated/truffle-pasta.jpg',
    category: 'Main Course',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Grilled Lamb Shank',
    description: 'Slow-cooked lamb shank with rosemary and garlic',
    price: 35,
    image: '/generated/lamb-shank.jpg',
    category: 'Main Course',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Desert Platter',
    description: 'Selection of artisanal desserts and seasonal fruits',
    price: 18,
    image: '/generated/desert-platter.jpg',
    category: 'Dessert',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Artisan Mezze',
    description: 'Mediterranean appetizer selection with house-made dips',
    price: 24,
    image: '/generated/mezze-platter.jpg',
    category: 'Appetizer',
    rating: 4.6
  }
]

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [showCart, setShowCart] = useState(false)

  const categories = ['All', 'Appetizer', 'Main Course', 'Dessert']

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.id !== id))
    } else {
      setCart(cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  if (showCart) {
    return (
      <div className="min-h-screen bg-dark-bg text-foreground">
        {/* Header */}
        <header className="border-b border-border/20 bg-dark-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => setShowCart(false)}
                className="text-white hover:text-gold"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-semibold text-gold">Shopping Cart</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-gold text-xl">🍽</div>
              <span className="text-lg font-semibold text-gold">AURORA EATS</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.length === 0 ? (
                <Card className="bg-dark-card border-border/20">
                  <CardContent className="p-8 text-center">
                    <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
                    <p className="text-gray-400 mb-4">Add some delicious items to get started!</p>
                    <Button onClick={() => setShowCart(false)} className="bg-gold hover:bg-gold/90 text-gold-foreground">
                      Browse Menu
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                cart.map((item) => (
                  <Card key={item.id} className="bg-dark-card border-border/20">
                    <CardContent className="p-6">
                      <div className="flex space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400 mb-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-gold font-bold">${item.price}</span>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="border-border/20 text-white hover:bg-gold hover:text-gold-foreground"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center text-white">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="border-border/20 text-white hover:bg-gold hover:text-gold-foreground"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-dark-card border-border/20 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Delivery Fee</span>
                    <span>$3.99</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>${(cartTotal * 0.08).toFixed(2)}</span>
                  </div>
                  <Separator className="bg-border/20" />
                  <div className="flex justify-between text-white font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-gold">${(cartTotal + 3.99 + (cartTotal * 0.08)).toFixed(2)}</span>
                  </div>

                  <div className="space-y-3 pt-4">
                    <div>
                      <Label htmlFor="delivery-time" className="text-white">Delivery Time</Label>
                      <Select>
                        <SelectTrigger className="bg-dark-bg border-border/20 text-white">
                          <SelectValue placeholder="Select delivery time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (30-45 min)</SelectItem>
                          <SelectItem value="1hour">In 1 hour</SelectItem>
                          <SelectItem value="2hours">In 2 hours</SelectItem>
                          <SelectItem value="schedule">Schedule for later</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-white">Delivery Address</Label>
                      <Input
                        id="address"
                        placeholder="Enter your address"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <Button
                      className="w-full bg-gold hover:bg-gold/90 text-gold-foreground"
                      disabled={cart.length === 0}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceed to Checkout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      {/* Header */}
      <header className="border-b border-border/20 bg-dark-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-white hover:text-gold">
              <a href="/">
                <ArrowLeft className="h-5 w-5" />
              </a>
            </Button>
            <h1 className="text-2xl font-semibold text-gold">Order Online</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowCart(true)}
              className="border-gold text-gold hover:bg-gold hover:text-gold-foreground relative"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gold text-gold-foreground text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
            <div className="flex items-center space-x-2">
              <div className="text-gold text-xl">🍽</div>
              <span className="text-lg font-semibold text-gold">AURORA EATS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex space-x-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category
                ? "bg-gold hover:bg-gold/90 text-gold-foreground"
                : "border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-dark-card border-border/20 overflow-hidden group hover:border-gold/50 transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold text-gold-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {item.rating}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold text-lg">${item.price}</span>
                  <Button
                    onClick={() => addToCart(item)}
                    className="bg-gold hover:bg-gold/90 text-gold-foreground"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setShowCart(true)}
            className="bg-gold hover:bg-gold/90 text-gold-foreground shadow-lg rounded-full px-6 py-3"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            View Cart ({cartItemCount})
          </Button>
        </div>
      )}
    </div>
  )
}