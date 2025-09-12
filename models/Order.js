import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  items: [
    {
      flowerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flower' },
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  email: String,
  phone: String,
  address: String,
  total: Number,
  dateOrdered: { type: Date, default: Date.now },
});

const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);
export default Order;
