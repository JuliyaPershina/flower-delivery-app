import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Flower from '../models/Flower.js';

// Завантажуємо змінні середовища з .env.local
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

// Перевірка URI
if (!MONGO_URI) {
  console.error('❌ MONGODB_URI не знайдено в .env.local');
  process.exit(1);
} else {
  console.log('🔗 Підключаємося до MongoDB:', MONGO_URI);
}

// Middleware
app.use(cors());
app.use(express.json());

// Підключення до MongoDB
mongoose
  .connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log('✅ MongoDB підключено'))
  .catch((err) => console.error('❌ Помилка підключення до MongoDB:', err));

// Тестовий маршрут
app.get('/', (req, res) => {
  res.send('🚀 Flower Delivery API працює!');
});

// Маршрут для отримання квітів
// app.get('/flowers', async (req, res) => {
//   try {
//     const flowers = await Flower.find().sort({ dateAdded: -1 });

//     // Якщо колекція порожня, додаємо тестові документи
//     if (flowers.length === 0) {
//       console.log('⚠️ Колекція пуста, додаємо тестові квіти...');
//       await Flower.insertMany([
//         {
//           name: 'Червоні троянди',
//           price: 350,
//           category: 'букет',
//           inStock: true,
//           description: 'Красивий букет із 15 червоних троянд',
//           image: 'https://example.com/images/red-roses.jpg',
//         },
//         {
//           name: 'Білі лілії',
//           price: 400,
//           category: 'букет',
//           inStock: true,
//           description: 'Ароматний букет білих лілій',
//           image: 'https://example.com/images/white-lilies.jpg',
//         },
//         {
//           name: 'Соняшники',
//           price: 250,
//           category: 'букет',
//           inStock: false,
//           description: 'Яскраві соняшники для підняття настрою',
//           image: 'https://example.com/images/sunflowers.jpg',
//         },
//       ]);
//       const newFlowers = await Flower.find().sort({ dateAdded: -1 });
//       return res.status(200).json(newFlowers);
//     }

//     res.status(200).json(flowers);
//   } catch (err) {
//     console.error('❌ Помилка при отриманні квітів:', err);
//     res.status(500).json({ error: 'Помилка сервера' });
//   }
// });

// Маршрут для отримання квітів
app.get('/flowers', async (req, res) => {
  try {
    const flowers = await Flower.find().sort({ dateAdded: -1 });
    res.status(200).json(flowers); // повертаємо тільки існуючі документи
  } catch (err) {
    console.error('❌ Помилка при отриманні квітів:', err);
    res.status(500).json({ error: 'Помилка сервера' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🌍 Сервер запущено на http://localhost:${PORT}`);
});
