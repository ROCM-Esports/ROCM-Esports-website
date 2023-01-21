import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa";
import logo from "@assets/logo.png"
// import AccountDropdown from './AccountDropdown'
const Navigation: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navigation-wrapper">
      <nav className="primary-navigation | bg-primary-900" role="navigation" aria-label="Primary Navigation" data-open={ isNavOpen}>
        <button className="nav-toggle" aria-controls="primary-navigation"  aria-expanded={isNavOpen} onClick={() => toggleNav()}>
          <FaAngleDoubleRight/>
        </button>
        <div className="logo">
          <Image src={logo} alt="" />
        </div>
        <ul role="list" className="nav-list">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/teams" className="nav-link">
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/schedule" className="nav-link">
              Schedule
            </Link>
          </li>
        </ul>
        <div className="profile-dropdown" >
          <button aria-haspopup="true">My Profile <i className="arrow down"></i></button>
          <ul className="dropdown-menu">
            <li><Link href="/sign-in">Sign In</Link></li>
            <li><Link href="/sign-out">Sign Out</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation
