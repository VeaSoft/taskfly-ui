import React, { FC, useEffect, useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import ModalPanel from "../../components/modal"
import TableContent from "../../components/tableContent"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, SubmitHandler } from "react-hook-form"
import DatePicker from "react-datepicker"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

import {
  getSingleProject,
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../../services"
import { BounceLoader } from "react-spinners"
import GoBack from "../../components/Back"

type TaskData = {
  taskTitle: string
  taskDescription: string
  taskDueDate: Date
  projectId?: string
}

const schema = yup.object().shape({
  taskTitle: yup.string().required("Task name is required"),
  taskDescription: yup.string().required("Task description is required"),
  taskDueDate: yup.date().required("Task due date is required"),
})

const Project: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<TaskData>({
    resolver: yupResolver(schema),
  })

  const { _id } = useParams()
  const [projectData, setProjectData] = useState<any>({})
  const [openModal, setOpenModal] = useState(false)
  const [tasks, setTasks] = useState<any>([])
  const [editTask, setEditTask] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const handleGetTasks = async () => {
    setLoading(true)
    try {
      const response = await getTasks(_id)
      console.log(response)
      setTasks(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetTasks()
  }, [])

  const getSingleProjectData = async () => {
    setLoading(true)
    if (_id) {
      const response = await getSingleProject(_id)
      console.log(response)
      setProjectData(response.data)
      setLoading(false)
    } else {
      console.log("No id")
    }
  }

  const onSubmitTask: SubmitHandler<TaskData> = async (data) => {
    try {
      if (editTask) {
        // If editTask is defined, update the existing task
        const response = await updateTask(editTask._id.toString(), data)
        console.log(response)
        toast.success(response.message)
      } else {
        // If editTask is not defined, create a new task
        const response = await createTask({
          ...data,
          projectId: _id,
        })
        console.log(response)
        toast.success(response.message)
      }

      setOpenModal(false)
      reset()
      getSingleProjectData()
      handleGetTasks() // Refresh the list of tasks
      getSingleProjectData()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSingleProjectData()
  }, [])

  const resetForm = () => {
    setEditTask(null)
    reset()
  }

  const handleEditTask = (task: any) => {
    setEditTask(task)
    setOpenModal(true)
    setValue("taskTitle", task.taskTitle)
    setValue("taskDescription", task.taskDescription)
    setValue("taskDueDate", new Date(task.taskDueDate))
  }

  const handleDeleteTask = async (taskId: string) => {
    try {
      const updatedTasks = tasks.filter((task: any) => task._id !== taskId)
      setTasks(updatedTasks)

      const response = await deleteTask(taskId)
      console.log(response)

      toast.success("Task deleted successfully")
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreateTask = () => {
    resetForm()
    setOpenModal(true)
  }

  return (
    <div className="px-3 md:px-20 py-2">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <BounceLoader color="#05149D" />
        </div>
      ) : (
        <>
          <div className=" flex mt-5 text-[#100A37] font-bold items-center text-2xl ">
            <GoBack link="/dashboard" />
          </div>

          <div className="md:flex justify-between items-center mt-8">
            <h1 className="md:text-[24px] text-[20px] text-[#100A37] capitalize">
              {projectData?.projectName}
            </h1>
            <button
              className="bg-[#05149D] text-white px-4 py-2 rounded flex w-[132px]"
              onClick={handleCreateTask}
            >
              <p className="justify-center flex text-[18px]">Create task</p>
            </button>
          </div>
          <div className="flex w-52 h-20 mt-10">
            <div className="flex items-center w-full justify-around p-4 bg-[#F3F3F3] shadow-md hover:shadow-lg">
              <div className="flex items-center mr-4">
                <p className="text-[#05149D] mr-2">Todo</p>
                <span className="flex items-center justify-center text-white bg-[#05149D] rounded-full p-2 h-8 w-8">
                  {tasks.length}
                </span>
              </div>

              {/* <div className="flex items-center mr-4">
                <p className="text-[#05149D] mr-2">Doing</p>
                <span className="flex items-center justify-center text-white bg-[#05149D] rounded-full p-2 h-8 w-8">
                  4
                </span>
              </div> */}

              {/* <div className="flex items-center">
                <p className="text-[#05149D] mr-2">Done</p>
                <span className="flex items-center justify-center text-white bg-[#05149D] rounded-full p-2 h-8 w-8">
                  4
                </span>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <TableContent
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          </div>
          <ModalPanel
            closeModal={() => setOpenModal(false)}
            open={openModal}
            closeButton
          >
            <form
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmitTask)}
            >
              <h2 className="text-2xl font-bold text-center">Create Project</h2>

              <div className="my-[40px] space-y-6">
                <div className="w-full flex flex-col space-y-2">
                  <label htmlFor="Task name" className="text-[#00042D]">
                    Task name
                  </label>
                  <input
                    {...register("taskTitle", { required: true })}
                    type="text"
                    placeholder="Shopping"
                    className="px-2 py-2 outline-none text-base border border-[#959595] rounded-lg"
                  />
                  {errors.taskTitle && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="w-full flex flex-col space-y-2">
                  <label htmlFor="Task description" className="text-[#00042D]">
                    Task description
                  </label>
                  <textarea
                    {...register("taskDescription", { required: true })}
                    placeholder="Careerly"
                    className="px-2 py-2 outline-none text-base border border-[#959595] rounded-lg"
                    rows={5}
                  />
                  {errors.taskDescription && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="w-full flex flex-col space-y-2">
                  <label htmlFor="Task name" className="text-[#00042D]">
                    Task due date
                  </label>
                  <DatePicker
                    {...register("taskDueDate", { required: true })}
                    dateFormat="dd/MM/yyyy"
                    selected={watch("taskDueDate")}
                    placeholderText="Task due date"
                    className="w-full border bg-off-white border-black rounded-md px-3 py-3 mt-2 focus:outline-none focus:border-dark-gray"
                    onChange={(date: Date) => setValue("taskDueDate", date)}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#05149D] text-white px-4 py-3 rounded mt-4 relative"
                  disabled={loading}
                >
                  {loading ? (
                    <BounceLoader size={20} color="#ffffff" />
                  ) : editTask ? (
                    "Update task"
                  ) : (
                    "Create task"
                  )}
                </button>
              </div>
            </form>
          </ModalPanel>
        </>
      )}
    </div>
  )
}

export default Project
