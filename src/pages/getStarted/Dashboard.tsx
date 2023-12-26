import React, { useEffect, useState } from "react"
import ModalPanel from "../../components/modal"
import { Link, useNavigate, NavigateFunction } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  googleAuthCallback,
  getProjects,
  createProjects,
  getTasks,
  getTasksCount,
} from "../../services"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"
import { BounceLoader } from "react-spinners"
;<BounceLoader color="#05149D" />

type UserData = {
  createdAt: string
  email: string
  firstName: string
  lastName: string
  updatedAt: string
  __v: number
  _id: string
}

type ProjectData = {
  projectName: string
  projectDescription: string
}

interface ProjectListProps {
  createdAt: string
  projectDescription: string
  projectName: string
  updatedAt: string
  userId: string
  __v: number
  _id: string
}

const schema = yup.object().shape({
  projectName: yup.string().required("Project name is required"),
  projectDescription: yup.string().required("Project description is required"),
})

const Dashboard: React.FC = () => {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm<ProjectData>({
    resolver: yupResolver(schema),
  })

  const [time, setTime] = useState(new Date())
  const navigate = useNavigate()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [projectList, setProjectList] = useState<ProjectListProps[]>([])
  const [tasks, setTasks] = useState<any>([])
  const [countTask, setCountTask] = useState<any>([])
  const { _id } = userData || {}
  const [loading, setLoading] = useState(false)

  const handleGoogleAuth = async () => {
    setLoading(true)
    try {
      const response = await googleAuthCallback()

      console.log(response)
      localStorage.setItem("atk", response.accessToken)
      setUserData(response.userRecord)
      setLoading(false)
    } catch (error) {
      console.log(error)
      // toast.error("Google Login failed.")
      setLoading(false)
    }
  }

  const handleGetTasks = async () => {
    try {
      const response = await getTasks(_id)
      const res = await getTasksCount()

      console.log(response)
      setTasks(response.data)
      setCountTask(res.count)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGetProjects = async () => {
    setLoading(true)
    try {
      const response = await getProjects()
      console.log(response)
      setProjectList(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await handleGoogleAuth()
      await handleGetTasks()
      await handleGetProjects()
    }

    fetchData()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const onSubmit: SubmitHandler<ProjectData> = async (data) => {
    console.log(data)
    try {
      const response = await createProjects(data)
      console.log(response)
      reset()
      setOpenModal(false)
      toast.success(response.message)
      handleGetProjects()
    } catch (error) {
      console.log(error)
    }
  }

  const navigateToProject = (id: string, name: string) => {
    navigate(`/project/${id}`, {
      state: {
        _id: id,
        projectName: name,
      },
    })
  }

  const formattedTime = () => {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes().toString().padStart(2, "0")

    let period
    if (hours >= 0 && hours < 12) {
      period = "morning"
    } else if (hours >= 12 && hours < 17) {
      period = "afternoon"
    } else {
      period = "evening"
    }

    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0")
    const ampm = hours >= 12 ? "pm" : "am"

    return {
      time: `${formattedHours}:${minutes}${ampm}`,
      period: period,
    }
  }

  const { time: timeATM, period } = formattedTime()

  return (
    <div className="px-20 py-2">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <BounceLoader color="#05149D" />
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between text-[#100A37] font-bold items-center mt-8">
            <h1 className="text-[24px]">Welcome, it’s great {period}</h1>
            <h1 className="text-[20px]">{timeATM}</h1>
          </div>
          <div className="flex justify-end  h-20">
            <div className="flex items-center p-4 bg-[#F3F3F3] shadow-md hover:shadow-lg">
              <div className="flex items-center mr-4">
                <p className="text-[#05149D] mr-2">Project</p>
                <span className="flex items-center justify-center text-white bg-[#05149D] rounded-full p-2 h-8 w-8">
                  {projectList.length}
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-[#05149D] mr-2">Task</p>
                <span className="flex items-center justify-center text-white bg-[#05149D] rounded-full p-2 h-8 w-8">
                  <span>{countTask > 1 ? countTask : 0}</span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-8">
              <h1 className="text-[24px] font-semibold">Your projects</h1>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-[#05149D] text-white px-4 py-2 rounded flex w-[150px]"
              >
                <p className="justify-center md:flex-row flex-col  flex text-[18px] w-[200px]">
                  Create Project
                </p>
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap items-center justify-center md:justify-start">
              {projectList.map((project) => (
                <Link
                  key={project._id}
                  onClick={() =>
                    navigateToProject(project._id, project.projectName)
                  }
                  className="mt-8 flex h-[145px] w-[300px] font-semibold text-[18px] items-center justify-center bg-[#F3F3F3] text-[#100A37] shadow-md hover:shadow-lg"
                  to={`/project/${project._id}`}
                >
                  {projectList.length > 0
                    ? project.projectName
                    : "No project yet"}
                </Link>
              ))}
            </div>
          </div>
          <ModalPanel
            closeModal={() => setOpenModal(false)}
            open={openModal}
            closeButton
          >
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-bold text-center">Create Project</h2>

              <div className="my-[40px] space-y-6">
                <div className="w-full flex flex-col space-y-2">
                  <label htmlFor="Task name" className="text-[#00042D]">
                    Project name
                  </label>
                  <input
                    {...register("projectName", { required: true })}
                    type="text"
                    placeholder="Shopping"
                    className="px-2 py-2 outline-none text-base border border-[#959595] rounded-lg"
                  />
                  {errors.projectName && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="w-full flex flex-col space-y-2">
                  <label htmlFor="Task description" className="text-[#00042D]">
                    Project description
                  </label>
                  <textarea
                    {...register("projectDescription", { required: true })}
                    placeholder="Careerly"
                    className="px-2 py-2 outline-none text-base border border-[#959595] rounded-lg"
                    rows={5}
                  />
                  {errors.projectDescription && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#05149D] text-white px-4 py-3 rounded mt-4"
                >
                  Create project
                </button>
              </div>
            </form>
          </ModalPanel>
        </>
      )}
    </div>
  )
}

export default Dashboard
