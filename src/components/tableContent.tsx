import React, { FC } from "react"
import { MdDeleteForever } from "react-icons/md"
import { FaEdit } from "react-icons/fa"

type Task = {
  _id?: string
  taskTitle?: string
  taskDescription?: string
  taskDueDate?: string // You might want to use a Date type here
  projectId?: string
  userId?: string
  createdAt?: string // You might want to use a Date type here
  updatedAt?: string // You might want to use a Date type here
  __v?: number
}

// interface TableProps {
//     tasks: Task[];
// }

function formatDate(inputDate: string | number | Date) {
  const date = new Date(inputDate)

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date)

  // Add the "th", "st", "nd", "rd" suffix to the day
  const day = date.getDate()
  const suffix =
    day >= 11 && day <= 13
      ? "th"
      : day % 10 === 1
      ? "st"
      : day % 10 === 2
      ? "nd"
      : day % 10 === 3
      ? "rd"
      : "th"

  return formattedDate.replace(/\d+/, (day) => day + suffix)
}

const inputDate = "2023-12-10T23:00:00.000Z"
const formattedDate = formatDate(inputDate)
console.log(formattedDate) // Output: "10th Dec, 2023"

const TableContent: FC<{
  tasks: any[]
  onEdit: (task: any) => void
  onDelete: (taskId: string) => void
}> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <div
          key={task.taskTitle}
          className={`flex justify-between text-[#100A37] text-lg text-center items-center w-full p-4 rounded-md shadow-md hover:shadow-lg ${
            index % 2 === 0 ? "bg-white" : "bg-gray-200"
          } shadow-md`}
        >
          <div className="w-1/3 flex items-center">
            {/* <input type="checkbox" className="w-6 h-6" /> */}
            <div className="ml-6">{task.taskTitle}</div>
          </div>
          <div className="w-1/3 flex justify-end">
            {formatDate(task.taskDueDate!)}
          </div>
          <div className="w-1/3 flex justify-end gap-4">
            <button onClick={() => onEdit(task)}>
              <FaEdit />
            </button>
            <button onClick={() => onDelete(task._id)}>
              <MdDeleteForever />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TableContent
