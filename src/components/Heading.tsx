import React from 'react'

const Heading: React.FC<HeadingProps> = ({ subHeading, heading, isCentered }) => {
  return (
    <div className="flex flex-col gap-3">
        <div className={`flex flex-col gap-2 ${isCentered ? 'items-center justify-center text-center' : ''}`}>
            <p className="text-sm text-primary font-semibold">{subHeading}</p>
            <h1 className="font-semibold text-black text-4xl">{heading}</h1>
        </div>
    </div>
  )
}

export default Heading