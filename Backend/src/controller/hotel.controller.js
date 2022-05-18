// const User = require("../models/hotel.model");

// const createHotel = (req,res)=>{
//     const hotelname = req.body.name;
//     const title = req.body.title;
//     const image = req.file.filename;
//     const description = req.body.description;
//     const district = req.body.district;
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.email;
//     const type = req.body.type;
//     const passsword = req.body.password;

//     const newHotelData = {
//         hotelname,
//         title,
//         image,
//         description,
//         district,
//         firstName,
//         lastName,
//         email,
//         type,
//         passsword
//     }

//     const newHotel = new User(newHotelData);

//     newHotel.save()
//            .then(() => res.json('Hotel Added'))
//            .catch(err => res.status(400).json('Error: ' + err));
// };


// module.exports = {
//     createHotel
// }