'use client';
import md5 from 'md5';
import { useState } from 'react';

export default function PayHereCheckout() {
  const [formData, setFormData] = useState({
    item_number_1: '11111',
    quantity_1: '1',
    merchant_id: '1228091',
    return_url: 'http://localhost:3000/success',  // Replace with actual URL
    cancel_url: 'http://localhost:3000/cancel',   // Replace with actual URL
    notify_url: 'http://localhost:3000/notify',   // Replace with actual URL
    order_id: 'ItemNo12345',  // Replace with dynamic order ID if needed
    items: 'Door bell wireless',
    amount: '1000',  // Replace with the amount to be charged
    currency: 'LKR',
    internal_checkout: '0',
    first_name: 'Sudeera',
    last_name: 'Sudeera',
    email: 'designer@admin.com',
    phone: '0764786503',
    address: 'colombo',
    city: 'colombo',
    country: 'Sri Lanka',
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const payHereForm = document.createElement('form');
    payHereForm.method = 'POST';
    payHereForm.action = 'https://sandbox.payhere.lk/pay/checkout';  // Use sandbox for testing
    const merchant_id = "1228091"; // Use the correct Merchant ID
    const merchant_secret = "MTE4MDIxNzQxMDY3NzA4MTA5ODM1MTg1NzExNzQzNDA2Mzg0MTQw"; // Your PayHere merchant secret key
    let hashedSecret    = md5(merchant_secret).toString().toUpperCase();
    const { order_id, amount, currency } = formData;
    let amountFormated  = parseFloat( amount ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');

    let hash  = md5("1228091" + order_id + amountFormated + currency + hashedSecret).toString().toUpperCase();
    const fields = {
      item_number_1: formData.item_number_1,
      quantity_1: formData.quantity_1,
      merchant_id: formData.merchant_id,
      return_url: formData.return_url,
      cancel_url: formData.cancel_url,
      notify_url: formData.notify_url,
      order_id: formData.order_id,
      items: formData.items,
      amount: formData.amount,
      currency: formData.currency,
      internal_checkout: formData.internal_checkout,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      hash: hash
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
        <button type="submit">Proceed to Pay</button>
      </form>
    </div>
  );
}
