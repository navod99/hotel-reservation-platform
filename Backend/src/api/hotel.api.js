const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const Hotel = require("../models/hotel.model");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../Frontend/public/uploads');
    },
    filename: function(req, file, cb) {   
        cb(null,file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


router.post('/create',upload.single('image'),(req,res) =>{
    const newHotelData = new Hotel ({
        hotelName:req.body.hotelName,
        title: req.body.title,
        image: req.file.originalname,
        description:req.body.description,
        district:req.body.district,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        type: req.body.type,
        password:req.body.password
    })

    newHotelData.save()
           .then(() => res.json('Hotel Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/validate',async(req,res)=>{
    let email = req.body.email;
    await Hotel.findOne({email:email},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            const user = result;
            res.send(user);
        }
    });
})

router.get("/",(req,res) => {
    Hotel.find()
        .then((hotel) => res.json(hotel))
        .catch((err) => res.status(400).json(`Error:${err}`))
})

router.get("/:id",async (req, res) => {
    let hotelID = req.params.id;
    await Hotel.findById(hotelID)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });

router.put("/update/:id" ,async(req, res) => {
     if (req.body) {
         let id = req.params.id;
         //console.log(id+"sc")
         await Hotel.findByIdAndUpdate(id, req.body)
             .then((data) => {
                 res.status(200).send(data);
             })
             .catch((err) => {
                 res.send(error);
             });
     }
 })

module.exports = router;
// module.exports = function (){
//     router.route('/create').post(upload.single('image'),HotelController.createHotel)
//     // router.post('/create', HotelController.createHotel);
    
//     return router;
// }
