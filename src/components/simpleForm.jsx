import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
  name: z.string().min(4, "Name must be at least 4 characters long"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "you must be atleast 18 years old"),
});

function SimpleForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values) {
    console.log(values);
    alert("Form submitted");
  }

  return (
    <form action="" onSubmit={form.handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Registration Form</h2>
      
      <div className="form-field">
        <input
          type="text"
          {...form.register("name")}
          placeholder="put your name"
          className="form-input"
        />
        {form.formState.errors.name && (
          <p className="error-message">{form.formState.errors.name.message}</p>
        )}
      </div>

      <div className="form-field">
        <input
          type="text"
          {...form.register("email")}
          placeholder="put your email"
          className="form-input"
        />
        {form.formState.errors.email && (
          <p className="error-message">{form.formState.errors.email.message}</p>
        )}
      </div>

      <div className="form-field">
        <input
          type="number"
          {...form.register("age", { valueAsNumber: true })}
          placeholder="put your age"
          className="form-input"
        />
        {form.formState.errors.age && (
          <p className="error-message">{form.formState.errors.age.message}</p>
        )}
      </div>

      <button className="submit-button">submit</button>
    </form>
  );
}

export default SimpleForm;