import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify"; // Make sure you have this import

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [data, setData] = useState(defaultContactFormData);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setData({
        ...data,
        username: user.username,
        email: user.email,
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success("Message sent successfully"); // Replaced alert with toast
        console.log(responseData);
        // Reset only the message field, keeping the username and email
        setData((prevData) => ({
          ...prevData,
          message: "",
        }));
      } else {
        console.error("API Error:", response.status, response.statusText);
        toast.error("Failed to send message."); // Replaced alert with toast
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message."); // Replaced alert with toast
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>
          <section className="section-form">
            <form onSubmit={handleContactForm}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={data.username}
                  onChange={handleInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleInput}
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={data.message}
                  onChange={handleInput}
                  required
                  placeholder="Type your message here"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
