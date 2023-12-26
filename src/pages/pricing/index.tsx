import React from 'react'
import { heroimage } from '../../assets'
import Hero from '../../components/hero'
import MyFooter from '../../components/footer'

const Pricing = () => {
  return (
    <><Hero
      backgroundImage={heroimage}
      heroText={"Perfectly Priced just for you "}
      buttonText={"₦500/month"}
      heroDetail={"The easiest and most fluid task manager made just for you From #500/month"}
      buttonSize='lg:w-[400px] lg:h-[100px] text-3xl' /><div className="lg:h-[700px] flex items-center bg-white lg:p-24 p-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col  items-center md:items-start gap-3">
          <h5
           className='text-[40px] font-bold text-[#00042D] text-center md:text-left '
          >
         We got you covered
          </h5>
          <p className="text-[20px] text-[#00042D] w-[60%] text-center md:text-left">
          Have any questions or Need assisted setup?
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
          <form action="" className='w-3/4'>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 border-b-black border-b-2">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="flex flex-col gap-3 border-b-black border-b-2">
                <label htmlFor="email">Your e-mail</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="flex flex-col gap-3 border-b-black border-b-2 mb-3">
                <label htmlFor="phone">Your message</label>
                <textarea name="message" id="message" cols={30} rows={6}></textarea>
                </div>
            </div>
            <button className="bg-[#05149D] text-white px-4 py-2 rounded w-full">
              Send message
            </button>
          </form>
        </div>
      </div>
      <MyFooter></MyFooter>
      </>
  )
}

export default Pricing