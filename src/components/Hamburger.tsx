import { useState } from 'react'

interface HamburgerProps {
  hamburgerClasses: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Hamburger = ({ hamburgerClasses, handleClick }: HamburgerProps) => {

  return (
    <div
      role="button"
      tabIndex="0"
      className={`menu-btn focus:outline-none lg:hidden`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <span
        aria-label="hamburger-button"
        role="button"
        tabIndex="0"
        className={hamburgerClasses}
        onClick={handleClick}
        onKeyDown={handleClick}
      ></span>
    </div>
  )
}

export default Hamburger
