const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create Schema

const PafxSchema = new Schema({
    raw_text:{
        type: String
    },
    chat_id:{
        type: Number
    },
    id:{
        type: Number
    },
    is_reply:{
        type:Boolean
    },
    date:{
        type: Date
    },
    to_id:{
        type:Number
    },
    to_message_id:{
        type:Number
    }
})

module.exports = Channels = mongoose.model('pafx',PafxSchema);