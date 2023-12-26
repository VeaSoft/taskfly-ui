import { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { IoIosNotificationsOutline } from "react-icons/io"
import { RxAvatar } from "react-icons/rx"
import { googleAuthCallback } from "../../services"

type UserData = {
  createdAt: string
  email: string
  firstName: string
  lastName: string
  updatedAt: string
  __v: number
  _id: string
}

const NavBar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible)
  }

  const navigate = useNavigate()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGoogleAuth = async () => {
    setLoading(true)
    try {
      const response = await googleAuthCallback()

      setUserData(response.userRecord)
      localStorage.setItem("atk", response.accessToken)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGoogleAuth()
  }, [])

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex text-center lg:flex-row justify-between items-center">
        <div className="lg:mb-0">
          <span
            className="text-[#05149D] font-bold text-[24px]"
            onClick={() => navigate("/")}
          >
            TaskFly
          </span>
        </div>
        <div className="flex items-center">
          <button className="lg:hidden text-black" onClick={toggleDropdown}>
            {isDropdownVisible ? (
              <HiX className="text-[#05149D] font-bold text-[24px]" />
            ) : (
              <HiMenu className="text-[#05149D] font-bold text-[24px]" />
            )}
          </button>
          <div
            className={`lg:hidden fixed inset-0 z-50 bg-white ${
              isDropdownVisible ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-end p-4">
              <button className="text-black" onClick={toggleDropdown}>
                <HiX className="text-[#05149D] font-bold text-[24px]" />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-black lg:mr-4 mb-5 cursor-pointer text-2xl">
                <IoIosNotificationsOutline />
              </div>
              <button className="px-4 py-2 text-2xl flex">
                {userData?.firstName || "User"}
                <span className="ml-4">
                  <RxAvatar />
                </span>
              </button>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="text-black lg:mr-4 cursor-pointer text-3xl">
              <IoIosNotificationsOutline />
            </div>
            <button className="text-[#00042D] text-center items-center flex px-4 py-2 text-2xl">
              {userData?.firstName || "User"}
              <span className="ml-4">
                <RxAvatar />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
