'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronRight, Star, MapPin, Phone, Mail } from 'lucide-react'

export const dynamic = 'force-dynamic'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

const menuItems: MenuItem[] = [
  {
    name: 'Truffle Pasta',
    description: 'Fresh handmade pasta with truffle cream sauce and parmesan',
    price: '$28',
    image: '/generated/truffle-pasta.jpg'
  },
  {
    name: 'Grilled Lamb Shank',
    description: 'Slow-cooked lamb shank with rosemary and garlic',
    price: '$35',
    image: '/generated/lamb-shank.jpg'
  },
  {
    name: 'Desert Platter',
    description: 'Selection of artisanal desserts and seasonal fruits',
    price: '$18',
    image: '/generated/desert-platter.jpg'
  },
  {
    name: 'Artisan Mezze',
    description: 'Mediterranean appetizer selection with house-made dips',
    price: '$24',
    image: '/generated/mezze-platter.jpg'
  }
]

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [guests, setGuests] = useState<string>('')

  return (
    <div className="min-h-screen bg-dark-bg text-foreground">
      {/* Navigation Header */}
      <header className="border-b border-border/20 bg-dark-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-gold text-2xl font-bold">🍽</div>
            <span className="text-xl font-semibold text-gold">AURORA EATS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
            <a href="#reservations" className="hover:text-gold transition-colors">Reservations</a>
            <a href="#location" className="hover:text-gold transition-colors">Location</a>
            <a href="/account" className="hover:text-gold transition-colors">Account</a>
          </nav>
          <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground">
            <a href="/order">Order Online</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/generated/hero-steak.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            EXPERIENCE CULINARY
            <br />
            <span className="text-gold">EXCELLENCE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Indulge in our finest selection of perfectly crafted dishes,
            where every meal is a celebration of taste and artistry.
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8 py-3">
            Book a Table
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">OUR MENU</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our signature dishes crafted with the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-dark-card border-border/20 overflow-hidden group hover:border-gold/50 transition-all duration-300">
                <div className="aspect-square bg-gray-800 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center space-x-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold text-lg">{item.price}</span>
                    <Button size="sm" className="bg-gold hover:bg-gold/90 text-gold-foreground">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
              View Full Menu
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservations" className="py-20 bg-dark-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">MAKE A RESERVATION</h2>
              <div className="flex items-center justify-center space-x-2 text-gold">
                <div className="text-2xl">🍽</div>
                <span className="text-xl font-semibold">AURORA EATS</span>
              </div>
            </div>

            <Card className="bg-dark-card border-border/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Select Date</h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border border-border/20"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="time" className="text-white">Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger className="bg-dark-bg border-border/20 text-white">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="17:00">5:00 PM</SelectItem>
                          <SelectItem value="17:30">5:30 PM</SelectItem>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="18:30">6:30 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                          <SelectItem value="19:30">7:30 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                          <SelectItem value="20:30">8:30 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="guests" className="text-white">Number of Guests</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger className="bg-dark-bg border-border/20 text-white">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5">5 Guests</SelectItem>
                          <SelectItem value="6">6+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="name" className="text-white">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="bg-dark-bg border-border/20 text-white placeholder:text-gray-400"
                      />
                    </div>

                    <Button className="w-full bg-gold hover:bg-gold/90 text-gold-foreground text-lg py-3">
                      Make Reservation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">Visit Us</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-400">123 Culinary Street<br />Downtown District<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">(555) 123-EATS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">hello@auroraeats.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Thursday</span>
                  <span className="text-white">5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Friday - Saturday</span>
                  <span className="text-white">5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-card/50 border-t border-border/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-gold text-2xl">🍽</div>
                <span className="text-xl font-semibold text-gold">AURORA EATS</span>
              </div>
              <p className="text-gray-400">Experience culinary excellence in the heart of the city.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#menu" className="block text-gray-400 hover:text-gold transition-colors">Menu</a>
                <a href="#reservations" className="block text-gray-400 hover:text-gold transition-colors">Reservations</a>
                <a href="#about" className="block text-gray-400 hover:text-gold transition-colors">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-gold transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-gold transition-colors">Private Events</a>
                <a href="#" className="block text-gray-400 hover:text-gold transition-colors">Catering</a>
                <a href="#" className="block text-gray-400 hover:text-gold transition-colors">Gift Cards</a>
                <a href="/mobile-app" className="block text-gray-400 hover:text-gold transition-colors">Mobile App</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-gold-foreground cursor-pointer hover:bg-gold/90 transition-colors">
                  f
                </div>
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-gold-foreground cursor-pointer hover:bg-gold/90 transition-colors">
                  @
                </div>
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-gold-foreground cursor-pointer hover:bg-gold/90 transition-colors">
                  in
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Aurora Eats. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}