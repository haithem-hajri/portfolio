const Visitor = require('../models/Visitor')
const express = require('express')
const router = express.Router()
const {addVisitor}=require('../controllers/visitor')
router.post('/vs',addVisitor)

module.exports=router