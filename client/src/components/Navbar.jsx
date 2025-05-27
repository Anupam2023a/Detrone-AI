import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import geminiIcon from "../assets/gemini_icon.png"; // Use the correct image format


export const Navbar = () => {
    const {isLoggedIn} = useAuth();
return( 
    <>
    <header>
        <div className="container">
            <div className="logo-brand">
            <NavLink to="/"><p> <img src={geminiIcon} alt="Gemini Icon" /> Detrone AI <span>ANUPAM ANAND</span></p></NavLink>
            </div>
            <nav>
              <ul>
                    <li>
                    <NavLink to  ="/">Home</NavLink>

                    </li>
                
            
                    <li>
                    <NavLink to  ="/about">About</NavLink>

                    </li>
                
            
                    <li>
                    <NavLink to  ="/contact">Contact</NavLink>

                    </li>
                
            
                    <li>
                    <NavLink to  ="/service">Services</NavLink>

                    </li>

                  {isLoggedIn ? (
                    <li>
                    <NavLink to  ="/logout">Logout</NavLink>

                    </li>
                  ) : (
                    <>
            
                    <li>
                    <NavLink to  ="/login">Login</NavLink>

                    </li>
                
            
                    <li>
                    <NavLink to  ="/signup">Register</NavLink>

                    </li>
                    </>
                    )}
                </ul>
            </nav>
        </div>
    </header>
    </>
);
};