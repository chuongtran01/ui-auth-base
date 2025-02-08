"use client";

import { z } from "zod";
import SignupForm from "@/components/signup-form";
import { signUpFormSchema } from "../schemas/signup";

export default function CreateAccount() {
  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <SignupForm onSubmit={onSubmit} />
    </div>
  );
}
