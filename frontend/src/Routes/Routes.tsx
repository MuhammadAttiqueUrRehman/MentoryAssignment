import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import TasksPage from "../Pages/TasksPage/TasksPage";
import ProtectedRoute from "./ProtectedRoute";
import CreateTaskListPage from "../Pages/CreateTaskListPage/CreateTaskListPage";
import MyTasksPage from "../Pages/MyTasks/MyTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "dashboard", element: (<ProtectedRoute><TasksPage /></ProtectedRoute>)},
      { path: "create-task", element: (<ProtectedRoute><CreateTaskListPage /></ProtectedRoute>)},
      { path: "my-tasks", element: (<ProtectedRoute><MyTasksPage/></ProtectedRoute>)},
    ],
  },
]);
