const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const nodemailer = require("nodemailer");
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


router.post("/mail", async (req, res) => {
    const frommail = "navodchathurange@gmail.com";
    const password = "mpndzwomssiavtob";
    const roomname = req.body.roomname;
    const numberofrooms = req.body.numberofrooms;
    const checkindate = req.body.checkindate;
    const ChekoutDate = req.body.ChekoutDate;
    const adults = req.body.adults;
    const childeren = req.body.childeren;
    const tomail = req.body.tomail;

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: frommail,
            pass: password,
        },
    });

    var mailOptions = {
        from: frommail,
        to: tomail,
        subject: "Room booking Successfully",
        text:
            "We have received your Booking Details and would like to thank you for dealing with us.\nYour Booking details are bellow\n" +
            "Room Name : " +
            roomname +
            "\n" +
            "Number of Rooms : " +
            numberofrooms +
            "\n" +
            "Checkin Date : " +
            checkindate +
            "\n" +
            "Checkout Date : " +
            ChekoutDate+
            "\n" +
            "No of adults : " +
            adults+
            "\n" +
            "No of Childeren : " +
            childeren+
            "\n"
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            res.json({
                msg: "success",
            });
        }
    });
});



router.post("/payment", async (req, res) => {
    const frommail = "navodchathurange@gmail.com";
    const password = "mpndzwomssiavtob";
    const amount = req.body.amount;
    const tomail = req.body.tomail;

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: frommail,
            pass: password,
        },
    });

    var mailOptions = {
        from: frommail,
        to: tomail,
        subject: "Payment Successfully",
        text:
            "We have received your Rs: " + amount+ " Payment" 
    
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            res.json({
                msg: "success",
            });
        }
    });
});

router.post("/taxi", async (req, res) => {
    const frommail = "navodchathurange@gmail.com";
    const password = "mpndzwomssiavtob";
    const address = req.body.address;
    const type = req.body.type;
    const roomname = req.body.roomname;
    const tomail = req.body.tomail;

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: frommail,
            pass: password,
        },
    });

    var mailOptions = {
        from: frommail,
        to: tomail,
        subject: "Your Taxi Details",
        text:
        "Thank you for getting our Taxi Service" +
        "\n" +
        "Your Address : " +
        address +
        "\n" +
        "Destination : " +
        roomname +
        "\n" +
        "Vehicle : " +
        type +
        "\n\n\n Contact Us:0765544444"
        
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            res.json({
                msg: "success",
            });
        }
    });
});

module.exports = router;
// module.exports = function (){
//     router.route('/create').post(upload.single('image'),HotelController.createHotel)
//     // router.post('/create', HotelController.createHotel);
    
//     return router;
// }
