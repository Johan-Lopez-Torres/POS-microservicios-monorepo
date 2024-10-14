import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CardDetails: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const renderInput = (id: string, placeholder: string, label: string) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        className="focus:border-indigo-600 focus-visible:ring-transparent focus:border-2"
        id={id}
        {...register(id)}
        placeholder={placeholder}
      />
      {errors[id] && (
        <p className="text-red-500 text-sm">{errors[id]?.message as string}</p>
      )}
    </div>
  );

  return (
    <div className="mt-4 space-y-4">
      {renderInput("cardNumber", "1234 5678 9012 3456", "Card Number")}
      <div className="grid grid-cols-2 gap-4">
        {renderInput("cardExpiry", "MM/YY", "Expiry Date")}
        {renderInput("cardCVC", "123", "CVC")}
      </div>
    </div>
  );
};

export default CardDetails;
