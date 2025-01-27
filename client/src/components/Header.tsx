import React from 'react'

const Header = () => {
  return (
    <header className="relative w-full bg-white shadow-md mb-10">
      {/* Background Image */}
      <div
        className="h-[14rem] bg-cover bg-center"
        style={{
          backgroundImage: `url('/cover.png')`,
        }}
      ></div>

      {/* Logo */}
      <div
        className="rounded-full absolute left-14 bg-white shadow-md transform -translate-y-1/2 "
        style={{ top: '14rem', left: '12rem' }}
      >
        <img
          src="/Peaktimer.png"
          alt="Peak Timer Logo"
          className="rounded-full w-[10rem] h-[10rem]"
        />
      </div>
    </header>
  )
}

export default Header
