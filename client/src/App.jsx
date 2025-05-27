// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Logout} from "./pages/Logout";
import { Signup} from "./pages/Signup";
import { Navbar } from "./components/Navbar"; 
import { Error } from "./pages/Error";
import { Footer} from "./components/Footer/Footer"
import { AdminLayout } from "./components/layouts/Admin-layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { EditUserForm } from "./pages/EditUserForm";





const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/signup" element={< Signup/>} />
          <Route path="*" element={< Error/>} />
          
          <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<AdminUsers/>}/> 
          <Route path="contacts" element={<AdminContacts/>}/>
          <Route path="users/:id/edit" element={<EditUserForm />} />

          </Route>


        </Routes>
        <Footer/> 

      </BrowserRouter>
    </>
  );
};

export default App;