import mongoose from 'mongoose';

const FlowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }, 
  inStock: { type: Boolean, default: true },
  description: { type: String },
  shopId: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

const Flower = mongoose.models.Flower || mongoose.model('Flower', FlowerSchema);



export default Flower;
