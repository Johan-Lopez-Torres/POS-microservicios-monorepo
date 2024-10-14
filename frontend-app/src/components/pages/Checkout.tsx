import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Controller, useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle, AlertCircle, CreditCard } from "lucide-react";

import { initialCartItems } from "@/data/Cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Toast } from "@/components/ui/toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Types
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CheckoutFormData = z.infer<typeof checkoutSchema>;

// Form schema
import { checkoutSchema } from "@/forms/CheckoutForm";
import Cart from "../ui/Cart";
import CardDetails from "../ui/CardDetails";
import ShippingDetails from "../ShippingDetails";

export default function EnhancedCheckout() {
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [cartItems, setCartItems] = useState<Product[]>(initialCartItems);

  const methods = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = methods;

  const paymentMethod = watch("paymentMethod");
  console.log("hola" + paymentMethod);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxRate = 0.08; // 8% tax rate
  const tax = subtotal * taxRate;
  const shipping = 10; // Flat shipping rate
  const total = subtotal + tax + shipping - discount;

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleCouponApply = () => {
    setLoading(true);
    // Simulating API call to validate coupon
    setTimeout(() => {
      if (couponCode.toLowerCase() === "save10") {
        setDiscount(subtotal * 0.1);
        setToastMessage("Coupon applied successfully!");
      } else {
        setToastMessage("Invalid coupon code");
      }
      setShowToast(true);
      setLoading(false);
    }, 1500);
  };

  const onSubmit = (data: CheckoutFormData) => {
    setLoading(true);
    // Simulating API call to process order
    setTimeout(() => {
      console.log("Order submitted:", data);
      setOrderComplete(true);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const steps = ["Cart", "Shipping", "Payment"];

  interface ProgressProps {
    value: number;
    className?: string;
    progressClassName?: string;
  }

  const ProgressBar: React.FC<ProgressProps> = ({
    value,
    className,
    progressClassName,
  }) => {
    return (
      <div className={`relative w-full h-4 bg-gray-200 ${className}`}>
        <div
          className={`absolute top-0 left-0 h-full rounded-lg ${progressClassName}`}
          style={{ width: `${value}%` }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4 ">
        {/* PROGRESS BAR */}
        <div className="mb-8">
          <ProgressBar
            value={(step / steps.length) * 100}
            className="w-full"
            progressClassName="bg-indigo-600"
          />

          {/* BAR NAMES */}
          <div className="flex justify-between mt-2">
            {steps.map((stepName, index) => (
              <span
                key={stepName}
                className={`text-md font-semibold ${
                  index < step ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {stepName}
              </span>
            ))}
          </div>
        </div>

        {!orderComplete ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {/* CART COMPONENT */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <Cart
                        cartItems={cartItems}
                        handleQuantityChange={handleQuantityChange}
                        handleRemoveItem={handleRemoveItem}
                        totalItems={totalItems}
                        setStep={setStep}
                      />
                    </motion.div>
                  )}

                  {/* SHIPPING INFORMATION */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <Card >
                        <FormProvider {...methods} >
                          <ShippingDetails />
                        </FormProvider>

                        <CardFooter className="flex justify-between 
                        ">
                          <Button variant="outline" onClick={() => setStep(1)}>
                            Back
                          </Button>
                          <Button
                            className="bg-indigo-600 hover:bg-indigo-700"
                            onClick={() => setStep(3)}
                          >
                            Continue to Payment
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  )}

                  {/* PAYMENT METHOD */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>Payment Method</CardTitle>
                          <CardDescription>
                            Choose your preferred payment method
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Controller
                            name="paymentMethod"
                            control={control} // No olvides pasar el `control` de `useForm`
                            render={({ field }) => (
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange} // Cambiar a onValueChange en vez de onChange
                                className="space-y-4"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="credit-card"
                                    id="credit-card"
                                  />
                                  <Label
                                    htmlFor="credit-card"
                                    className="flex items-center"
                                  >
                                    <CreditCard className="mr-1 w-8" /> Credit
                                    Card
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="paypal" id="paypal" />
                                  <Label htmlFor="paypal">PayPal</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="apple-pay"
                                    id="apple-pay"
                                  />
                                  <Label htmlFor="apple-pay">Apple Pay</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="google-pay"
                                    id="google-pay"
                                  />
                                  <Label htmlFor="google-pay">Google Pay</Label>
                                </div>
                              </RadioGroup>
                            )}
                          />
                          <FormProvider {...methods}>
                            <form
                              onSubmit={methods.handleSubmit((data) =>
                                console.log(data)
                              )}
                            >
                              {paymentMethod === "credit-card" && (
                                <CardDetails />
                              )}
                            </form>
                          </FormProvider>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" onClick={() => setStep(2)}>
                            Back
                          </Button>
                          <Button type="submit" disabled={loading}>
                            {loading ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing
                              </>
                            ) : (
                              "Place Order"
                            )}
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* ORDER SUMMARY COMPONENT */}
            <div className="relative ">
              <div className="sticky top-8 bg-yellow-400 ">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center ">
                          <img
                            src={item.image}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="rounded-md mr-2 h-16 w-16 object-cover transition duration-300 ease-in-out  hover:scale-110 "
                          />

                          <div className="w-4" />
                          <span>
                            {item.name} (x{item.quantity})
                          </span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="pt-4">
                      <Label htmlFor="coupon">Coupon Code</Label>
                      <div className="flex mt-2">
                        <Input
                          id="coupon"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter coupon code"
                          className="rounded-r-none focus-visible:ring-transparent focus:border-2  focus:border-solid focus:border-r-0 focus:border-indigo-600"
                        />
                        <Button
                          onClick={handleCouponApply}
                          disabled={loading}
                          className="rounded-l-none bg-indigo-600 hover:bg-indigo-700 "
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  Order Completed!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center mb-4">
                  Thank you for your purchase. Your order has been successfully
                  placed and will be processed soon.
                </p>
                <p className="text-center text-muted-foreground">
                  Order number: #12345678
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={() => (window.location.href = "/")}>
                  Continue Shopping
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </div>

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
                {discount > 0 ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                <p>{toastMessage}</p>
              </div>
            </Toast>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
