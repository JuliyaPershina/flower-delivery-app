# 🌸 Flower Delivery App

Веб-застосунок для замовлення квітів онлайн. Користувач може обрати квіти з магазину, додати їх у кошик, змінювати кількість товарів, видаляти та оформлювати замовлення із введенням даних доставки. Замовлення зберігаються у базі даних MongoDB.

---

## 🚀 Функціонал

- **Flower Shops page ("/")**
  - Вивід списку квітів із бази даних
  - Додавання квітів у кошик
- **Shopping Cart page ("/cart")**
  - Перегляд вибраних товарів
  - Зміна кількості
  - Видалення товарів
  - Обрахунок загальної вартості
- **Order Details page ("/order")**
  - Введення email, телефону та адреси
  - Відправка замовлення у базу даних
  - Вивід повідомлення про успішне оформлення

---

## 🛠️ Використані технології

### Front-End

- **Next.js 13+ (App Router)**
- **TypeScript**
- **React Hooks**
- **TailwindCSS** для стилізації

### Back-End

- **Node.js + Express**
- **Next.js API Routes**
- **MongoDB + Mongoose**

---

## 📂 Структура проєкту

flower-delivery-app/
├─ lib/ # підключення до MongoDB
├─ models/ # Mongoose-моделі (Flower, Order)
├─ pages/api/ # API-ендпоїнти для квітів та замовлень
├─ server/ # Express-сервер
├─ src/app/ # фронтенд (Next.js App Router)
│ ├─ components/ # UI-компоненти (Navbar, FlowerCard, CartItem)
│ ├─ page.tsx # сторінка з квітами (shops)
│ ├─ cart/page.tsx # кошик
│ ├─ order/page.tsx # оформлення замовлення

---

## ✅ Рівень виконання

- [x] Сторінка Flower Shops (вивід з бази даних, додавання у кошик)
- [x] Сторінка Shopping Cart (перегляд, зміна кількості, видалення)
- [x] Сторінка Order Details (форма + збереження у базу)
- [x] API для квітів (`/api/flowers`)
- [x] API для замовлень (`/api/orders`)
- [x] Підключення до MongoDB через Mongoose
- [ ] Додатковий дизайн/анімації (можна покращити)

---

## ⚙️ Запуск проєкту локально

1. Клонувати репозиторій:
   ```bash
   git clone https://github.com/your-username/flower-delivery-app.git
   cd flower-delivery-app
   ```

🌍 Деплой

GitHub Repo: Flower Delivery App

Live Demo: https://flower-delivery.vercel.app

(⚠️ заміни your-username та URL на свої реальні дані після публікації)

👩‍💻 Автор

Розроблено як тестове завдання для демонстрації Fullstack (Next.js + Express + MongoDB) застосунку.
