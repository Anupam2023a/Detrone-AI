import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS

//import { AuthProvider } from './store/auth.jsx'


createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
   <ToastContainer
     position="top-right"
     autoClose={3500}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="colored"
     bodyClassName="toastBody"
     //toastStyle={{ backgroundColor: 'transparent', color: '#fff' }}

   />
  </StrictMode>
  </AuthProvider>,

)