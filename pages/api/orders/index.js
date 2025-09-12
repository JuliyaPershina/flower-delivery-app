import { connectDB } from '../../../lib/mongodb';
import Order from '../../../models/Order';

export default async function handler(req, res) {
  await connectDB();
  if (req.method === 'POST') {
    try {
      const newOrder = new Order(req.body);
      await newOrder.save();
      return res
        .status(201)
        .json({ message: 'Замовлення створено', orderId: newOrder._id });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Помилка сервера' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Метод ${req.method} не дозволений`);
  }
}
