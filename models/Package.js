const mongoose=require("mongoose");

const packageSchema= new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
    description: String,
})

const Package=mongoose.model("Package",packageSchema);
module.exports=Package;  //exporting the model