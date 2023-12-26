import React from "react"
import Nav from "../../layouts/navbar"
import Hero from "../../components/hero"
import google from "../../assets/images/gmail.svg"
import slack from "../../assets/images/slack.svg"
import googleCalender from "../../assets/images/google calender.svg"
import webhook from "../../assets/images/webhook.svg"
import { BattleNet, Man, heroImg, heroimage } from "../../assets"
import MyFooter from "../../components/footer"
import { useNavigate } from "react-router-dom"
// import { Card, Footer } from "flowbite-react"

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <Hero
            backgroundImage={heroimage}
            heroText={"Productivity built just for you."}
            buttonText={"Create your account"}
            heroDetail={
              "The easiest and most fluid task manager made just for you From #500/month"
            }
            to= {"/login"}
          />
      <div className="hidden relative lg:flex justify-center">
        <div className="absolute w-4/5 -bottom-11 flex flex-col items-center justify-center h-[200px] rounded-tr-[40px] rounded-tl-[40px] bg-[#E9EBFF]">
          <div>
            <h1>Loved by</h1>
          </div>
          <div className="flex justify-between">
            {[1, 2, 3, 4].map((index) => (
              <React.Fragment key={index}>
                <div className="flex items-center p-4">
                  <img src={BattleNet} alt={`Battle.net ${index}`} />
                  <p className="p-2 text-[24px] text-[#00042D]"> Battle.net</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:h-[700px] flex items-center bg-white lg:p-24 p-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-3">
          <h5
            className="text-[48px] font-bold dark:text-white text-center md:text-left"
            style={{ lineHeight: "64.8px" }}
          >
            <span className="text-[#05149D] mr-1 ">Superduper-charge</span>
            <br />
            your productivity
          </h5>
          <p className="text-[20px] text-[#00042D] w-[60%] text-center md:text-left">
            Work easily with your teams, and turbo-charge your productivity
            without breaking bank.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#05149D] text-white px-4 py-2 rounded w-[114px]"
          >
            Sign up
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
          <img src={Man} alt="" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="h-full bg-[#E9EBFF] flex flex-col justify-center">
        <div className="text-center text-[40px] w-full  flex flex-row justify-center mt-[80px] ">
          <h3 className="text-center w-[616px]">
            Smooth Integrations with the tools you know and love
          </h3>
        </div>

        <div className="grid-cols-2 lg:flex self-center space-y-20 md:space-y-0 md:space-x-24 mx-auto md:mx-[166px] mt-[140px]">
          <div className="w-[100px] h-[100px] md:w-[240px] md:h-[268px]">
            <img
              src={googleCalender}
              alt={googleCalender}
              className="bg-white rounded-md"
            />
            <p className="text-lg text-[#00042D] pt-4">Google Calender</p>
          </div>
          <div className="w-[100px] h-[100px] md:w-[240px] md:h-[268px]">
            <img src={slack} alt={slack} className="bg-white rounded-md" />
            <p className="text-lg text-[#00042D] pt-4">Slack</p>
          </div>

          <div className="w-[100px] h-[100px] md:w-[240px] md:h-[268px]">
            <img src={google} alt={google} className="bg-white rounded-md" />
            <p className="text-lg text-[#00042D] pt-4">G-mail</p>
          </div>

          <div className="w-[100px] h-[100px] md:w-[240px] md:h-[268px]">
            <img src={webhook} alt={webhook} className="bg-white rounded-md" />
            <p className="text-lg text-[#00042D] pt-4">Custom webhooks</p>
          </div>
        </div>
        <div className="text-lg text-[#00042D] pt-4 text-center mt-[160px] mb-[80px] md:mb-[190px]">
          More every week
        </div>
      </div>
      <div className="lg:h-[700px] flex items-center bg-white lg:p-24 p-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
          <img src={Man} alt="" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:ml-10 flex flex-col items-center md:items-start gap-3">
          <h5
            className="text-[48px] font-bold dark:text-white text-center md:text-left"
            style={{ lineHeight: "64.8px" }}
          >
            <span className="text-[#05149D] mr-1 ">Superduper-charge</span>
            <br />
            your productivity
          </h5>
          <p className="text-[20px] text-[#00042D] w-[60%] text-center md:text-left">
            Work easily with your teams, and turbo-charge your productivity
            without breaking bank.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#05149D] text-white px-4 py-2 rounded w-[114px]"
          >
            Sign up
          </button>
        </div>
      </div>

      <div className="bg-white px-[20px] pt-[10px] pb-[15px] lg:px-[120px] lg:pt-[80px] lg:pb-[50px]">
        <div className="bg-[#E9EBFF] px-[10px] lg:px-[80px] pt-[64px] pb-[80px]">
          <div className="text-center text-[18px] mb-[35px] lg:text-[40px] font-bold text-[#00042D] lg:mb-[85px]">
            We are here for you
          </div>
          <div className="flex justify-between">
            <div className="w-[120px] lg:w-[318px] text-[14px] lg:text-[32px] text-[#00042D]">
              Have any questions or Need assisted setup?
            </div>
            <div className="w-[190px] lg:w-[497px] text-[14px] lg:text-[32px] text-[#00042D] text-rigt">
              +234-817-8383-994 covenantchukwudi@gmail.com
            </div>
          </div>
        </div>
      </div>

      <MyFooter> </MyFooter>
    </>
  )
}

export default Home
