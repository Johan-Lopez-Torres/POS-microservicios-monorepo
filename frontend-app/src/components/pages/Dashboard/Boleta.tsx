import React, {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Checkbox} from "@/components/ui/checkbox"
import {Card, CardContent} from "@/components/ui/card"
import {CalendarIcon, FileText, Mail, CreditCard} from 'lucide-react'
import {ComboBox} from "@/components/ComboBox.tsx";

export default function Boleta() {
    const [invoiceData, setInvoiceData] = useState({
        customer: 'John Smith',
        email: 'john_s@gmail.com',
        subject: 'Service per June 2023',
        dueDate: '10 November 2023',
        currency: 'IDR',
        product: {
            name: 'Summer 2K23 T-shirt',
            price: 125000,
            quantity: 1,
            tax: 10
        },
        discount: 'Summer Sale 10%'
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInvoiceData(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <Card className="max-w-6xl mx-auto">
                <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">

                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {/* Left Column - Invoice Details */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Detalles de comprobante</h2>

                            <div className="space-y-4">
                                <div className="flex flex-col gap-3">
                                    <Label>Comprobante</Label>
                                    <ComboBox/>

                                </div>

                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="subject">Documento</Label>
                                    <ComboBox/>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label htmlFor="subject">Numero de documento</Label>
                                    <Input
                                        className="focus-visible:ring-transparent   focus:border-2 focus:border-indigo-600"
                                        id="subject" placeholder="Ejemplo: 7123214 o 123213241" name="subject"/></div>

                                <div>
                                    <Label htmlFor="dueDate">Fecha</Label>
                                    <div className="relative">
                                        <Input className="focus-visible:ring-transparent   focus:border-2 focus:border-indigo-600" id="dueDate" name="dueDate" value={invoiceData.dueDate}
                                               onChange={handleInputChange}/>
                                        <CalendarIcon
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="currency">Currency</Label>
                                    <Select defaultValue={invoiceData.currency}>
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="IDR">IDR - Indonesian Rupiah</SelectItem>
                                            <SelectItem value="USD">USD - US Dollar</SelectItem>
                                            <SelectItem value="EUR">EUR - Euro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <h3 className="font-semibold mb-2">Product</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <img src="/placeholder.svg?height=40&width=40" alt="Product"
                                                 className="w-10 h-10 rounded"/>
                                            <Input value={invoiceData.product.name}
                                                   onChange={(e) => setInvoiceData(prev => ({
                                                       ...prev,
                                                       product: {...prev.product, name: e.target.value}
                                                   }))} className="flex-grow"/>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <Input type="number" value={invoiceData.product.quantity}
                                                   onChange={(e) => setInvoiceData(prev => ({
                                                       ...prev,
                                                       product: {...prev.product, quantity: parseInt(e.target.value)}
                                                   }))} placeholder="Qty"/>
                                            <Input type="number" value={invoiceData.product.price}
                                                   onChange={(e) => setInvoiceData(prev => ({
                                                       ...prev,
                                                       product: {...prev.product, price: parseInt(e.target.value)}
                                                   }))} placeholder="Price"/>
                                            <Select defaultValue={invoiceData.product.tax.toString()}>
                                                <SelectTrigger>
                                                    <SelectValue/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="0">0%</SelectItem>
                                                    <SelectItem value="10">10%</SelectItem>
                                                    <SelectItem value="20">20%</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <Button variant="outline" className="w-full justify-start">
                                    <span className="text-blue-600 mr-2">+</span> Add New Line
                                </Button>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="addCoupon"/>
                                    <label htmlFor="addCoupon"
                                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Add
                                        Coupon</label>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="addDiscount" defaultChecked/>
                                    <label htmlFor="addDiscount"
                                           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Add
                                        Discount</label>
                                    <Select defaultValue={invoiceData.discount}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Summer Sale 10%">Summer Sale 10%</SelectItem>
                                            <SelectItem value="Promo 20%">Promo 20%</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Preview */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">Preview</h2>
                                <div className="flex space-x-2">
                                    <Button variant="outline" size="sm">
                                        <FileText className="mr-2 h-4 w-4"/> PDF
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Mail className="mr-2 h-4 w-4"/> Email
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <CreditCard className="mr-2 h-4 w-4"/> Payment page
                                    </Button>
                                </div>
                            </div>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">INV2398-08-087</span>
                                            <span className="text-gray-500">Due date</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>{invoiceData.dueDate}</span>
                                            <span>{invoiceData.subject}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-500">
                                            <span>Billed to</span>
                                            <span>Currency</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <p>{invoiceData.customer}</p>
                                                <p className="text-gray-500">{invoiceData.email}</p>
                                            </div>
                                            <span>{invoiceData.currency} - Indonesian Rupiah</span>
                                        </div>
                                        <table className="w-full">
                                            <thead>
                                            <tr className="text-left text-gray-500">
                                                <th>DESCRIPTION</th>
                                                <th>QTY</th>
                                                <th>UNIT PRICE</th>
                                                <th>AMOUNT</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>{invoiceData.product.name}</td>
                                                <td>{invoiceData.product.quantity}</td>
                                                <td>{invoiceData.product.price.toLocaleString()} IDR</td>
                                                <td>{(invoiceData.product.quantity * invoiceData.product.price).toLocaleString()} IDR</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div className="flex justify-end space-y-1 text-right">
                                            <div className="w-1/2">
                                                <div className="flex justify-between">
                                                    <span>Subtotal</span>
                                                    <span>{(invoiceData.product.quantity * invoiceData.product.price).toLocaleString()} IDR</span>
                                                </div>
                                                <div className="flex justify-between text-gray-500">
                                                    <span>Discount -10%</span>
                                                    <span>-12,500 IDR</span>
                                                </div>
                                                <div className="flex justify-between font-semibold">
                                                    <span>Total</span>
                                                    <span>112,500 IDR</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Amount due</span>
                                                    <span>112,500 IDR</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="mt-4">
                                <h3 className="font-semibold mb-2">Attachment</h3>
                                <div className="flex items-center space-x-2 text-sm text-blue-600">
                                    <FileText className="h-4 w-4"/>
                                    <span>Product list.PDF</span>
                                    <span className="text-gray-500">6 KB</span>
                                    <Button variant="link" className="p-0 h-auto">Download</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <p className="text-sm text-gray-500">Last saved: Today at 4:30 PM</p>
                        <div className="space-x-2">
                            <Button variant="outline">Cancel</Button>
                            <Button>Processing Invoice</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}