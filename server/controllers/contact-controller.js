const Contact = require("../models/contact-model");

const contactForm = async (req, res) =>{
try {
    const response = req.body;
    await Contact.create(response);
    res.status(200).json({message: "Message sent successfully"});
} catch (error) {
    console.log(error);
    res.status(500).json({message: "Error sending message"});
    
}
};

module.exports = contactForm;