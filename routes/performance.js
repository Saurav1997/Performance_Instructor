const router = require('express').Router();
const performanceController = require('../controllers/performance')


router.get('/getall',performanceController.getAll);
router.post('/insertone',performanceController.insertOne);

module.exports = router;