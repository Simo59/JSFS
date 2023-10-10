const mongoose=require('mongoose');
const dbConenection=require('../controllers/db.controller');

const  userShema=new mongoose.Schema(
{
name:{type:String, required:true,unique:true},
login:{type:String, required:true,unique:true},
password: {type:String ,required:true,unique : true},
emprunt:{type:Number ,max:2},
admin : {type : Boolean,default: false},

}
);
module.exports =userShema;

const User=dbConenection.model('User',userShema,'users');
module.exports.model = User;


