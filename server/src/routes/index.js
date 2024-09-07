const express = require('express');
const { Router } = require('express');
const jobsRouter = require('./jobs');
const contactRouter = require('./contact');


const router = Router();

router.use(express.json());

router.use('/jobs', jobsRouter);
router.use('/contact', contactRouter);


module.exports = router;
