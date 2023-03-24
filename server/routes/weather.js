import axios from 'axios';
import { Router } from 'express';
const router = Router();

router.get('/current', async (req, res) => {
    // eslint-disable-next-line no-undef
    const searchFor = `?key=${process.env.WEATHER_API}&q=london&alerts=yes&aqi=yes`;
    try {
        const { data } = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json${searchFor}`
        );
        res.send(data);
    } catch (err) {
        console.log(err);
    }
});

export default router;
