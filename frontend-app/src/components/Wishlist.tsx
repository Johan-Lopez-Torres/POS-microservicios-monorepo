

import { useState } from "react"
import { Star, ShoppingCart, Heart, Search, Menu, Sun, Moon, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

const image = "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const image2 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const image3 = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const image4 = "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const image5 = "https://images.unsplash.com/photo-1584735175097-719d848f8449?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



const image6 = "https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const image7 = "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const image8 = "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"




const image9 = "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


const image10 = "https://images.unsplash.com/photo-1626298038175-e9f383124e1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const image11 = "https://images.unsplash.com/photo-1643584549066-fc993fc9cb43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const image12 = "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



const products = [
  { id: 1, name: "Cámara DSLR Pro X2000", price: 1299.99, rating: 4.8, image: image, category: "Electrónica", availability: "En stock" },
  { id: 2, name: "Smartwatch FitPro 5", price: 249.99, rating: 4.5, image: image2, availability: "Pocas unidades" },
  { id: 3, name: "Auriculares NoiseGuard Pro", price: 199.99, rating: 4.7, image: image3, category: "Audio", availability: "En stock" },
  { id: 4, name: "Tablet UltraSlim X", price: 599.99, rating: 4.6, image: image4, category: "Electrónica", availability: "En stock" },
  { id: 5, name: "Drone Explorer 4K", price: 799.99, rating: 4.4, image: image5, category: "Fotografía", availability: "Preventa" },
  { id: 6, name: "Consola GameMaster Pro", price: 499.99, rating: 4.9, image: image6, category: "Gaming", availability: "En stock" },
  { id: 7, name: "Altavoz Inteligente EchoSphere", price: 129.99, rating: 4.3, image: image7, category: "Audio", availability: "En stock" },
  { id: 8, name: "Laptop UltraBook Slim", price: 1499.99, rating: 4.7, image: image8, category: "Computadoras", availability: "Pocas unidades" },
  { id: 9, name: "Proyector CineHome 4K", price: 899.99, rating: 4.5, image:image9, category: "Electrónica", availability: "En stock" },
  { id: 10, name: "Teclado Mecánico GamerPro", price: 149.99, rating: 4.6, image: image10, category: "Gaming", availability: "En stock" },
  { id: 11, name: "Monitor CurvedVision 34\"", price: 449.99, rating: 4.8, image: image11, category: "Computadoras", availability: "En stock" },
  { id: 12, name: "Cámara de Seguridad SmartGuard", price: 79.99, rating: 4.2, image: image12, category: "Hogar Inteligente", availability: "En stock" },
]

export default function Wishlist() {
  const [darkMode, setDarkMode] = useState(false)
  const [sortBy, setSortBy] = useState("name")
  const [filterCategory, setFilterCategory] = useState("Todos")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const sortedAndFilteredProducts = products
    .filter(product => filterCategory === "Todos" || product.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "price") return a.price - b.price
      if (sortBy === "rating") return b.rating - a.rating
      return 0
    })

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <header className="sticky top-0 z-10 bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Menu className="h-6 w-6 cursor-pointer" />
              <h1 className="text-2xl font-bold">Mi Lista de Deseos</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Input
                type="search"
                placeholder="Buscar en la lista..."
                className="w-64"
              />
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
              </Button>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todas las categorías</SelectItem>
                <SelectItem value="Electrónica">Electrónica</SelectItem>
                <SelectItem value="Wearables">Wearables</SelectItem>
                <SelectItem value="Audio">Audio</SelectItem>
                <SelectItem value="Fotografía">Fotografía</SelectItem>
                <SelectItem value="Gaming">Gaming</SelectItem>
                <SelectItem value="Computadoras">Computadoras</SelectItem>
                <SelectItem value="Hogar Inteligente">Hogar Inteligente</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nombre</SelectItem>
                <SelectItem value="price">Precio</SelectItem>
                <SelectItem value="rating">Calificación</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedAndFilteredProducts.map((product) => (
              <div key={product.id} className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant={product.availability === "En stock" ? "default" : product.availability === "Pocas unidades" ? "destructive" : "secondary"}>
                      {product.availability}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Añadir al carrito
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="bg-muted mt-12 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Acerca de Nosotros</h3>
                <p className="text-muted-foreground">Somos tu destino para los mejores productos de tecnología y electrónica. Nuestra lista de deseos te ayuda a guardar tus artículos favoritos para compras futuras.</p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Inicio</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Productos</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Ofertas</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold mb-4">Suscríbete a nuestro boletín</h3>
                <div className="flex">
                  <Input type="email" placeholder="Tu correo electrónico" className="rounded-r-none" />
                  <Button className="rounded-l-none">Suscribirse</Button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
              <p>&copy; 2024 TechWishlist. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}