import React, { useEffect, useRef } from 'react';
import { Client, IFrame } from '@stomp/stompjs';
import SockJS from 'sockjs-client/dist/sockjs';

// Solución: Definir 'global' para el entorno del navegador
window.global = window;

export const CartSenderComponent: React.FC = () => {
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/websocket-endpoint'),
      onConnect: () => {
        console.log('Connected to WebSocket');
      },
      onStompError: (frame: IFrame) => {
        console.error('STOMP error', frame);
      },
    });

    client.activate();
    clientRef.current = client;

    // Clean up on unmount
    return () => {
      if (client.connected) {
        client.deactivate();
      }
    };
  }, []);

  const sendCart = () => {
    const cartItem = {
        product: {
            id: 1, // ID del producto
        },
        cart: {
            id: 1, // ID del carrito
        },
        price: 19.99, // Precio del producto
        discount: 2.00, // Descuento aplicado (puede ser null si no hay descuento)
        quantity: 1, // Cantidad
    };

    clientRef.current?.publish({
        destination: '/app/cart/add',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem),
    });

    console.log('Cart item sent:', cartItem);
};

  

  return (
    <div>
      <button onClick={sendCart}>Send Cart</button>
    </div>
  );
};
