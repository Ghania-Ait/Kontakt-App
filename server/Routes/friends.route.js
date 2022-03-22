// import {Router} from 'express'
const {Router} =require('express');
const {getFriends,postFriends,updateFriendsListe}=require('../Controllers/friend.controller.js');


const router= new Router();

router.route('/friends')
.get(getFriends)
.post(postFriends)


router.route('/update/:id').put(updateFriendsListe)

module.exports = router;