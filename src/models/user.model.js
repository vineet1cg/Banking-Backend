const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email Is Required To Create A User"],
        trim:true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please Fill A Valid Email Address"],
        unique:[true,"Email Already Exists"]
    },
    name:{
        type:String,
        required:[true,"Name Is Required To Create A User"],
    },
    password:{
        type:String,
        required:[true,"Password Is Required To Create An Account"],
        minlength:[6,"Password Must Be At Least 8 Character Long"],
        select:false,
    }
    
},{timestamps:true});


userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    return    next();
});

 userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword,this.password);
}

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;