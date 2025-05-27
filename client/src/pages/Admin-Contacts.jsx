import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
    const [contactData, setContacts] = useState([]);
    const { authorizationToken } = useAuth();
    
    const getContactsData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/admin/contacts', {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("contact data:", data);
                setContacts(data);
            
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };


    const deleteContact = async (id) =>{
      try {
        const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: authorizationToken,
                    },
                    }
                    );
                    const data = await response.json();
                    console.log("contact deleted:", data);
                    if (response.ok) {
                        getContactsData();
                      toast.success("Contact Deleted Successfully")
                    }
                    else {
                        toast.error("Not Deleted")
                    }
   
        
      } catch (error) {
        console.log(error);
      }   
    }

    useEffect(() => {
        getContactsData();
    }, []);

    return (
        <section className="admin-contacts-section">
            <h2>Admin Contacts</h2>
            <div className="container admin-users">
                {contactData.map((curContactData, index) => {
                    const {_id,username, email, message } = curContactData;
                    return (
                        <div key={index}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{message}</p>
                            <button className="delete-btn" onClick={()=> deleteContact(_id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
