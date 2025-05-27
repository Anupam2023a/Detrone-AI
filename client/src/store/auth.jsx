import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  // Initialize token from localStorage
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  // Function to store the token in local storage
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
   // window.location.reload(); // Reload the page after login
   window.location.href = "/"; // Redirect to homepage and reload the page after login

  };

  // Check if the user is logged in
  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

  // Function to log out the user
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    //window.location.reload(); // Reload the page after logout
    window.location.href = "/login"; // Redirect to homepage and reload the page

  };

  // JWT AUTHENTICATION: Get logged-in user data
  const userAuthentication = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found in local storage.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Failed to authenticate. Status:", response.status);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []); // Ensure this only runs once when the component mounts

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, authorizationToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
