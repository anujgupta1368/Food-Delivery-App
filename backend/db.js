const mongoose = require('mongoose');
const mongoURI = 'YOUR_MONGODB_URI'
const mongoDB =async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true}, async(err, result)=>{
        if(err) console.log("---", err)
        else{
        console.log("connected");
        const fecthed_data = await mongoose.connection.db.collection("food_items");
        fecthed_data.find({}).toArray(async function( err, data){
            const food_category = await mongoose.connection.db.collection("food_category");
            food_category.find({}).toArray(function (err, catData){
                if(err) console.log(err);
                else {
                    global.food_items = data;
                    global.food_category = catData;
                }
            })
            
        })
        }
    });
}

module.exports = mongoDB;


