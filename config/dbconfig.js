// const mongoose = require("mongoose")

// async function connect (){
//     console.log('dad')
//     try {
//         const connection = await mongoose.connect(process.env.MONGO_URL, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         });

//         console.log("DB Connected...", "😀")
//         return connection;
//     }catch(e) {
//         console.log(e)
//     }
// }

// module.exports = connect
const mongoose = require("mongoose")

async function connect (){
    console.log('dad')
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        console.log("DB Connected...", "😀")
        return connection;
    }catch(e) {
        console.log(e)
    }
}

module.exports = connect
