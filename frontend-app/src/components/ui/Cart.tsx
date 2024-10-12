import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react"; // Importa los íconos necesarios
import { Button } from "@/components/ui/button";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartProps = {
  cartItems: CartItem[]; // Recibe los items como props
  handleQuantityChange: (id: number, delta: number) => void; // Función para manejar el cambio de cantidad
  handleRemoveItem: (id: number) => void; // Función para eliminar un item
  totalItems: number; // Total de items en el carrito
  setStep: (step: number) => void; // Función para cambiar el paso (checkout)
};

const Cartr: React.FC<CartProps> = ({
  cartItems,
  handleQuantityChange,
  handleRemoveItem,
  totalItems,
  setStep,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cart ({totalItems} items)</CardTitle>
        <CardDescription>Review and edit your items</CardDescription>
      </CardHeader>
      <CardContent>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-md mr-4 h-20 w-20 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Price: ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity === 1} // Deshabilita cuando la cantidad es 1
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
      {cartItems.length > 0 && (
        <CardFooter>
          <Button
            onClick={() => setStep(2)}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            Proceed to Shipping
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default Cartr;
