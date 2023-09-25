const mongoose = require('mongoose');

const AskmeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name:{ 
        type: String,
        required: true
    },
    topic:{
        type: String,
        required: true
    },
    question:{
        type: String,
        required: true
    }
})
const AskmeModel  = mongoose.model("askme", AskmeSchema)
module.exports = AskmeModel;