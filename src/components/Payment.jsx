import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FinalCard from './FinalCard'



const Payment = () => {

  const { handleSubmit } = useForm();

  const [PaymentPlaced, setPaymentPlaced] = useState(false);
  const onSubmit = () => {
    setPaymentPlaced(true);
  }


  return (
    <div>
      {PaymentPlaced ? <FinalCard /> :
        <div className="form-container">
          <h2>Payment Details</h2>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>        
            <button className="form-field" type="submit">
              Pay using UPI Method
            </button>
            <button className="form-field" type="submit">
              Debit Card
            </button>
            <button className="form-field" type="submit">
              Credit Card
            </button>
          </form>
        </div>
      }
    </div>
  );
}

export default Payment