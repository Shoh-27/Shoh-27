# 🧪 Virtual Laboratory (vLab) MVP

## 🚀 Overview

**vLab** is an interactive, web-based STEM (Science, Technology, Engineering, and Mathematics) platform designed to simulate real-world laboratory experiments in a digital environment.

This MVP focuses on a Physics module: **Free Fall Simulation**.

The platform provides a 3D digital twin of a physics laboratory where students can experiment with gravity and height to observe classical mechanics in action. Unlike simple animations, vLab uses a dedicated physics engine to calculate results based on scientific laws.

## ✨ Features

- 3D Interactive Scene (Three.js + React Three Fiber)
- Physics Engine using Newtonian mechanics
- Multi-Planet Simulation (Earth, Moon, Mars, Jupiter)
- Experiment Dashboard
- Uzbek Localization

## 🛠 Tech Stack

- Backend: Laravel 11 (PHP 8.3)
- Frontend: React + Inertia.js
- Styling: Tailwind CSS
- 3D Graphics: Three.js, React Three Fiber, Drei
- Database: SQLite

## 📥 Installation

```bash
git clone <repository-url>
cd vlab-project

composer install
npm install

cp .env.example .env
touch database/database.sqlite

php artisan key:generate
php artisan migrate

php artisan serve
npm run dev