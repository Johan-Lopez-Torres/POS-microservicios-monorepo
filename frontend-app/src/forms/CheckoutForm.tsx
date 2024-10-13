import { z } from 'zod';

export const checkoutSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().min(2, { message: "State must be at least 2 characters" }),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, { message: "Invalid ZIP code" }),
  country: z.string().min(2, { message: "Country must be at least 2 characters" }),
  phone: z.string().regex(/^\d{10}$/, { message: "Invalid phone number" }),
  paymentMethod: z.string().min(2, { message: "Payment method must be at least 2 characters" }),
  cardNumber: z.string().length(16, { message: "Invalid card number" }).regex(/^\d{16}$/, { message: "Invalid card number" }),
  cardExpiry : z.string().regex(/^\d{2}\/\d{2}$/, { message: "Invalid card expiry" }),
  cardCVC: z.string().regex(/^\d{3}$/, { message: "Invalid CVV" }),
  saveInfo: z.boolean().optional(),
});


