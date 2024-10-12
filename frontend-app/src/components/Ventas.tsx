import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx"
import {ChevronDown, LayoutGrid, List} from 'lucide-react';
import {products} from "@/data/Products.ts";
import ButtonDrawer from "@/components/ButtonDrawer.tsx";


const ProductList: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold"> Products  <span className="text-indigo-600">   · {products.length}</span>
                </h1>
                <div className="flex items-center space-x-4">
                    <ButtonDrawer />

                    <div className="flex items-center border rounded px-3 py-1">
                        <span className="mr-2">Sort by Revenue</span>
                        <ChevronDown size={20}/>
                    </div>

                    <div className="flex items-center border rounded px-3 py-1">
                        <span className="mr-2">30 days</span>
                        <ChevronDown size={20}/>
                    </div>

                    <div className="flex space-x-2">
                        <LayoutGrid size={24}/>
                        <List size={24}/>
                    </div>

                </div>
            </div>

            {/* Contenedor con scroll */}
            <div className="overflow-y-auto   max-h-[480px] border rounded-lg custom-scrollbar">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Orders</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>Net Change</TableHead>
                            <TableHead>Inventory</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center">
                                        <img src={product.image} alt={product.name} className="w-10 h-10 mr-3 rounded"/>
                                        <div>
                                            <div>{product.name}</div>
                                            <div className="text-sm text-gray-500">${product.price}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <span className="text-green-500 mr-1">★</span>
                                        {product.rating.toFixed(1)}
                                    </div>
                                </TableCell>
                                <TableCell>{product.orders}</TableCell>
                                <TableCell>${product.revenue.toLocaleString()}</TableCell>
                                <TableCell className={product.netChange >= 0 ? "text-green-500" : "text-red-500"}>
                                    {product.netChange > 0 ? "+" : ""}{product.netChange}%
                                </TableCell>
                                <TableCell>{product.inventory} left</TableCell>
                                <TableCell>...</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ProductList;

