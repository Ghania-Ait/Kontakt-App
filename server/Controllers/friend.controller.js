//import FriendModel from '../Models/friends.js'

const FriendModel= require('../Models/friends.js');

 async function getFriends (req,res){
    FriendModel.find({}, (err,result)=>{
        if(err){
            res.send(err);
        }else {
            res.send(result)
        }
    })
  
}


 async function postFriends (req,res){
    // const data=req.body;
    // console.log(data)

    // // if (!data.firstName || !data.lastName || !data.phone ){
    // //     res.status(400).send('Falsche Daten')
    // // }

    // const friend={
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     email: data.email,
    //     address: data.address,
    //     city: data.city,
    //     phone: data.phone,
    //     gender: data.gender,
    //     birthday: data.birthday,
    // }
    const newFriend = new FriendModel({firstName:'Jesica', lastName:'Klark'});
    await newFriend.save();
    res.send('A new friend was created ...')
}

module.exports={getFriends,postFriends}