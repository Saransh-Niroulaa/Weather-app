# Weather.

A clean, minimalist weather application focused on speed and simplicity. Built with a full-stack approach using React, Node.js, and MongoDB.

---

## About the Project

I built Weather. because I wanted a weather tool that cut out all the noise. Most weather apps are cluttered with ads, news, and 10-day forecasts you don't always need. This project is my take on a classy weather dashboard—just the data you need, presented in a clean, monochrome interface.

The goal was to keep the UI as light as possible while ensuring the backend was robust enough to handle data securely through a dedicated proxy server.

## Features

*   Fast Searching: Get current weather for any city instantly.
*   Clean Home Page: A simple landing page to get you started.
*   Minimalist View: Bold typography and high-contrast data for easy reading.
*   Smart Backend: A Node server that handles all the API calls securely so your keys stay private.
*   Database Integration: Built-in support for MongoDB and Mongoose for data management.

## Tech Stack

*   Frontend: React (Vite) for the UI. Custom CSS for the minimalist look.
*   Backend: Node.js with the connect framework for handling requests.
*   APIs: WeatherAPI for real-time data.
*   Database: MongoDB and Mongoose for data handling and schemas.

## Setup

If you want to run this locally:

1.  Clone the repository:
    ```bash
    git clone https://github.com/Saransh-Niroulaa/Weather-app.git
    cd Weather-app
    ```

2.  Backend Setup:
    ```bash
    cd backend
    npm install
    # Add your WEATHER_API_KEY to a .env file
    node server.js
    ```

3.  Frontend Setup:
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

---

**Weather.** — *Focus on the forecast.*
