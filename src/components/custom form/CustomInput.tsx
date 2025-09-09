import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

interface CustomInputProps {
  type: string;
  name: string;
  placeholder: string;
  label: ReactNode;
  defaultValue?: string;
  disabled?: boolean;
}

function CustomInput({
  type,
  name,
  placeholder,
  label,
  defaultValue,
  disabled,
}: CustomInputProps) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>

            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              className="w-full"
              required
              {...field}
              disabled={disabled}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm">
                {errors[name].message as string}
              </p>
            )}
          </>
        )}
      />
    </>
  );
}

export default CustomInput;
