import "./App.css";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Error from "./components/pages/Error";
import Dashboard from "./components/pages/Dashboard";
import Balance from "./components/Elements/Balance";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";


function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />, 
      errorElement: <Error />, 
    },
    {
      path: "/login",
      element: <SignIn/>,
    },
    {
      path: "/register",
      element: <SignUp/>,
    },
    {
      path: "/balance",
      element: <Balance/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;