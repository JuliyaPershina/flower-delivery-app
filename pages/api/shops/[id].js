import { connectDB } from '../../../lib/mongodb';
import Shop from '../../../models/Shop';

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  try {
    
    const shop = await Shop.findOne({ shopId: id });

    if (!shop) return res.status(404).json({ message: 'Shop not found' });

    res.status(200).json(shop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching shop', error });
  }
}
