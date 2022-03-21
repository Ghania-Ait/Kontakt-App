const mongoose=require('mongoose');




const FriendSchema=new mongoose.Schema({
    firstName:{
        type: 'string',
        required: true

    },
    lastName:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: false
    },
    address:{
        type: 'string',
        required: false,
    },
    city:{
        type: 'string',
        required: false
    },
    phone:{
        type:Number,
        required: false
    },

    gender:{
        type: 'string',
        required: false
    },
    birthday:{
        type:Date,
        required: false
    }

});

const FriendModel= mongoose.model('friends', FriendSchema);
module.exports = FriendModel;