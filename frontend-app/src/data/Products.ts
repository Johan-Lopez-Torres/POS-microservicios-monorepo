interface Product {
    id: number;
    name: string;
    price: number;
    rating: number;
    orders: number;
    revenue: number;
    netChange: number;
    inventory: number;
    image: string;
}
const image = "data:image/png;base64,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"


export const products: Product[] = [
    { id: 1, name: "Run Star Hike Platform", price: 115, rating: 4.5, orders: 732, revenue: 89795.03, netChange: 8, inventory: 253, image:image },
    { id: 2, name: "Nike Zoom Vomero 5", price: 160, rating: 2.8, orders: 592, revenue: 95232.92, netChange: -10, inventory: 748, image:image },
    { id: 3, name: "Ja 1", price: 140, rating: 3.8, orders: 473, revenue: 56194.75, netChange: 12, inventory: 6, image:image },
    { id: 4, name: "Nike ACG Moc", price: 80, rating: 4.5, orders: 502, revenue: 44402.65, netChange: 23, inventory: 86, image:image },
    { id: 5, name: "Nike Air Max 1", price: 75, rating: 4.5, orders: 188, revenue: 32815.33, netChange: 5, inventory: 21,image:image},
    { id: 6, name: "Nike Pegasus Trail 4 GORE-TEX", price: 160, rating: 5.0, orders: 53, revenue: 12792.96, netChange: -15, inventory: 97, image:image },
    { id: 7, name: "Nike Air Force 1 '07", price: 115, rating: 4.5, orders: 49, revenue: 31322.75, netChange: 18, inventory: 52, image:image},
    { id: 8, name: "Nike Free Metcon 5", price: 120, rating: 3.8, orders: 75, revenue: 9093.95, netChange: -7, inventory: 70, image:image },
    { id: 9, name: "Nike Air Max 90", price: 120, rating: 4.0, orders: 85, revenue: 10792.85, netChange: 0, inventory: 43, image:image },
    { id: 10, name: "Nike Air Max 97", price: 170, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image:image },
    { id: 11, name: "Nike Air Max 270 React", price: 150, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image:image },
    { id: 12, name: "Nike Air Max 270 React", price: 150, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image:image },
    { id: 13, name: "Nike Air Max 270 React", price: 150, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image:image },
    { id: 14, name: "Nike Air Max 270 React", price: 150, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image:image },
    { id: 15, name: "Nike Air Max 270 React", price: 150, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image:image },
    { id: 16, name: "Nike Air Max 270 React", price: 150, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image:image },
    { id: 17, name: "Nike Air Max 270 React", price: 150, rating: 4.5, orders: 92, revenue: 15992.75, netChange: 9, inventory: 17, image },
];