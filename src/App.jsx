import "./App.css";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Error from "./components/pages/Error";
import Dashboard from "./components/pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />, 
      errorElement: <Error />, 
    },
    {
      path: "login",
      element: <SignIn/>,
    },
    {
      path: "register",
      element: <SignUp/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;