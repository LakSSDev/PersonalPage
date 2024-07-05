import React from "react"

export const Header = () => {
  return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
        <div className="flex-1 flex justify-between items-center">
          <img
            className="sm:w-[10rem] xs:w-[7rem]"
            src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png"
            alt="Logo"
          />
        </div>
        <label className="pointer-cursor md:hidden block">
          <svg
            className="fill-current text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-100 dark:text-gray-600 pt-4 md:pt-0">
              <li>
                <a className="md:p-4 py-3 px-0 block text-rose-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  About Me
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Experience
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  )
}