import { useState, useEffect } from "react";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import 'boxicons';

export const Home = () => {
  const { user } = useAuth();
  // Used for showing "login done" toast in homepage after LOGIN 
  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");
    if (loginSuccess) {
      toast.success("Login Done", {
        autoClose: 5000, // Toast is visible for 5 seconds
      });
      // Delay removal to ensure the toast appears
      setTimeout(() => {
        localStorage.removeItem("loginSuccess");
      }, 5000); // Matches the autoClose time
    }
  }, []);
  useEffect(() => {
    const signupSuccess = localStorage.getItem("signupSuccess");
    if (signupSuccess) {
      toast.success("User Created Successfully", {
        autoClose: 5000, // Toast is visible for 5 seconds
      });
      // Delay removal to ensure the toast appears
      setTimeout(() => {
        localStorage.removeItem("signupSuccess");
      }, 5000); // Matches the autoClose time
    }
  }, []);
  
  const handleRedirect = () => {
    window.location.href = "http://localhost:5100/"; // by this you can go to this address. (DETRONE AI)
  };
  
 // const getUserGreeting = (user) => { // this fucntion is use when you want to put (ADMIN) or any name in front of admin username to show it
   // if (!user) return ""; // No user is logged in
    //return user.isAdmin ? `${user.username} (Admin)` : user.username; // If user is an admin, append (Admin)
  //};
  
 
  

  const getUserGreeting = (user) => { // this function help me to use a photo/img to show behind or in front of admin username to show it in homepage
    if (!user) return ""; // No user is logged in
    return user.username; // Return the username only
  };
 
    
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are DETORNE </p>
              
              {/*<> 
              {/*<h1 className="greet">Welcome {getUserGreeting(user)}</h1> this will show (ADMIN) After Welcome "Username" (Admin)*/}
              <div className="greet-section">
             {/* Display the user's name */}
              <h1 className="greet">
          Welcome {getUserGreeting(user)}
  
          {/* Conditionally render the verified logo/Img for admins */}
          {user && user.isAdmin && (
            <img
              src="/images/approved.png" // Path to your verified logo
              alt="Verified Admin"
              className="verified-logo"
              width="20"
              height="20"
            />
          )}
        </h1>
      </div>
               {/* <h1 class = "greet">Welcome {user ? `${user.username} to our Website` :"to our Website"}</h1> this is the older one which only tell names when login or register and do not know admin */}
              {/*</h1> */}
              <p>
              DETRONE, a platform built to shape the future of digital innovation. At its core, serves as a foundation for developing groundbreaking technologies that simplify, enhance, and transform how we interact with the digital world.
              </p>
              <div className="btn btn-group">
                {!user ? (
                  <>
                    <a href="/login">
                      <button className="btn">Try DetroneAI</button>
                    </a>
                    <a href="/about">
                      <button className="btn secondary-btn">learn more</button>
                    </a>
                  </>
                ) : (
                  <button className="btn redirect-btn" onClick={handleRedirect}>
                    Go to New Location
                  </button>
                )}
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/gemini_icon.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
      <Analytics />

      {/* 3rd section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure IT
              infrastructure? Contact us today for a free consultation and let's
              discuss how Thapa Technical can help your business thrive in the
              digital age.
            </p>
            <div className="btn btn-group">
              {!user ? (
                <>
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/services">
                    <button className="btn secondary-btn">learn more</button>
                  </a>
                </>
              ) : (
                <button className="btn redirect-btn" onClick={handleRedirect}>
                  Go to New Location<i class='bx bx-right-top-arrow-circle'></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
