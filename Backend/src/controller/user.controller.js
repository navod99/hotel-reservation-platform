const User = require("../models/user.model");

const createUser = async (req,res)=>{
    if(req.body){
        let email = req.body.email;
        await User.findOne({email:email},async (err,result)=>{
            if(err){
                console.log(err);
            }else{
                if(!result){
                    const user = new User(req.body);
                    await user.save()
                        .then(data=>res.status(200).send(data))
                        .catch(err=>res.send(err));
                }else{
                    res.send({message:"User Already Exist"});
                }
            }
        });
    }
}



module.exports = {
    createUser,
    
}