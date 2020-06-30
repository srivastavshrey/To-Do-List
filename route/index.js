const express = require('express');
const router = express.Router();// created router
const homeController = require('../controllers/home_controller'); //accessing controller  

router.get('/', homeController.home);//getting data from controller
module.exports = router;