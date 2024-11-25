

export type TaskData = {
    id: number;
    created_by: number;
    title: string;
    description: string;
  };
  
  export type TaskList = {
    message: string;
    data: TaskData; 
  };

 export type Task = {
    id: number;
    task_list_id:number,
    created_by:number,
    title: string;
    description: string;
    created_at: string;
    status: string;
  };

  export type MyTask = {
    id: number;
    created_by: number,
    title: string;
    description: string;
    tasks: Task[];
  };
 export type MyTaskList = {
  message:string,
  data: MyTask[];
  };
  
