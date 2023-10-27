import React from 'react'
import Image from 'next/image'

const StepCard: React.FC<StepCardProps> = ({ icon, heading, description }) => {
  return (
    <div className="flex flex-col gap-4 items-left px-5 py-7 w-[250px] border-t-4 border-t-primary shadow-soft rounded-bl-md rounded-br-md hover:scale-110 cursor-pointer duration-500">
       <Image title={'Icon'} alt={'Icon'} width={0} height={0} className='w-10' src={icon}  />
       <h1 className='text-sm font-semibold text-black'>{heading}</h1>
       <p className='text-sm font-regular text-grey'>{description}</p>
    </div>
  )
}

export default StepCard