const {Schema, model} = require("mongoose")

// const userSchema = new Schema({
//     username : {
//         type : String,
//         default : "",
//     },
//     email : {
//         type : String,
//         default : "",
//     }
// })

// module.exports =const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    username : {
        type : String,
        default : "",
        
    },
    email : {
        type : String,
        default : "",
    }
})

module.exports = model("User", userSchema)
