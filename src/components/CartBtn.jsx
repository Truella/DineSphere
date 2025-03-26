import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

export default function CartBtn() {
  return (
    <div className='fixed z-[1000] w-[70px] h-[70px] flex justify-center items-center rounded-[50%] right-5 bottom-[15vh]'><FaCartPlus size={"40px"}/></div>
  )
}
