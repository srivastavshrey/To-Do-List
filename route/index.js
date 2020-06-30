const express = require('express');
const router = express.Router();// created router
const homeController = require('../controllers/home_controller'); //accessing controller  
const db = require('../config/mongoose');
const Task = require('../models/task');
router.use(express.urlencoded());
router.use(express.static('assets'));
router.get('/', homeController.home);//getting data from controller
router.post('/create-task',homeController.store);//populating schema
router.get('/delete-task/',homeController.delete);//deletion of data
module.exports = router;