import { authMenus, menus } from '@/data/statis'
import Link from 'next/link'
import React from 'react'
import { ButtonLink } from '.'

const Navbar = () => {
  return (
    <header className='w-full fixed py-6 bg-white'>
        <nav className='max-w-5xl flex items-center justify-between mx-auto'>
            <div className="flex gap-8 items-center justify-center">
                <Link href={'/'} about='Metalcare Homepage Link' title='Metalcare Homepage Link' className='text-4xl text-black font-semibold'>Metal<span className='text-primary'>Care</span></Link>

                <div className="flex gap-5">
                {
                    menus.map((menu, index) => (
                        <Link key={index} href={menu.link} about={menu.name} title={menu.name} className='text-sm text-black hover:text-black border-b-2 border-b-transparent hover:border-b-primary hover:border-b-2 pb-2 duration-500 mt-4'>{menu.name}</Link>
                    ))
                }
                </div>
            </div>

            <div className="flex items-center gap-2">
                {
                    authMenus.map((menu, index) => (
                        <ButtonLink key={index} link={menu.link} label={menu.name} isSolid={menu.name === 'Sign Up' ? false : true} />
                    ))
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar