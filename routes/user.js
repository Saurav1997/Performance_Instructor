const router = require('express').Router();
const userController = require('../controllers/user')


router.post('/create',userController.createOne);
router.get('/getall',userController.getAll);
router.post('/insertone',userController.insertOne);
router.post('/login',userController.logIn);


module.exports = router;