import React from 'react'

const CheckList: React.FC<ChecklistProps> = ({ point }) => {
  return (
    <div className='flex gap-1 text-black font-medium text-sm items-center'>
        <span className="rounded-full bg-primary w-6 h-6 flex items-center p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <p>{point}</p>
    </div>
  )
}

export default CheckList