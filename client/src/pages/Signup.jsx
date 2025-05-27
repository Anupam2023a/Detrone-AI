import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
    const response  = await fetch('http://localhost:3000/api/auth/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        });
    // console.log(response);
     const res_data =  await response.json();
     console.log("res from server", res_data.extraDetails);

     if (response.ok){
      //store the data in local storage 
      storeTokenInLS(res_data.token);

      toast.success("User created successfully");
      setUser({username:" ", email: " ", phone: " ", password:""});
      localStorage.setItem("signupSuccess", "true"); 

      navigate("/login");
      
     }
     else{
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
     }
    }
     catch (error) {
      console.log("register", error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="./images/register.png" alt="" width="500" height="500" />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">Registration Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="username"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="phone"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                    required
                    autoComplete="off"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};