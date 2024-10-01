import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from "./Error-page";
import './index.css'
import Root from "./Routes/Root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPage />,
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);