const express = require('express');
const { Router } = require('express');

const professorRouter = require('./professor')
const jobsRouter = require('./jobs');
const contactRouter = require('./contact');

const router = Router();


router.use(express.json());
router.use('/professor', professorRouter);
router.use('/jobs', jobsRouter);
router.use('/contact', contactRouter);


module.exports = router;