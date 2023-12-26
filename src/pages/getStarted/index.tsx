import React from "react"
import { LoginScreen, google } from "../../assets"
import MyFooter from "../../components/footer"

const Login = () => {

  return (
    <div className="flex flex-col">
      <div className="flex w-screen h-screen md:flex-row md:flex ">
        <div
          className="relativ hidden rounded-tl-lg rounded-bl-lg md:flex md:items-end md:justify-center w-1/2 h-screen"
          style={{
            backgroundImage: `url(${LoginScreen}) `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="relative inset-0 max-w-xl text-white p-9 mb-20">
            <p className="text-xl leading-[30px] max-w-md font-latoRegular pr-8">
              The best preparation for tomorrow is to make sure today's work is
              superbly done.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-4 overflow-scroll overflow-x-hidden items-center justify-center  md:items-around w-full md:w-1/2">
          <h1 className="text-[#05149D] font-bold text-3xl text-center md:text-left mb-5">
            TASKFLY
          </h1>
          <button className="bg-[#05149D] text-white px-4 py-2 rounded flex w-[242px]">
            <img src={google} alt="google" />
            <p
              className="ml-2"
              onClick={() => {
                window.location.href =
                  "https://taskfly-api.peachblossoms.ng/api/v1//auth/google"
              }}
            >
              Continue with Google
            </p>
          </button>
        </div>
      </div>
      <div className="classname w-full">
        <MyFooter />
      </div>
    </div>


  )
}


export default Login