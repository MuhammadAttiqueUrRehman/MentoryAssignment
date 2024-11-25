import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useTasks } from "../../Context/useTasks";


// Define the type for the form inputs
type CreateTaskListInputs = {
  title: string;
  description: string;
};

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

const CreateTaskListPage = () => {

  const {createTaskList} = useTasks();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskListInputs>({
    resolver: yupResolver(validationSchema),
  });

  const handleCreateTaskList = (data: CreateTaskListInputs) => {
    console.log("Task List Created", data);
    createTaskList(data.title,data.description);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
          Create Task List
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:border-gray-700 max-w-xl mx-auto">
          <form onSubmit={handleSubmit(handleCreateTaskList)}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter task list title"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-12 p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-xs">{errors.title.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter task list description"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-32 p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-xs">{errors.description.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 text-white bg-lightGreen hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create Task List
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateTaskListPage;
