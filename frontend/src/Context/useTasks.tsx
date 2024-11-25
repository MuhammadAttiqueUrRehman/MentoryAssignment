import { createContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { createTaskListApi, getMyTaskListApi } from "../Services/TasksService";
import { TaskList, MyTaskList } from "../Models/TaskList";
import { UserProfile } from "../Models/User";




type TasksContextType = {
  tasklist: TaskList | null;
  createTaskList: (title: string, description: string) => void;
  getMyTasksList: () => void;
  myTasks: MyTaskList | null;
  deleteTaskList: (tasklistid: number) => void;
  deleteTask: (taskid: number) => void;
  updateTask: () => void;
  updateTaskStatus: (taskid: number, status:string) => void;
};

type Props = { children: React.ReactNode };

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

export const TasksProvider = ({ children }: Props) => {
  const [tasklist, setTaskList] = useState<TaskList | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [myTasks, setMyTasks] = useState<MyTaskList | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  
  const createTaskList = async (title: string, description: string) => {
    await createTaskListApi(title, description)
      .then((res) => {
        if (res) {
          toast.success(res.data?.message);
        }
      })
      .catch((e) => toast.warning("Server error occured"));
  };
  

  const getMyTasksList = async () => {
    await getMyTaskListApi()
      .then((res) => {
        if (res) {
         setMyTasks(res.data);
        }
      })
      .catch((e) => toast.warning("Server error occured"));
  };


  const deleteTaskList = async (tasklistid: number) => {
    
  };

  const deleteTask = async (taskid: number) => {
    
  };

  const updateTaskStatus = async (taskid: number, status: string) => {
    
  };

  const updateTask = async () => {
    
  };


  return (
    <TasksContext.Provider
      value={{
        createTaskList,
        tasklist,
        myTasks,
        getMyTasksList,
        deleteTaskList,
        deleteTask,
        updateTaskStatus,
        updateTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

// Custom Hook to Use Tasks Context
export const useTasks = () => React.useContext(TasksContext);
