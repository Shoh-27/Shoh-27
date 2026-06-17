# 🧪 Virtual Laboratory (vLab) MVP

**vLab** is an interactive, web-based STEM (Science, Technology, Engineering, and Mathematics) platform designed to simulate real-world laboratory experiments in a digital environment. This MVP focuses on a Physics module: **Free Fall Simulation**.

## 🚀 Overview

The platform provides a 3D digital twin of a physics laboratory where students can experiment with gravity and height to observe classical mechanics in action. Unlike simple animations, vLab uses a dedicated physics engine to calculate results based on scientific laws.

## ✨ Features

- **3D Interactive Scene:** Powered by `Three.js` and `React Three Fiber` for a realistic spatial experience.
- **Physics Engine:** Real-time calculations using Newton's laws of motion ($h = h_0 - 0.5gt^2$).
- **Multi-Planetary Simulation:** Test gravity on Earth (9.81 m/s²), the Moon (1.62 m/s²), Mars (3.71 m/s²), and Jupiter (24.79 m/s²).
- **Experiment Dashboard:** Automatically logs results (time of flight, final velocity) to a database for later review.
- **Uzbek Localization:** Fully translated interface for local educational accessibility.

## 🛠 Tech Stack

- **Backend:** Laravel 11 (PHP 8.3)
- **Frontend:** React + Inertia.js
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Database:** MySQL

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vlab-project
   ```

2. **Install PHP dependencies:**
   ```bash
   composer install
   ```

3. **Install Node dependencies:**
   ```bash
   npm install
   ```

4. **Setup environment:**
   ```bash
   cp .env.example .env

   php artisan key:generate
   ```

5. **Run migrations:**
   ```bash
   php artisan migrate
   ```

6. **Start the application:**
   ```bash
   # In terminal 1
   php artisan serve

   # In terminal 2
   npm run dev
   ```

## 🧪 O'zbekcha Tavsif

**vLab** — bu STEM (biologiya, kimyo, fizika) sohalari uchun yaratilgan interaktiv virtual laboratoriya platformasi.

### Asosiy imkoniyatlar:
- **3D Vizualizatsiya:** Laboratoriya asbob-uskunalari va jarayonlarni real vaqtda kuzatish.
- **Ilmiy aniqlik:** Har bir simulyatsiya matematik modellarga va fizik qonuniyatlarga asoslangan.
- **Natijalarni saqlash:** O'tkazilgan har bir tajriba foydalanuvchining shaxsiy dashboardida saqlanib boriladi.
- **Mahalliylashtirish:** Tizim to'liq o'zbek tilida ishlaydi.

---

*Developed by Jules - AI Software Engineer*
