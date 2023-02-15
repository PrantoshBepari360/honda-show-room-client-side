import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JvxegJEUT7RuCbtLoHEEh39vPICVKIR5clZ6nD0meI1Aa2zambO4vfyzQXo2yF30cOuMi1egLzPy0WQLk9ep8gd00HyXygTre"
);

const Payment = () => {
  const { paymentId } = useParams();
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`https://honda-show-room.onrender.com/orders/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [paymentId]);

  return (
    <div>
      <h2>
        Please pay for : {orders.name} for {orders.email}
      </h2>
      <h2>Pay: ${orders.price}</h2>

      {orders?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm orders={orders} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
