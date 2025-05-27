const User = require("../models/user-model");
const Contact = require("../models/contact-model");


// getAllUsers Logic
 const getAllUsers = async (req, res) =>{
    try {
        const users = await User.find({}, { password:0}); // here we are passing {password:0} because we dont want to get or show password in our admin panel.
        console.log(users);
        if (!users || users.length === 0){
            return res.status(404).json({ message: "No users found" });
            }
            return res.status(200).json(users);
        } 
    catch (error) {
        next(error);
    }
 };

  

  
 const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({_id:id}, {$set: updatedUserData,});
        return res.status(200).json(updatedData);

 }
 catch(error){
    next(error);
 }
};


 // single user logic
const getUserById = async (req, res,next) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id}, {password:0});
            return res.status(200).json(data);
            } catch (error) {
             next(error);    }
                };



// user delete Logic
const deleteUserById = async (req, res,next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
            return res.status(200).json({ message: "User deleted successfully" });
            } catch (error) {
             next(error);  
             res.status(500).json({ error: 'Failed to delete user' });
            }
                };

  
// contacts delete logic
const deleteContactById = async (req, res,next) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
            return res.status(200).json({ message: "Contact deleted successfully" });
            } catch (error) {
             next(error);    }
                };





// getAllContacts Logic
 const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
            }
            return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
 } 

 module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};