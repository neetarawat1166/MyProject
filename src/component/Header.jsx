import React from 'react'

const Header = () => {
  return (
   <>
    <nav >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="logo">
              Logo
          </div>
          <div className="search">
            Search button
          </div>
          <div className="userdetails">
            Login/Logout
          </div>
        </div>
      </div>
    </nav>
   </>
  )
}

export default Header