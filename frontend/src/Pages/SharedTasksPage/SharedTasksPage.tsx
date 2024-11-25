import React, { useState } from "react";
import { FaEye, FaCheckCircle, FaTimesCircle, FaClock, FaShareAlt } from "react-icons/fa";

// Temporary Data (Replace with API call later)
const tempSharedData = {
  message: "Tasks shared with you",
  data: [
    {
      id: 2,
      shared_with: 3,
      task_list_id: 4,
      permission: "view",
      created_at: "2024-11-25T08:29:24.000000Z",
      updated_at: "2024-11-25T08:29:24.000000Z",
    },
  ],
  taskLists: [
    {
      id: 4,
      title: "This is New Task",
      description: "Halfway there",
      created_by: 2,
      created_at: "2024-11-25T08:21:08.000000Z",
      updated_at: "2024-11-25T08:21:08.000000Z",
      tasks: [
        {
          id: 5,
          title: "Get it done",
          description: "Task description here",
          status: "incomplete",
          task_list_id: 4,
          created_by: 2,
          created_at: "2024-11-25T08:21:43.000000Z",
          updated_at: "2024-11-25T08:21:43.000000Z",
        },
      ],
    },
  ],
};

const SharedTasksPage = () => {
  const [expandedTaskList, setExpandedTaskList] = useState<number | null>(null);

  // Toggle Task List Expand/Collapse
  const toggleTaskList = (id: number) => {
    setExpandedTaskList((prevState) => (prevState === id ? null : id));
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shared Tasks
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Tasks shared with you
          </p>
        </header>

        {/* Shared Task Lists */}
        <div className="space-y-6">
          {tempSharedData.taskLists.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No shared tasks available.</p>
          ) : (
            tempSharedData.taskLists.map((taskList: any) => {
              const sharedInfo = tempSharedData.data.find(
                (item: any) => item.task_list_id === taskList.id
              );

              return (
                <div
                  key={taskList.id}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
                >
                  {/* Task List Header */}
                  <div className="flex justify-between items-center">
                    <div onClick={() => toggleTaskList(taskList.id)} className="cursor-pointer">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {taskList.title}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {taskList.description}
                      </p>
                    </div>

                    {/* Permission Icon */}
                    <div className="flex items-center">
                      {sharedInfo?.permission === "view" ? (
                        <FaEye className="text-gray-400" />
                      ) : (
                        <FaCheckCircle className="text-green-500" />
                      )}
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                        {sharedInfo?.permission === "view" ? "View Only" : "Full Access"}
                      </span>
                    </div>
                  </div>

                  {/* Expandable Task List */}
                  {expandedTaskList === taskList.id && (
                    <div className="mt-4">
                      {taskList.tasks.length === 0 ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          No tasks available in this list.
                        </p>
                      ) : (
                        taskList.tasks.map((task: any) => (
                          <div
                            key={task.id}
                            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mt-4"
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {task.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                              {task.description}
                            </p>
                            <span className="text-xs text-gray-400">
                              Status: {task.status === "incomplete" ? (
                                <span className="text-yellow-500">Incomplete</span>
                              ) : (
                                <span className="text-green-500">Complete</span>
                              )}
                            </span>
                            <div className="mt-3 flex justify-between">
                              <span className="text-xs text-gray-400">
                                Created at: {new Date(task.created_at).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default SharedTasksPage;
