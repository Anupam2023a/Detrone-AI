const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware"); // By this authMiddleware we are applying JWT Token to our admin route
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

// By adding  authMiddleware in this when we don't have any token then we will not able to see the data of users as admin or in admin/users
router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers); 


router.route("/users/:id").get(authMiddleware,adminMiddleware,adminController.getUserById);


router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserById);


// defining route for delete of users from admin panel
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById);

// defining route for delete of contacts from admin panel
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteContactById);



// By adding  authMiddleware in this when we don't have any token then we will not able to see the data of users as admin or in admin/contacts
router.route("/contacts").get(authMiddleware,adminMiddleware,adminController.getAllContacts); 
 
// Just remove authMiddleware if you dont want authorization for users and contacts
  


 module.exports = router;