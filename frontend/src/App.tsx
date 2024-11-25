import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
import { TasksProvider } from "./Context/useTasks";

function App() {
  return (
    <>
      <UserProvider>
        <TasksProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
        </TasksProvider>
      </UserProvider>
    </>
  );
}

export default App;
