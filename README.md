# 🐉 Interactive Flip Cards – Cyberpunk Edition

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Fast-646CFF.svg)](https://vitejs.dev/)
[![FSD](https://img.shields.io/badge/Architecture-FSD-green.svg)](https://feature-sliced.design/)

Сучасний інтерактивний додаток на React та TypeScript, що реалізує механіку 3D-карток з підтримкою Drag & Drop, кастомних тем та преміальним дизайном. Проект виконано в рамках **Homework #2** з фокусом на архітектуру та продуктивність.

---

## 🌟 Основні особливості

- **🎭 3D Flip Animation**: Реалістичне перевертання карток на основі CSS 3D Transforms.
- **🖱️ Native Drag & Drop**: Зміна порядку карток перетягуванням (HTML5 API) з підтримкою тач-пристроїв.
- **🌌 Cyberpunk Theme**: Ексклюзивна темна тема з анімованим фоном на **Three.js**.
- **🌓 Multi-Theme Support**: Швидке перемикання між Light, Dark та Cyberpunk модами.
- **🔊 Audio API**: Звукові ефекти при взаємодії з картками (Flip sound).
- **⚡ CRUD & Filtering**: Додавання, видалення, позначення "Favourite" та фільтрація за категоріями.
- **🧪 Unit Testing**: Покриття бізнес-логіки тестами (Vitest).

---

## 🏗️ Архітектура: Feature-Sliced Design (FSD)

Проект побудований за методологією **FSD**, що забезпечує чіткий розподіл відповідальності:

- `app/` — ініціалізація, стири та провайдери.
- `widgets/` — великі блоки сторінки (Header, CardGrid).
- `features/` — інтерактивні дії (AddCard, Filter, ThemeToggle).
- `entities/` — бізнес-логіка та UI сутності (Card).
- `shared/` — перевикористовувані компоненти, хуки та конфіги.

---

## 🚀 Швидкий старт

### 1. Клонування репозиторію

```bash
git clone https://github.com/USER_NAME/interactive-flip-cards.git
cd interactive-flip-cards
```

### 2. Встановлення залежностей

```bash
npm install
```

### 3. Запуск у режимі розробки

```bash
npm run dev
```

### 4. Тестування

```bash
npm test
```

---

## 🛠️ Технологічний стек

- **Frontend**: React 18, TypeScript (Strict).
- **Styling**: Tailwind CSS v4, Framer Motion (анімаційні переходи).
- **State & Logic**: `react-hook-form` + `zod` (форми), `useState` + `useRef` (DnD).
- **Graphics**: `Three.js` + `React Three Fiber` (Cyberpunk BG).
- **Infrastructure**: Vite, Vitest, Lucide Icons.

---

## 📸 Скріншоти та Демо

![Project Preview](.github/assets/preview.gif)

---

## 📄 Ліцензія

Проект створено в навчальних цілях. Усі права застережено. 🐉🔥
