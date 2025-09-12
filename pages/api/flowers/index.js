import { connectDB } from '../../../lib/mongodb';
import Flower from '../../../models/Flower';


export default async function handler(req, res) {
  await connectDB();

  const { shopId } = req.query;

  try {
    let flowers;
    if (shopId) {
      flowers = await Flower.find({ shopId }); 
    } else {
      flowers = await Flower.find({});
    }

    res.status(200).json(flowers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching flowers', error });
  }
}

