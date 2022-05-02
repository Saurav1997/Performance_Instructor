const router = require('express').Router();
const userController = require('../controllers/user')


router.get('/getall',userController.getAll);
router.post('/insertone',userController.insertOne);
router.post('/login',userController.logIn);
router.post('/delete',userController.deleteOne);
router.post('/logout',userController.logOut);

module.exports = router;