
let express = require("express")
    router = express.Router();

// IMPORT CONTROLLERS
let loginController = require("../controllers/loginController")
let registerController = require("../controllers/registerController");
//let ordersController = require('../controllers/ordersController')


/* --- Route Auth (Login) --- */
// Auth user
router.post('/login', loginController.authUser);


/* --- Routes Users --- */
// Create User
router.post('/newUser', registerController.createUser);
  
// READ Users
router.post('/allUsers', registerController.getUsers);

// UPDATE User
router.post('/saveUser', registerController.updateUser);

// DELETE User
//router.post('/deleteUser', registerController.delete);


/* --- Routes Orders --- */
// CREATE Order
//router.post('/newOrder', ordersController.createOrder);

// READ Orders
//router.post('/allOrders', ordersController.getOrders);

// UPDATE Orders
//router.post('/newStateOrder', ordersController.updateOrder);



// CREATE Student
router.route('/create').post((req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });
  
  
  
  // Get Single Student
  router.route('/edit-student/:id').get((req, res) => {
    studentSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  // Update Student
  router.route('/update-student/:id').put((req, res, next) => {
    studentSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    })
  })
  // Delete Student
  router.route('/delete-student/:id').delete((req, res, next) => {
    studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  

  
module.exports = router;
