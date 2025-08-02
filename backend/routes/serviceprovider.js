const express = require('express');
const router = express.Router();
const { ServiceProvider } = require('../models');

router.post('/', async (req, res) => {
    try {
        const serviceData = req.body;  // { service_type, experience, time_slot, bio, rate, userId }
        const newService = await ServiceProvider.create(serviceData);
        res.json(newService);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not add service provider" });
    }
});

module.exports = router;
