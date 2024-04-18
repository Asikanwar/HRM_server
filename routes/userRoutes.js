const express = require ('express')
const router = express.Router();
const userController = require('../controller/userController')


const accessControl = require ("../utils/access-control").accessControl;

const setAccessControl = (access_type) => {
    return (req, res, next) => {
        accessControl(access_type, req, res, next)
    }
};



router.post('/users',setAccessControl('1,2'),userController.createUser);
router.get('/users',setAccessControl('*'),userController.getUserData);
router.get('/users/:id',setAccessControl('*'),userController.getSingleUserData);
router.put('/editData/:id',setAccessControl('*'),userController.updateUser);
router.delete('/deleteData/:id', setAccessControl('*'), userController.deleteUser);
module.exports = router;