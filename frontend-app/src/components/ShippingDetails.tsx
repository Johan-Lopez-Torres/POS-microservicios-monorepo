import { useFormContext } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShippingDetails = () => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const country = watch("country");
  console.log(country);

  const renderInput = (attributeName: string, label: string, type = "text") => (
    <div className="space-y-2">
      <Label htmlFor={attributeName}>{label}</Label>
      <Input
        className="focus:border-indigo-600 focus-visible:ring-transparent focus:border-2"
        id={attributeName}
        type={type}
        {...register(attributeName)}
      />
      {errors[attributeName] && (
        <p className="text-red-500 text-sm">
          {errors[attributeName]?.message as string}
        </p>
      )}
    </div>
  );

  return (
    <Card className="border-hidden">
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>Enter your shipping details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {renderInput("firstName", "First Name")}
          {renderInput("lastName", "Last Name")}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {renderInput("email", "Email", "email")}
          {renderInput("address", "Address")}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {renderInput("city", "City")}
          {renderInput("state", "State")}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {renderInput("zipCode", "ZIP Code")}
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              onValueChange={(value) =>
                setValue("country", value, { shouldValidate: true })
              }
              value={country}
            >
              <SelectTrigger className="focus:outline-none focus:ring-2 focus:ring-indigo-600">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="mx">Mexico</SelectItem>
              </SelectContent>
            </Select>
            {errors.country && (
              <p className="text-red-500 text-sm">
                {errors.country.message as string}
              </p>
            )}
          </div>
        </div>
        {renderInput("phone", "Phone")}
      </CardContent>
    </Card>
  );
};

export default ShippingDetails;
