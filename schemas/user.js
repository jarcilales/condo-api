const {Schema} = require('mongoose')

const objectSchema = {
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    name: {
        type: String,
        lowercase:true,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    houseNumber:{
        type:Number,
        required:true
    },
    rol:{
        type: String,
        required: true

    }
}