import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import ContactUs from './pages/ContactUs';
import LearnMore from './pages/LearnMore';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/learnmore",
    element: <LearnMore />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
