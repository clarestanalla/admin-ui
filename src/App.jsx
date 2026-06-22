import "./App.css";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Error from "./components/pages/Error";
import Dashboard from "./components/pages/Dashboard";
import Balance from "./components/Elements/Balance";
import { 
  createBrowserRouter, 
  Navigate, 
  RouterProvider, 
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";


function App() {
  const { user } = useContext(AuthContext)

  const RequireAuth =({children })=>{
    return user ? children : <Navigate to="/login"/>
  };

  const NotRequireAuth =({children }) =>{
    return user ? <Navigate to="/" /> : children;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: 
      <RequireAuth>
        <Dashboard />
      </RequireAuth>,
      errorElement: <Error />, 
    },
    {
      path: "/login",
      element: 
      <NotRequireAuth>
        <SignIn/>
      </NotRequireAuth>
    },
    {
      path: "/register",
      element: 
      <NotRequireAuth>
        <SignUp/>
      </NotRequireAuth>
    },
    {
      path: "/balance",
      element: 
      <RequireAuth>
        <Balance/>
      </RequireAuth>
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;