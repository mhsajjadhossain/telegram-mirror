const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

// load channel model
const Pafx = require('../../models/Pafx')
const Paicc = require('../../models/Paicc')
const Scalp = require('../../models/Scalp')
const Algo = require('../../models/Algo')

// @route GET api/get
// @desc Test channel route
// @access Public
let telegram = {
    pafx:'',
    paicc:'',
    scalp:'',
    algo:''
}
router.get('/get',(req,res)=>{
    // getting pafx value
    Pafx.find({},(err,datas)=>{
        telegram.pafx=datas;
    })
    // getting pafx value
    Paicc.find({},(err,datas)=>{
        telegram.paicc=datas;
    })
    // getting pafx value
    Scalp.find({},(err,datas)=>{
        telegram.scalp=datas;
    })
    // getting pafx value
    Algo.find({},(err,datas)=>{
        telegram.algo=datas;
    })
    res.send(telegram)
})

// @route Post api/channels/pafx
// @desc Pafx channel route
// @access Public
router.post('/pafx',(req,res)=>{
    const pafx = new Pafx({
        raw_text: req.body.raw_text,
        chat_id: req.body.chat_id,
        id:req.body.id,
        is_reply: req.body.is_reply,
        date: req.body.date,
        to_id: req.body.to_id,
        to_message_id:req.body.to_message_id
    })
    pafx.save()
        .then(pafx => res.json(pafx))
        .catch(err=>console.log(err))
})

// @route Post api/channels/paicc
// @desc Pafx channel route
// @access Public
router.post('/paicc',(req,res)=>{
    const paicc = new Paicc({
        raw_text: req.body.raw_text,
        chat_id: req.body.chat_id,
        id:req.body.id,
        is_reply: req.body.is_reply,
        date: req.body.date,
        to_id: req.body.to_id,
        to_message_id:req.body.to_message_id
    })
    paicc.save()
        .then(paicc => res.json(paicc))
        .catch(err=>console.log(err))
})

// @route Post api/channels/scalp
// @desc scalp channel route
// @access Public
router.post('/scalp',(req,res)=>{
    const scalp = new Scalp({
        raw_text: req.body.raw_text,
        chat_id: req.body.chat_id,
        id:req.body.id,
        is_reply: req.body.is_reply,
        date: req.body.date,
        to_id: req.body.to_id,
        to_message_id:req.body.to_message_id
    })
    scalp.save()
        .then(scalp => res.json(scalp))
        .catch(err=>console.log(err))
})

// @route Post api/channels/scalp
// @desc scalp channel route
// @access Public
router.post('/algo',(req,res)=>{
    const algo = new Algo({
        raw_text: req.body.raw_text,
        chat_id: req.body.chat_id,
        id:req.body.id,
        is_reply: req.body.is_reply,
        date: req.body.date,
        to_id: req.body.to_id,
        to_message_id:req.body.to_message_id
    })
    algo.save()
        .then(algo => res.json(algo))
        .catch(err=>console.log(err))
})

module.exports = router;