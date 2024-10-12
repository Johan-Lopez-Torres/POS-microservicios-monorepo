"use client";

import React, { useState } from "react";
import {
  Bell,
  Settings,
  ChevronDown,
  Search,
  Grid,
  List,
  MoreHorizontal,
} from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: number;
  name: string;
  type: "Item" | "Service";
  price: number;
  currency: string;
  status: "Published" | "Draft" | "Inactive";
  totalSales: number;
  totalRevenue: number;
  createdAt: Date;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Chart Library - Free 90+ Charts UI KIT",
    type: "Item",
    price: 200,
    currency: "USD",
    status: "Published",
    totalSales: 10,
    totalRevenue: 2000,
    createdAt: new Date("2023-01-12T15:40:00"),
    image: "/placeholder.svg?height=40&width=40&text=Chart",
  },
  {
    id: 2,
    name: "SEO Consultation Session",
    type: "Service",
    price: 200,
    currency: "USD",
    status: "Draft",
    totalSales: 0,
    totalRevenue: 0,
    createdAt: new Date("2023-01-12T11:05:00"),
    image: "/placeholder.svg?height=40&width=40&text=SEO",
  },
  {
    id: 3,
    name: "Sony A7III Mirrorless Camera",
    type: "Item",
    price: 250,
    currency: "USD",
    status: "Published",
    totalSales: 15,
    totalRevenue: 3750,
    createdAt: new Date("2023-01-11T11:50:00"),
    image: "/placeholder.svg?height=40&width=40&text=Camera",
  },
  {
    id: 4,
    name: '"The Great Gatsby" Book Purchase',
    type: "Item",
    price: 250,
    currency: "USD",
    status: "Inactive",
    totalSales: 15,
    totalRevenue: 3750,
    createdAt: new Date("2023-01-11T09:15:00"),
    image: "/placeholder.svg?height=40&width=40&text=Book",
  },
  {
    id: 5,
    name: "Personal Financial Analysis",
    type: "Service",
    price: 320000,
    currency: "IDR",
    status: "Published",
    totalSales: 20,
    totalRevenue: 6400000,
    createdAt: new Date("2023-01-11T08:45:00"),
    image: "/placeholder.svg?height=40&width=40&text=Finance",
  },
  {
    id: 6,
    name: "Home Security Camera System",
    type: "Item",
    price: 250000,
    currency: "IDR",
    status: "Published",
    totalSales: 10,
    totalRevenue: 2500000,
    createdAt: new Date("2023-01-10T14:50:00"),
    image: "/placeholder.svg?height=40&width=40&text=Security",
  },
  {
    id: 7,
    name: "Wireless Noise-Canceling Headphones",
    type: "Item",
    price: 100,
    currency: "USD",
    status: "Draft",
    totalSales: 0,
    totalRevenue: 0,
    createdAt: new Date("2023-01-10T14:10:00"),
    image: "/placeholder.svg?height=40&width=40&text=Headphones",
  },
  {
    id: 8,
    name: "Truck Bed Liner Installation",
    type: "Service",
    price: 80,
    currency: "USD",
    status: "Published",
    totalSales: 10,
    totalRevenue: 800,
    createdAt: new Date("2023-01-10T13:40:00"),
    image: "/placeholder.svg?height=40&width=40&text=Truck",
  },
  {
    id: 9,
    name: "Interior Room Design",
    type: "Service",
    price: 50000,
    currency: "IDR",
    status: "Published",
    totalSales: 25,
    totalRevenue: 1250000,
    createdAt: new Date("2023-01-10T10:53:00"),
    image: "/placeholder.svg?height=40&width=40&text=Design",
  },
];

function ListingSales() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-indigo-600">Arto+</h1>
              <Select defaultValue="bagus-fikri">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select user" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bagus-fikri">Bagus Fikri</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="fikri-shop">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select shop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fikri-shop">Fikri Shop</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-4">
              <Input type="search" placeholder="Search" className="w-64" />
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Switch />
              <span className="text-sm font-medium">Pro Mode</span>
              <Button>
                Create <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                AI Assistant
              </Button>
            </div>
          </div>
          <nav className="flex space-x-4 mt-4">
            <Button variant="ghost">Overview</Button>
            <Button variant="ghost">Arto+</Button>
            <Button variant="ghost">Activities</Button>
            <Button variant="ghost" className="text-indigo-600">
              Products
            </Button>
            <Button variant="ghost">Billing</Button>
            <Button variant="ghost">People</Button>
            <Button variant="ghost">Report</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Products</h2>
          <Button>Add Products</Button>
        </div>

        <Tabs defaultValue="all-products" className="mb-6">
          <TabsList>
            <TabsTrigger value="all-products">All Products</TabsTrigger>
            <TabsTrigger value="coupons">Coupons</TabsTrigger>
            <TabsTrigger value="shipping-rates">Shipping Rates</TabsTrigger>
            <TabsTrigger value="tax-rates">Tax Rates</TabsTrigger>
            <TabsTrigger value="pricing-tables">Pricing Tables</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <Badge variant="secondary" className="rounded-full">
                  All 150
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  Item 100
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  Service 50
                </Badge>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Input type="search" placeholder="Search" className="w-64" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-4 font-medium text-gray-500">PRODUCTS</th>
                <th className="p-4 font-medium text-gray-500">PRICE</th>
                <th className="p-4 font-medium text-gray-500">STATUS</th>
                <th className="p-4 font-medium text-gray-500">TOTAL SALES</th>
                <th className="p-4 font-medium text-gray-500">TOTAL REVENUE</th>
                <th className="p-4 font-medium text-gray-500">CREATED AT</th>
                <th className="p-4 font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-gray-200">
                  <td className="p-4">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg mr-3"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    {product.price.toLocaleString()} {product.currency}
                    {product.type === "Service" && (
                      <span className="text-sm text-gray-500"> / Day</span>
                    )}
                  </td>
                  <td className="p-4">
                    <Badge
                      variant={
                        product.status === "Published"
                          ? "default"
                          : product.status === "Draft"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {product.status}
                    </Badge>
                  </td>
                  <td className="p-4">{product.totalSales}</td>
                  <td className="p-4">
                    {product.totalRevenue.toLocaleString()} {product.currency}
                  </td>
                  <td className="p-4">
                    {format(product.createdAt, "MMM dd, yyyy h:mm a")}
                  </td>
                  <td className="p-4">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-gray-200 text-center">
            <Button variant="link">Load More</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListingSales;