const mongoose=require('mongoose')

const validator=require('validator')

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true,
    },

    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('invalid Email')
            }

        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        maxlength:10,
        minlength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }
})

const users=new mongoose.model('users',userSchema)

module.exports=users