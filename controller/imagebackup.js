// const uploadModel = require("../models/imagemodel");
// const multer = require("multer");
// const path=require("path");
// const fs=require("fs") 

// const Storage = multer.diskStorage({
//     destination:function(req,res,cb){
//         cb(null,'uploads');
//     },

//     filename:function(req,file,cb){
//         cb(null,Date.now()+path.extname(file.originalname));
//     }
// });

// // 

// const fileFilter=(req,file,cb)=>{
//     const allowedFileTypes=['image/jpeg','image/jpg','image/png'];
//     if(allowedFileTypes.includes(file.mimetype)){
//         cb(null,true);
//     }
//     else{
//         cb(null,false);
//     }
// }


// // /////////////////
// const getImage = async(req,res) => {
//    const allImages=await uploadModel.find()
//    res.send(allImages)
// }

// // 

// const postImage = async (req, res) =>{
//     upload(req,res,async(err)=>{

//         if(err){
//             console.log(err);
//         }else{
//             const id=req.params.id;
//             await uploadModel.findByIdAndUpdate({_id:id}, {profile : {
//                         // data: req.file.filename,
//                         data:fs.readFileSync("uploads/"+req.file.filename),
//                         contentType: "image/png"
//                     }})
       
//             .then(()=>{
//                 res.send("Successfully uploaded!")
//                 // getImage(S)
//             })
//             .catch((err)=>{
//                console.log(err);
//             })
//         }
//     })
// }
// const upload = multer({storage:Storage,fileFilter}).single('photo')

// in string form