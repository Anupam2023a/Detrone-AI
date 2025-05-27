import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt} from "react-icons/fa";
import { useAuth } from  "../../store/auth";


export const AdminLayout = () =>{
    const { user, isLoading } = useAuth();
    
    if (isLoading) {
        return <div>Loading...</div>;
    }


    if(!user.isAdmin){
        return <Navigate to="/" />;
    }

    console.log("admin-layout", user);
    return <>
    <header>
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin/users">users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/contacts">contacts</NavLink>
                    </li>
                    <li>services</li>
                    <li>Home</li>



                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
    
    
    </>
};