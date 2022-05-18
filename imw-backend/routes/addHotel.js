
const router = require("express").Router();
let Room = require("../models/addhotelSchema");


router.route("/add").post((req, res) => {

    const roomname = req.body.roomname;
    const occupants = Number(req.body.occupants);
    const area = Number(req.body.area);
    const description = req.body.description;
    const numberofrooms = Number(req.body.numberofrooms);
    const pricepernight = Number(req.body.pricepernight);
    const hotelID = req.body.hotelID
     
    

    const newRoom = new Room({
     
    roomname,
    occupants,
    area,
    description,
    numberofrooms,
    pricepernight,
    hotelID
    })

    newRoom.save().then(() => {

     res.json("Room Added")
     }).catch((err) =>{

      console.log(err);

     })

    })

 /*   let newHotel = new Hotel(req.body);

    newHotel.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Saved Successfully"
        });
    });  */



router.route("/").get((req,res) => {

    Room.find().then((hotels) => {
        res.json(hotels)
    }).catch((err) =>{

        console.log(err)
    })
    
})

router.route("/update/:id").put(async (req,res) => {

   let userId = req.params.id;
   const {roomname, occupants, area, description, numberofrooms, pricepernight} = req.body;

   const UpdateRoom = {
    roomname,
    occupants,
    area,
    description,
    numberofrooms,
    pricepernight
    
   }

   const update = await Room.findByIdAndUpdate(userId, UpdateRoom)
   .then(() => {

    res.status(200).send({status: "Room updated"})
   }).catch((err) => {
       console.log(err);
       res.status(500).send({status:"Error occured during updating", error: err.message})
   })

})

router.route("/delete/:id").delete(async (req, res) => {
   
    let userId = req.params.id;

    await Room.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "Room deleted"})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {

    let hotelId = req.params.id;
    await Room.find({hotelID:hotelId}).then((data) =>{
        res.status(200).send(data)
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error fetching data", error: err.message});
    })
})


module.exports = router;