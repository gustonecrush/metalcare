import Link from 'next/link'
import React from 'react'

const ButtonLink: React.FC<ButtonLinkProps> = ({ link, label, isSolid }) => {
  return <Link href={link} about={label} title={label} className={`${isSolid ? 'bg-primary text-white shadow-sm' : 'bg-transparent text-black hover:bg-primary hover:text-white'} px-8 py-3 text-sm rounded-xl duration-500 hover:scale-110 hover:shadow-sm w-fit`}>{label}</Link>;
}

export default ButtonLink