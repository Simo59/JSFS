const mongoose=require('mongoose');
const dbConenection=require('../controllers/db.controller');
const  itemShema=new mongoose.Schema(

{
discription:{type:String, required:true,},
disponible:{type:Boolean,required:true},
emprentePar:{type:mongoose.ObjectId},   


}
);
module.exports =itemShema;

const Items=dbConenection.model('Item',itemShema,'items');
module.exports.model = Items;



