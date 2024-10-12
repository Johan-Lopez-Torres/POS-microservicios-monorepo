"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Slider } from "@/components/ui/slider"
import { Toast } from "@/components/ui/toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Star, Heart, Share2, ShoppingCart, ChevronLeft, ChevronRight, Plus, Minus, ArrowLeft, Info } from "lucide-react"

const image = "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const product = {
  name: "College Essentials Pro Pack",
  price: 249.99,
  rating: 4.8,
  reviews: 1024,
  description: "Elevate your dorm life with our comprehensive College Essentials Pro Pack. This premium set includes everything a discerning student needs for a comfortable, stylish, and productive college experience.",
  features: [
    "Ultra-soft, hypoallergenic bedding set",
    "Ergonomic study accessories",
    "Smart storage solutions",
    "Tech-friendly gadgets",
    "Eco-friendly materials"
  ],
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ],
  qualities: ["Standard", "Premium", "Luxury"],
  styles: ["Modern Minimalist", "Cozy Chic", "Tech Savvy", "Eco-Friendly"],
  colors: ["#3B82F6", "#10B981", "#F59E0B", "#6366F1"],
  sizes: ["Twin XL", "Full", "Queen"]
}

const customizableItems = [
  { name: "Ergonomic Desk Lamp", image: "/placeholder.svg?height=100&width=100&text=Desk+Lamp", price: 49.99 },
  { name: "Smart Storage Cubes (Set of 3)", image: "/placeholder.svg?height=100&width=100&text=Storage+Cubes", price: 79.99 },
  { name: "Premium Noise-Cancelling Headphones", image: "/placeholder.svg?height=100&width=100&text=Headphones", price: 129.99 },
]

export default function UltimateProductDetailV3() {
  const [mainImage, setMainImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)
  const [selectedQuality, setSelectedQuality] = useState(product.qualities[0])
  const [selectedStyle, setSelectedStyle] = useState(product.styles[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showToast, setShowToast] = useState(false)

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    setQuantity(prev => action === 'increase' ? prev + 1 : Math.max(1, prev - 1))
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - left) / width
    const y = (event.clientY - top) / height
    setMousePosition({ x, y })
  }

  const handleAddToCart = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsZoomed(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="text-xl font-semibold">Product Details</h1>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                    <span className="sr-only">Share</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share this product</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="sr-only">Cart</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View your cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Galería de imágenes mejorada */}
          <div className="space-y-4">
            <div 
              className="relative aspect-square overflow-hidden rounded-lg bg-muted cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img
                src={mainImage}
                alt={product.name}
                className={`transition-transform duration-300 ${isZoomed ? 'scale-150' : 'hover:scale-105'} w-full h-full object-cover`}
                style={isZoomed ? {
                  transformOrigin: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`
                } : undefined}
              />
              {isZoomed && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-sm">Click to zoom out</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <motion.div
                  key={index}
                  className={`relative aspect-square rounded-md overflow-hidden cursor-pointer  ${
                    img === mainImage ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setMainImage(img)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"

                    alt={`${product.name} - Vista ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>

            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold">Select Quality</Label>
                <RadioGroup
                  value={selectedQuality}
                  onValueChange={setSelectedQuality}
                  className="flex space-x-2 mt-2"
                >
                  {product.qualities.map((quality) => (
                    <Label
                      key={quality}
                      className={`flex-1 cursor-pointer rounded-md border p-4 text-center transition-colors ${
                        selectedQuality === quality ? 'bg-primary text-primary-foreground' : 'bg-background'
                      }`}
                    >
                      <RadioGroupItem value={quality} className="sr-only" />
                      {quality}
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Style</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {product.styles.map((style) => (
                    <Button
                      key={style}
                      variant={selectedStyle === style ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedStyle(style)}
                    >
                      {style}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold">Color</Label>
                <div className="flex space-x-2 mt-2">
                  {product.colors.map((color) => (
                    <TooltipProvider key={color}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            className={`w-8 h-8 rounded-full border-2 ${
                              selectedColor === color ? 'border-primary' : 'border-transparent'
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{color}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold">Size</Label>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex space-x-2 mt-2"
                >
                  {product.sizes.map((size) => (
                    <Label
                      key={size}
                      className={`flex-1 cursor-pointer rounded-md border p-4 text-center transition-colors ${
                        selectedSize === size ? 'bg-primary text-primary-foreground' : 'bg-background'
                      }`}
                    >
                      <RadioGroupItem value={size} className="sr-only" />
                      {size}
                    </Label>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-semibold">Quantity</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange('decrease')}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange('increase')}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
              </Button>
            </div>
          </div>
        </div>

        {/* Customizable Items */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Customizable Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {customizableItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 border rounded-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md "
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                  <Button variant="link" className="p-0 h-auto">Add to pack</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tabs de información adicional */}
        <Tabs defaultValue="what's-inside" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="what's-inside">What's Inside</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="what's-inside" className="mt-6">
            <p className="mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span> {feature}
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">{product.rating} out of 5 stars</h3>
                  <p className="text-sm text-muted-foreground">Based on {product.reviews} reviews</p>
                </div>
                <Button>Write a review</Button>
              </div>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <div className="w-16">{stars} stars</div>
                    <div className="flex-1 mx-4">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: `${(Math.random() * 100).toFixed(2)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-right text-sm text-muted-foreground">
                      {(Math.random() * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faqs" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What's included in the College Essentials Pro Pack?</AccordionTrigger>
                <AccordionContent>
                  The College Essentials Pro Pack includes a premium bedding set, ergonomic study accessories, smart storage solutions, and tech-friendly gadgets. All items are designed to enhance your college living experience and are made with high-quality, durable materials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are the items in this pack suitable for all dorm sizes?</AccordionTrigger>
                <AccordionContent>
                  Yes, our College Essentials Pro Pack is designed to be versatile and adaptable to various dorm sizes. The bedding comes in different sizes to fit standard dorm mattresses, and the storage solutions are modular to fit different spaces efficiently.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I customize the items in the pack?</AccordionTrigger>
                <AccordionContent>
                  We offer customization options for many items in the pack. You can choose from different colors, styles, and even add or remove certain items to tailor the pack to your specific needs and preferences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What's your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your College Essentials Pro Pack, you can return it for a full refund within 30 days of purchase. Please note that items must be in their original condition and packaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-muted-foreground">
                We're dedicated to enhancing the college experience through thoughtfully designed and curated essentials. Our mission is to make dorm life comfortable, stylish, and conducive to academic success.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Shipping Information</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <form className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
              <div className="mt-4 flex space-x-4">
                <Button variant="ghost" size="icon">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 College Essentials Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <Toast>
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                <p>Product added to cart successfully!</p>
              </div>
            </Toast>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}