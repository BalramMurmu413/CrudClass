const express = require('express')

const {home , createUser, getUser, deteleUser, deleteUserName ,updateUser} = require('../controllers/userController.js')

const router = express.Router()

router.get('/', home)
router.use('/createuser',createUser)
router.use('/getusers',getUser)
router.delete('/deleteuser/:id', deteleUser)
router.put('/updateuser/:id', updateUser)



module.exports = router