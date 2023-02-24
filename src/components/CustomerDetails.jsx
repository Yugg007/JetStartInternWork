import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Payment from "./Payment";

const CustomerDetails = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [ProductDetailFilled, setProductDetailFilled] = useState(false);
  const onSubmit = (data) => {
    setProductDetailFilled(true);
  }

  return (
    <div>
      {ProductDetailFilled ? <Payment /> :
        <div className="form-container">
          <h2>Customer Details</h2>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              id="name"
              className="form-field"
              type="text"
              placeholder="Name"
              {...register('Name', { required: "Name is required!" })}


            />

            <span>{errors.firstName?.message}</span>

            <input
              id="number"
              className="form-field"
              type="number"
              placeholder="Mobile Number"
              {...register('Number', { required: "Number is required!" })}

            />

            <span>{errors.lastName?.message}</span>


            <input
              id="email"
              className="form-field"
              type="email"
              placeholder="Email ID"
              {...register('email', { required: "Email ID is required!", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}

            />

            <span>{errors.email?.message}</span>

            <input
              id="address"
              className="form-field"
              type="text"
              placeholder="Address"
              {...register('password', {
                required: "Address is required!",
                minLength: { value: 4, message: "Address must be more than 4 characters" },
                maxLength: { value: 20, message: "Address cannot be more than 20 characters" }
              })}

            />

            <span>{errors.password?.message}</span>

            <button className="form-field" type="submit">
              Customer Details
            </button>
          </form>
        </div>
      }
    </div>
  );
}

export default CustomerDetails