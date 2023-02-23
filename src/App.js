import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import CustomerDetails from "./components/CustomerDetails";

export default function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [field, setField] = useState();
  const [submitted, setSubmit] = useState(false);

  const onSubmit = (data) => {
    setField(data)
    setSubmit(true)
  }

  console.log(errors.email)

  return (
    <div>
      {submitted ? <CustomerDetails /> :
        <div className="form-container">
          <h2>Order Details</h2>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>

          

            <input
              id="first-name"
              className="form-field"
              type="text"
              placeholder="Product Name"
              {...register('firstName', { required: "Product Name is required!" })}


            />

            <span>{errors.firstName?.message}</span>

            <input
              id="last-name"
              className="form-field"
              type="text"
              placeholder="Price"
              {...register('lastName', { required: "Price is required!" })}

            />

            <span>{errors.lastName?.message}</span>


            <input
              id="email"
              className="form-field"
              type="email"
              placeholder="Order ID"
              {...register('email', { required: "Order ID is required!", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}

            />

            <span>{errors.email?.message}</span>

            <input
              id="Password"
              className="form-field"
              type="password"
              placeholder="Date"
              {...register('password', {
                required: "Date is required!",
                minLength: { value: 4, message: "Password must be more than 4 characters" },
                maxLength: { value: 20, message: "Password cannot be more than 20 characters" }
              })}

            />

            <span>{errors.password?.message}</span>

            <button className="form-field" type="submit">
              Order
            </button>
          </form>
        </div>
      }
    </div>
  );
}