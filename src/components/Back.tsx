import React from "react"
import { Link } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5";


interface GoBackProps {
  link: string
  className?: string
}

const GoBack = ({ link, className }: GoBackProps) => (
  <Link to={link} className="hover:no-underline">
    <div className="flex justify-start items-center">
      <IoArrowBackCircle className="text-dark font-latoBold font-[24px] text-md hover:text-assetize-dark-text"
       />
      <p
        className={` ${className} ml-2 text-dark font-latoBold font-[18px] text-md hover:text-assetize-dark-text`}
      >
        Back
      </p>
    </div>
  </Link>
)

export default GoBack
