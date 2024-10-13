import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CardDetails: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="mt-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            {...register("cardNumber")}
            placeholder="1234 5678 9012 3456"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">
              {errors.cardNumber?.message as string}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cardExpiry">Expiry Date</Label>
            <Input
              id="cardExpiry"
              {...register("cardExpiry")}
              placeholder="MM/YY"
            />
            {errors.cardExpiry && (
              <p className="text-red-500 text-sm">
                {errors.cardExpiry?.message as string}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardCVC">CVC</Label>
            <Input id="cardCVC" {...register("cardCVC")} placeholder="123" />
            {errors.cardCVC && (
              <p className="text-red-500 text-sm">
                {errors.cardCVC?.message as string}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
