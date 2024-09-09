"use client";
import { useState } from 'react';
import md5 from 'md5';

export default function Checkout() {
  const [formData, setFormData] = useState({
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@example.com',
    phone: '0771234567',
    amount: '1000',
    order_id: '12345',
    currency: 'LKR', 
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Hash calculation
    const merchant_id = "1228091"; // Use the correct Merchant ID
    const merchant_secret = "NDAzNDU5MDA3OTM4OTIzODE3ODQzNjkzNTc4NzExMTI2Mjc0NzQ="; // Your PayHere merchant secret key
    
    const { order_id, amount, currency } = formData;

    // Generate the hash using MD5
    const hash = md5(`${merchant_id}${order_id}${amount}${currency}${merchant_secret}`);
    
    const payHereForm = document.createElement('form');
    payHereForm.method = 'POST';
    payHereForm.action = 'https://sandbox.payhere.lk/pay/checkout';  // Use sandbox URL for testing

    const fields = {
      merchant_id: merchant_id,
      return_url: 'https://abcd1234.ngrok.io/success',  // Public URLs like ngrok for testing
      cancel_url: 'https://abcd1234.ngrok.io/cancel',
      notify_url: 'https://abcd1234.ngrok.io/notify',
      order_id: formData.order_id,
      items: 'Sample Item',
      currency: formData.currency,
      amount: formData.amount,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      hash: hash,  // Include the generated hash
    };

    // Create hidden input fields for each form field and append them to the form
    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      payHereForm.appendChild(input);
    }

    // Append the form to the body and submit
    document.body.appendChild(payHereForm);
    payHereForm.submit();
  };

  return (
    <div>
      <h1>Pay with PayHere</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          required
          readOnly
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          required
          readOnly
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          required
          readOnly
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          required
          readOnly
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          required
          readOnly
        />
        <input
          type="text"
          name="order_id"
          placeholder="Order ID"
          value={formData.order_id}
          required
          readOnly
        />
        <button type="submit">Pay with PayHere</button>
      </form>
    </div>
  );
}
