import http from 'http';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import connect from 'connect';
import cors from 'cors';

dotenv.config();
const API_KEY = process.env.WEATHER_API_KEY;
const PORT = 3000;

const app = connect();
app.use(cors());

app.use(async (req, res) => {
    if (req.url.startsWith('/weather') && req.method === 'GET') {
        const city = new URLSearchParams(req.url.split('?')[1]).get('city') || 'London';
        try {
            const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
            const response = await fetch(weatherUrl);
            const data = await response.json();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to fetch weather data' }));
            console.error(error);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});
http.createServer(app).listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
