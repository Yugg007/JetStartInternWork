import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import CustomerDetails from "./components/CustomerDetails";

export default function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ordered, setordered] = useState(false);
  const onSubmit = (data) => {
    setordered(true)    
  }

  return (
    <div>
      {ordered ? <CustomerDetails /> :
        <div className="form-container">
          <h2>Order Details</h2>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              id="product-name"
              className="form-field"
              type="text"
              placeholder="Product Name"
              {...register('ProductName', { required: "Product Name is required!" })}


            />

            <span>{errors.firstName?.message}</span>

            <input
              id="price"
              className="form-field"
              type="number"
              placeholder="Price"
              {...register('price', { required: "Price is required!" })}

            />

            <span>{errors.lastName?.message}</span>


            <input
              id="orderID"
              className="form-field"
              type="number"
              placeholder="Order ID"
              {...register('orderID', { required: "Order ID is required!" })}

            />

            <span>{errors.email?.message}</span>

            <input
              id="Date"
              className="form-field"
              type="date"
              placeholder="Date"
              {...register('date', {
                required: "Date is required!"
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