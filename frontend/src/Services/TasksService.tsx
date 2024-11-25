import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { TaskList, MyTaskList } from "../Models/TaskList";

const api = "http://127.0.0.1:8000/api/";

export const createTaskListApi = async (title: string, description: string) => {
  try {
    const data = await axios.post<TaskList>(api + "task-lists", {
      title: title,
      description: description,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getMyTaskListApi = async () => {
  try {
    const data = await axios.get<MyTaskList>(api + "task-lists");
    return data;
  } catch (error) {
    handleError(error);
  }
};


