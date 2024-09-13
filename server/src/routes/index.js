const express = require('express');
const { Router } = require('express');
const jobsRouter = require('./jobs');
const contactRouter = require('./contact');
const userRouter = require('./user')

const router = Router();

router.use(express.json());
router.use('/user', userRouter);
router.use('/jobs', jobsRouter);
router.use('/contact', contactRouter);




module.exports = router;
