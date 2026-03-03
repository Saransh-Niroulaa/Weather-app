# Weather.

A minimalist, sophisticated weather forecasting application built with a focus on clean UI/UX and a robust full-stack architecture. **Weather.** provides real-time meteorological data through a seamless, high-performance interface.

![Version](https://img.shields.io/badge/version-1.0.0-black.svg?style=flat-square)
![React](https://img.shields.io/badge/frontend-React-61DAFB.svg?style=flat-square&logo=react)
![Node](https://img.shields.io/badge/backend-Node.js-339933.svg?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/database-MongoDB-47A248.svg?style=flat-square&logo=mongodb)

---

## 🌑 Overview

**Weather.** is designed for users who appreciate clarity and precision. By stripping away the clutter found in traditional weather apps, it delivers a focused experience that prioritizes essential data through a refined, monochrome aesthetic.

## ✨ Key Features

*   **Real-time Forecasting**: Instant access to current weather conditions, including temperature, wind speed, humidity, and precipitation.
*   **Minimalist Landing Page**: A clean, professional entry point that guides users into the core experience.
*   **Location Intelligence**: Rapid search functionality for global cities with intelligent error handling.
*   **Full-Stack Integration**: A dedicated Node.js proxy server ensures secure API communication and optimized data delivery.
*   **Persistent Data Layer**: Integrated MongoDB and PostgreSQL (Supabase) capabilities for user management and search history tracking.

## 🛠️ Technical Stack

### Frontend
*   **React.js (Vite)**: For a lightning-fast, reactive user interface.
*   **Modular CSS**: A refined, custom-built design system emphasizing negative space and elegant typography.

### Backend
*   **Node.js**: Leveraging a custom `connect` middleware architecture for efficient request handling.
*   **Weather API**: High-accuracy data sourcing for global meteorological updates.
*   **Cross-Origin Resource Sharing (CORS)**: Configured for secure, cross-platform communication.

### Database
*   **MongoDB & Mongoose**: Utilized for flexible, document-based storage.
*   **PostgreSQL**: Integrated via Supabase for high-integrity relational data management.

## 🚀 Getting Started

### Prerequisites
*   Node.js (v16+)
*   NPM or Yarn
*   API Key from [WeatherAPI.com](https://www.weatherapi.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Saransh-Niroulaa/Weather-app.git
    cd Weather-app
    ```

2.  **Setup Backend:**
    ```bash
    cd backend
    npm install
    # Create a .env file with your WEATHER_API_KEY
    node server.js
    ```

3.  **Setup Frontend:**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

---

## 📝 Configuration

Create a `.env` file in the `backend` directory:

```env
WEATHER_API_KEY=your_api_key_here
DATABASE_URL=your_database_url_here
```

## 🌑 License

Distributed under the ISC License. See `LICENSE` for more information.

---

**Weather.** — *Clarity in every forecast.*
