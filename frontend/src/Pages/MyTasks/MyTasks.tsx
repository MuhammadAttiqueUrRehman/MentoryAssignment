import React, { useState, useEffect } from "react";
import { useTasks } from "../../Context/useTasks";
import { FaTrash, FaEdit, FaSave, FaShareAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const MyTasksPage = () => {
  const [expandedTaskList, setExpandedTaskList] = useState<number | null>(null);
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState<{ title: string; description: string } | null>(null);

  const { getMyTasksList, myTasks, deleteTaskList, deleteTask, updateTaskStatus, updateTask } =
    useTasks();

  useEffect(() => {
    getMyTasksList();
  }, []);

  const toggleTaskList = (id: number) => {
    setExpandedTaskList((prevState) => (prevState === id ? null : id));
  };

  const handleEditTask = (task: any) => {
    setEditingTask(task.id);
    setEditedTask({ title: task.title, description: task.description });
  };

  const handleSaveTask = (taskId: number) => {
    // if (editedTask) {
    //   updateTask(taskId, editedTask); 
    //   setEditingTask(null);
    //   setEditedTask(null);
    // }
  };

  const handleToggleTaskStatus = (task: any) => {
    const newStatus = task.status === "incomplete" ? "complete" : "incomplete";
    updateTaskStatus(task.id, newStatus); // Call your update task status API
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
          My Tasks
        </h1>

        <div className="space-y-6">
          {myTasks?.data.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No task lists available</p>
          ) : (
            myTasks?.data.map((taskList) => (
              <div
                key={taskList.id}
                className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <div onClick={() => toggleTaskList(taskList.id)} className="cursor-pointer">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {taskList.title}
                    </h2>
                    <span className="text-sm text-blue-500 dark:text-blue-400">
                      {taskList.tasks.length} Tasks
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Share TaskList */}
                    <button
                      onClick={() => alert(`Share Task List: ${taskList.title}`)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaShareAlt />
                    </button>
                    {/* Delete TaskList */}
                    <button
                      onClick={() => deleteTaskList(taskList.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {taskList.description}
                </p>

                {/* Expand to show tasks */}
                {expandedTaskList === taskList.id && (
                  <div className="mt-4">
                    {taskList.tasks.length === 0 ? (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        No tasks available
                      </p>
                    ) : (
                      <ul className="space-y-3">
                        {taskList.tasks.map((task) => (
                          <li
                            key={task.id}
                            className="bg-gray-100 rounded-lg p-3 dark:bg-gray-700 dark:text-white"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                {editingTask === task.id ? (
                                  <div>
                                    <input
                                      type="text"
                                      value={editedTask?.title || ""}
                                      onChange={(e) =>
                                        setEditedTask((prev) =>
                                          prev ? { ...prev, title: e.target.value } : null
                                        )
                                      }
                                      className="block w-full p-2 text-gray-900 dark:text-white border rounded-md"
                                    />
                                    <textarea
                                      value={editedTask?.description || ""}
                                      onChange={(e) =>
                                        setEditedTask((prev) =>
                                          prev ? { ...prev, description: e.target.value } : null
                                        )
                                      }
                                      className="block w-full p-2 mt-2 text-gray-900 dark:text-white border rounded-md"
                                    />
                                  </div>
                                ) : (
                                  <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                      {task.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                      {task.description}
                                    </p>
                                    <span
                                      className={`text-xs ${
                                        task.status === "incomplete"
                                          ? "text-yellow-500"
                                          : "text-green-500"
                                      }`}
                                    >
                                      Status: {task.status}
                                    </span>
                                    <span className="text-xs text-gray-400 ml-2">
                                      Created at: {new Date(task.created_at).toLocaleString()}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center space-x-3">
                                {/* Save or Edit Task */}
                                {editingTask === task.id ? (
                                  <button
                                    onClick={() => handleSaveTask(task.id)}
                                    className="text-green-500 hover:text-green-700"
                                  >
                                    <FaSave />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleEditTask(task)}
                                    className="text-blue-500 hover:text-blue-700"
                                  >
                                    <FaEdit />
                                  </button>
                                )}
                                {/* Delete Task */}
                                <button
                                  onClick={() => deleteTask(task.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <FaTrash />
                                </button>
                                {/* Toggle Task Status */}
                                <button
                                  onClick={() => handleToggleTaskStatus(task)}
                                  className={
                                    task.status === "incomplete"
                                      ? "text-green-500 hover:text-green-700"
                                      : "text-yellow-500 hover:text-yellow-700"
                                  }
                                >
                                  {task.status === "incomplete" ? (
                                    <FaCheckCircle />
                                  ) : (
                                    <FaTimesCircle />
                                  )}
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MyTasksPage;
