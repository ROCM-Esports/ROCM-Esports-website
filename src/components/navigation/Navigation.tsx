import Link from "next/link";
import React, { useState } from "react"
import AccountDropdown from "./AccountDropdown"
// import AccountDropdown from './AccountDropdown'

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link href="/">My App</Link>
      </div>
      <ul className="main-navigation">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/shop">Shop</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/teams">Teams</Link></li>
        <li><Link href="/schedule">Schedule</Link></li>
      </ul>
      <div className="profile-dropdown">
        <button>My Profile <i className="arrow down"></i></button>
        <ul className="dropdown-menu">
          <li><Link href="/sign-in">Sign In</Link></li>
          <li><Link href="/sign-out">Sign Out</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation
