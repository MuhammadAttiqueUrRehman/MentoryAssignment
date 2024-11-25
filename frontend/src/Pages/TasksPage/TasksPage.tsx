import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const TasksPage = (props: Props) => {
  const navigate = useNavigate();
  const tiles = [
    {
      title: "Create Task List",
      description: "Start a new task and track progress.",
      icon: "📝",
      action: () => navigate("/create-task"),
    },
    {
      title: "My Tasks",
      description: "View tasks assigned to you.",
      icon: "📋",
      action: () => navigate("/my-tasks"),
    },
    {
      title: "Shared With Me",
      description: "Explore tasks shared by others.",
      icon: "🔗",
      action: () => navigate("/shared-tasks"),
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
          Task Management
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={tile.action}
            >
              <div className="text-4xl mb-4 text-primary-600">{tile.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {tile.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {tile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasksPage;
