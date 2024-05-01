'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Hamburger from "./Hamburger"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuList = isOpen ? "menu-list open" : "menu-list"
  const menuItem = isOpen ? "menu-list__item open" : "menu-list__item"

  return (
    <div>
      <Hamburger hamburgerClasses={isOpen ? "hamburger open" : "hamburger"} handleClick={toggleMenu} />

      <nav className={isOpen ? "nav open" : "nav"}>
        <menu className={menuList}>
          <li className={menuItem}>
            <Link href='/'>Home</Link>
          </li>
          <li className={menuItem}>
            <Link href='#about'>About</Link>
          </li>
          <li className={menuItem}>
            <Link href='#projects'>Projects</Link>
          </li>
          <li className={menuItem}>
            <Link href='#contact'>Contact</Link>
          </li>
        </menu>
      </nav>
    </div>
  )
}

export default Navbar
