import React from 'react'

const loading = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
    <div className="bg-hint animate-pulse w-[80%] h-[400px] md:w-[50%]" />
    <div className=" w-[80%] md:w-[50%] flex flex-col gap-4 ">
      <div className="w-[50%] bg-hint animate-pulse h-[20px]" />
      <div className="w-20 bg-hint animate-pulse h-[10px]" />
      <div className="w-[60%] bg-hint animate-pulse h-[50px]" />
    </div>
   </div>
  )
}

export default loading