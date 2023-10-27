import { menus } from '@/data/statis'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary shadow-soft w-full py-10 px-5 md:px-0'>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Link href={'/'} about='Metalcare Homepage Link' title='Metalcare Homepage Link' className='text-4xl text-white font-semibold'>Metal<span className='text-black'>Care</span></Link>
                <p className='text-sm text-white'>
                Empower student health and well-being with doctors, psychologists, and peer counselors. We offer tailored medical services and emotional support to address the unique challenges students face.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='text-base font-semibold text-white'>Overview</h1>
                <div className="flex flex-col gap-1">
                    <p className='text-sm font-regular text-white'>Checking Health</p>
                    <p className='text-sm font-regular text-white'>Peer Counseling</p>
                    <p className='text-sm font-regular text-white'>Make a Schedule</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='text-base font-semibold text-white'>Services</h1>
                <div className="flex flex-col gap-1">
                    {
                        menus.map((menu, index) => (
                            <p key={index} className='text-sm font-regular text-white'>{menu.name}</p>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='text-base font-semibold text-white'>Socials</h1>
                <div className="flex flex-col gap-1">
                    <p className='text-sm font-regular text-white'>Instagram</p>
                    <p className='text-sm font-regular text-white'>Twitter</p>
                    <p className='text-sm font-regular text-white'>Facebook</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer