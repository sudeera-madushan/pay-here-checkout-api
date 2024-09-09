import axios from 'axios';

export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    const { amount, order_id, first_name, last_name, email, phone } = req.body;
    
    // Payload to send to PayHere
    const payload = {
      merchant_id: "1228091", // Replace with your Merchant ID
      return_url: 'http://localhost:3000/success',  // Replace with your success URL
      cancel_url: 'http://localhost:3000/cancel',   // Replace with your cancel URL
      notify_url: 'http://localhost:3000/api/notify', // Replace with your notify URL
      order_id: order_id,
      items: 'Sample Item',
      currency: 'LKR',
      amount: amount,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
    };

    try {
      const response = await axios.post('https://sandbox.payhere.lk/pay/checkout', payload);
      res.status(200).json({ url: response.data });
    } catch (error) {
      res.status(500).json({ error: 'Payment initiation failed' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
