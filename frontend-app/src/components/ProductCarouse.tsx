import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "Ultrean Abrebotellas manual, de acero inoxidable resistente,...",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 1039,
    price: 7.99,
    originalPrice: 15.99,
    discount: 50,
  },
  {
    id: 2,
    name: "Hario Filtro de café de papel V60, tamaño 02, natural, 200 unidades",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviews: 5268,
    price: 12.57,
    originalPrice: 15.5,
    discount: 19,
  },
  {
    id: 3,
    name: "Kikcoin Banneton - Cesta a prueba de pan, juego de 2, cesta redonda...",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 650,
    price: 24.98,
    originalPrice: 32.98,
    discount: 24,
  },
  {
    id: 4,
    name: "FoodSaver - Kit de sellador al vacío de boca ancha con sella...",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 27749,
    price: 15.89,
    originalPrice: 24.99,
    discount: 36,
  },
  {
    id: 5,
    name: "Goodful - Termo de acero inoxidable con...",
    image:
      "https://images.unsplash.com/photo-1584735175097-719d848f8449?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 3465,
    price: 9.99,
    originalPrice: 14.99,
    discount: 33,
  },
  {
    id: 6,
    name: "MSC International Joie Fresh - Cápsula elástica para cebollas, aproba...",
    image:
      "https://images.unsplash.com/photo-1590673846749-e2fb8f655df8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 3135,
    price: 6.48,
    originalPrice: 7.2,
    discount: 10,
  },
  {
    id: 7,
    name: "Nuovoware Licuadora portátil para batidos y batidos, 12 licuadoras...",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 515,
    price: 31.99,
    originalPrice: 39.99,
    discount: 20,
  },
  {
    id: 8,
    name: "Nuovoware Licuadora portátil para batidos y batidos, 12 licuadoras...",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 515,
    price: 31.99,
    originalPrice: 39.99,
    discount: 20,
  },
  {
    id: 9,
    name: "Nuovoware Licuadora portátil para batidos y batidos, 12 licuadoras...",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 515,
    price: 31.99,
    originalPrice: 39.99,
    discount: 20,
  },
  {
    id: 10,
    name: "Nuovoware Licuadora portátil para batidos y batidos, 12 licuadoras...",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 515,
    price: 31.99,
    originalPrice: 39.99,
    discount: 20,
  },
  {
    id: 11,
    name: "Nuovoware Licuadora portátil para batidos y batidos, 12 licuadoras...",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 515,
    price: 31.99,
    originalPrice: 39.99,
    discount: 20,
  }
];

export default function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (startIndex + 6 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cocina Outlet</h1>
        <Button variant="link" className="text-primary">
          Ver Más
        </Button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out "
            style={{ transform: `translateX(-${startIndex * (100 / 6)}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-1/6 flex-shrink-0 px-2 ">
                <div className="flex flex-col h-full ">
                  <div className="relative h-48 mb-2 ">
                    <img
                      className="object-cover w-full h-full rounded-md"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <h2 className="text-sm font-semibold mb-1 line-clamp-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-1">
                      {product.rating.toFixed(1)} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-baseline mb-1">
                    <span className="text-lg font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-gray-500 line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-xs text-red-500">
                    (-{product.discount}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-0 transform -translate-y-16 -translate-x-14 border-black"
          onClick={prevSlide}
          disabled={startIndex === 0}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-0 transform -translate-y-16 translate-x-14 border-black"
          onClick={nextSlide}
          disabled={startIndex + 6 >= products.length}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
