const mongoose=require('mongoose');

const PostSchema= new mongoose.Schema(
    {
   title:{
        type: String,
        required: true,
        unique: true
    },
    disc:{
        type: String,
        required: true,
        
    },
    username:{
        type: String,
        required: true
    },
   
},

);

module.exports= mongoose.model("Post",PostSchema);