import { Router } from 'express';
import weather from './weather.js';
const router = Router();

router.use('/weather', weather);

router.get('/', (req, res) => {
    res.redirect('/api/weather');
});
export default router;
