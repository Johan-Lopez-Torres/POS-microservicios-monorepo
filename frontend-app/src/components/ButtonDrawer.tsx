import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { PlusCircle, X } from 'lucide-react'

export default function ButtonDrawer() {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        stock: '',
        isAvailable: true,
    })
    const [tags, setTags] = useState<string[]>([])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ ...formData, tags })
        // Aquí iría la lógica para agregar el producto
        setIsOpen(false)
        setFormData({
            name: '',
            price: '',
            description: '',
            category: '',
            stock: '',
            isAvailable: true,
        })
        setTags([])
    }

    const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            e.preventDefault()
            setTags(prev => [...new Set([...prev, e.currentTarget.value.trim()])])
            e.currentTarget.value = ''
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(prev => prev.filter(tag => tag !== tagToRemove))
    }

    return (
        <div className={`${isOpen ? 'bg-black/50' : ''}  transition-colors duration-300`}>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button className=" bg-indigo-600 bottom-4 right-4 shadow-lg hover:shadow-xl transition-shadow" onClick={() => setIsOpen(true)}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Agregar Producto
                    </Button>
                </SheetTrigger>
                <SheetContent className="sm:max-w-[425px] overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Agregar Nuevo Producto</SheetTitle>
                        <SheetDescription>
                            Complete el formulario para agregar un nuevo producto a su inventario.
                        </SheetDescription>
                    </SheetHeader>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre del Producto</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Ingrese el nombre del producto"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="price">Precio</Label>
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="Ingrese el precio"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Descripción</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Ingrese la descripción del producto"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Categoría</Label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                                required
                            >
                                <option value="">Seleccione una categoría</option>
                                <option value="electronics">Electrónicos</option>
                                <option value="clothing">Ropa</option>
                                <option value="books">Libros</option>
                                <option value="home">Hogar</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="stock">Stock</Label>
                            <Input
                                id="stock"
                                name="stock"
                                type="number"
                                value={formData.stock}
                                onChange={handleInputChange}
                                placeholder="Ingrese la cantidad en stock"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="isAvailable"
                                name="isAvailable"
                                checked={formData.isAvailable}
                                onChange={(e) => setFormData(prev => ({ ...prev, isAvailable: e.target.checked }))}
                                className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor="isAvailable">Disponible para la venta</Label>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags (presione Enter para agregar)</Label>
                            <Input
                                id="tags"
                                onKeyDown={handleAddTag}
                                placeholder="Agregar tag..."
                            />
                            <div className="flex flex-wrap gap-2 mt-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm flex items-center"
                                    >
                    {tag}
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveTag(tag)}
                                            className="ml-1 focus:outline-none"
                                        >
                      <X size={14} />
                    </button>
                  </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <SheetClose asChild>
                                <Button variant="outline" type="button">Cancelar</Button>
                            </SheetClose>
                            <Button className="bg-indigo-600" type="submit">Agregar Producto</Button>
                        </div>
                    </form>
                </SheetContent>
            </Sheet>
        </div>
    )
}