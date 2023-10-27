import { authMenus, menus } from '@/data/statis'
import Link from 'next/link'
import React, { useState } from 'react'
import { ButtonLink } from '.'

const NavbarMobile = () => {
    return (
        <nav className="bg-white shadow-soft px-10 py-5 mt-5 flex flex-col gap-4 rounded-2xl duration-500">
            <div className="gap-2 flex flex-col border-b border-b-primary pb-5">
                {
                    menus.map((menu, index) => (
                        <Link key={index} href={menu.link} about={menu.name} title={menu.name} className='text-sm text-black hover:text-black border-b-2 border-b-transparent hover:border-b-primary hover:border-b-2 pb-2 duration-500 mt-4'>{menu.name}</Link>
                    ))
                }
            </div>

            <div className="gap-2 flex">
                {
                    authMenus.map((menu, index) => (
                        <ButtonLink key={index} link={menu.link} label={menu.name} isSolid={menu.name === 'Sign Up' ? false : true} />
                    ))
                }
            </div>
        </nav>
    )
}

const Navbar = () => {
  const [isMenuShowed, setIsShowedMenu] = useState<boolean>(false);

  return (
    <header className='w-full fixed py-6 bg-white px-5 md:px-0'>
        <nav className='max-w-5xl flex items-center justify-between mx-auto'>
            <div className="flex gap-8 items-center justify-center">
                <Link href={'/'} about='Metalcare Homepage Link' title='Metalcare Homepage Link' className='text-4xl text-black font-semibold'>Metal<span className='text-primary'>Care</span></Link>

                <div className="gap-5 hidden md:flex">
                {
                    menus.map((menu, index) => (
                        <Link key={index} href={menu.link} about={menu.name} title={menu.name} className='text-sm text-black hover:text-black border-b-2 border-b-transparent hover:border-b-primary hover:border-b-2 pb-2 duration-500 mt-4'>{menu.name}</Link>
                    ))
                }
                </div>
            </div>

            <div className="items-center gap-2 hidden md:flex">
                {
                    authMenus.map((menu, index) => (
                        <ButtonLink key={index} link={menu.link} label={menu.name} isSolid={menu.name === 'Sign Up' ? false : true} />
                    ))
                }
            </div>

            <svg onClick={(e) => setIsShowedMenu(!isMenuShowed)} className={`cursor-pointer ${isMenuShowed ? 'hidden' : 'block'} md:hidden duration-500`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>

            <svg onClick={(e) => setIsShowedMenu(!isMenuShowed)} className={`cursor-pointer ${isMenuShowed ? 'block' : 'hidden'}  md:hidden duration-500`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </nav>

        {
            isMenuShowed ? <NavbarMobile /> : null
        }
    </header>
  )
}

export default Navbar