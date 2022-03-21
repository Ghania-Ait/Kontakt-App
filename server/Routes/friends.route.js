// import {Router} from 'express'
const {Router} =require('express');
const {getFriends,postFriends}=require('../Controllers/friend.controller.js');


const router= new Router();

router.route('/friends')
.get(getFriends)
.post(postFriends)

module.exports = router;