const express = require('express');
const router = express.Router();

// @route GET api/get
// @desc Test channel route
// @access Public
router.get('/get',(req,res)=>{
    res.json({msg:'hello world'})
})

module.exports = router;