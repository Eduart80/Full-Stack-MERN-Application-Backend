const {Schema, model} = require('mongoose')
const bycrp = require('bcrypt')
/**
 * Registration:
      - User can submit a registration form with username, email, and password.
      - System validates input and checks for existing users.
      - Passwords are securely hashed before storage.
      - User receives confirmation of successful registration or error messages.
 */
const userSchema = new Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        match: [/.+@.+\..+/, "Must match an email address!"]
    },
    password:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        required: function() { return !this.githubId; },
        minlength: 8
    },
    githubId: {
        type: String,
        required: false,
        unique: true,
        },
})

userSchema.pre("save", async function (){
    if(this.isNew || this.isModified("password")){
        const saltRound =10
        this.password = await bycrp.hash(this.password, saltRound)
    }
})

userSchema.methods.isCorrectPassword = async function (password){
    return bycrp.compare(password, this.password)
}

const User = model("User", userSchema)
module.exports = User