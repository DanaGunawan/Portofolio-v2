'use client'

import React from 'react'
import { NavLinks } from '../../../../../constants/Constants'
import Link from 'next/link'
import {CgClose} from 'react-icons/cg'

type mobileNavProps = {
  showNav: boolean;
  hideNav: () => void;
}

const MobileNav = ({showNav,hideNav}:mobileNavProps) => {
  const navBoolean = showNav ? "translate-x-0" : "translate-x-[100%]";
  
  return (
    // overlay
    <div className={`fixed ${navBoolean} inset-o transform transition-all right-0 duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
   {/* navlinks*/}
      <div className={`text-white ${navBoolean} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300
      w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[10003] right-0`}>
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.link}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.label}</p>
            </Link>
          )
        })}
        {/*cross Icon */}
      <CgClose  onClick={hideNav} className="absolute top-[0.7rem] right-[1.4rem] sm:h-8 sm:w-8 w-6 h-6" ></CgClose>
      </div>

    </div>
  )
}

export default MobileNav
