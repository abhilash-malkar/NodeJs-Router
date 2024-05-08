const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).json({
        success: true,
        message: 'successfully logged in'
    });
})

module.exports = router;