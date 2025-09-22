"use client";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import { Card, CardHeader, CardBody, Input, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const submitHandler = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Card className="mx-auto p-3 w-2/5">
      <CardHeader className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} className="text-[#f9275cde]" />
            <h1 className="font-semibold text-[#f9275cde] text-3xl">
              Register
            </h1>
          </div>
          <p className="text-[#1d1d1d]">Welcome to Amoria</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-4">
            <Input
              label="Name"
              variant="bordered"
              defaultValue=""
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />

            <Input
              label="Email"
              variant="bordered"
              defaultValue=""
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              variant="bordered"
              defaultValue=""
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <Button
              fullWidth
              type="submit"
              className="bg-[#f9275cde] text-white text-lg"
              isDisabled={!isValid}
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default RegisterForm;
