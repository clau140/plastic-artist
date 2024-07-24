const express = require('express');
const { Router } = require('express');

const professorRouter = require('./professor')
const drawingsRouter = require('./drawings');

const router = Router();


router.use(express.json());
router.use('/professor', professorRouter);
router.use('/drawings', drawingsRouter);

module.exports = router;