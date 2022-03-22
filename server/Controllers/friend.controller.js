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
    let {firstName, lastName, email,address,city,phone,gender,birthday} = req.body;
    try {
        await FriendModel.create({firstName, lastName, email,address,city,phone,gender,birthday})
        res.status(201).send('created');
      } catch (error) {
        console.error(error)
        res.status(500).send(error)
      }
    //   res.send('created')
    // const newFriend = new FriendModel({firstName:'Jesica', lastName:'Klark'});
    // await newFriend.save();
    // res.send('A new friend was created ...')
}




async function updateFriendsListe(req,res){

try{
    const id= req.params.id;
     console.log('id:',id)
    console.log('Body:', req.body);
    const friend = await FriendModel.findByIdAndUpdate(id, req.body,{
        new:true,
        runValidators:true,
        context:'query',
    });
    res.json(friend);

}catch(error){
    console.log(error)
}



}



module.exports={getFriends,postFriends,updateFriendsListe}