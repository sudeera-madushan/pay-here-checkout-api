"use client";
import { useState } from 'react';

export default function Checkout() {
  const [order, setOrder] = useState({
    orderId: 'ORDER12345',
    items: 'Test Item',
    amount: '1000',
    currency: 'LKR',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Call the backend API to initiate the payment and get the hash
    const response = await fetch('http://localhost:3001/initiate-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    const result = await response.json();

    // Submit form to PayHere with the hash
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://sandbox.payhere.lk/pay/checkout';

    form.innerHTML = `
      <input type="hidden" name="merchant_id" value="1228091" />
      <input type="hidden" name="return_url" value="http://localhost:3000/return" />
      <input type="hidden" name="cancel_url" value="http://localhost:3000/cancel" />
      <input type="hidden" name="notify_url" value="http://localhost:3001/notify" />
      <input type="hidden" name="order_id" value="${order.orderId}" />
      <input type="hidden" name="items" value="${order.items}" />
      <input type="hidden" name="currency" value="${order.currency}" />
      <input type="hidden" name="amount" value="${order.amount}" />
      <input type="hidden" name="first_name" value="${order.firstName}" />
      <input type="hidden" name="last_name" value="${order.lastName}" />
      <input type="hidden" name="email" value="${order.email}" />
      <input type="hidden" name="phone" value="${order.phone}" />
      <input type="hidden" name="address" value="${order.address}" />
      <input type="hidden" name="city" value="${order.city}" />
      <input type="hidden" name="hash" value="${result.hash}" />
    `;

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Add input fields for the order details */}
        <input type="text" placeholder="First Name" value={order.firstName} onChange={(e) => setOrder({ ...order, firstName: e.target.value })} />
        {/* Other fields for order details... */}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
