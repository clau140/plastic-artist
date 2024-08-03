const express = require('express');
const { Router } = require('express');

const professorRouter = require('./professor')
const jobsRouter = require('./jobs');

const router = Router();


router.use(express.json());
router.use('/professor', professorRouter);
router.use('/jobs', jobsRouter);

module.exports = router;