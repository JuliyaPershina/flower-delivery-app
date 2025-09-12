import mongoose from 'mongoose';

const ShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String },
});

export default mongoose.models.Shop || mongoose.model('Shop', ShopSchema);
