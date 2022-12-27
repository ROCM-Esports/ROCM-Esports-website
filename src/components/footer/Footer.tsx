import Link from "next/link"
import * as FA from "react-icons/fa"
import SocialWheel from "./socialWheel"

// get the css custom properties

const Footer = () => {
  // modify the css custom properties of the container class

  return (
    <>
      <footer className="primary-footer | bg-primary-900 fw-500">
        <div className="container" style={{"--width": '90%'}}>
          <div className="footer-content | grid flow | " style={{"--flow-spacer": "30px"}}>
            <h1 className="footer-heading | text-primary-100 text-center">ROCM Esports</h1>
            <div className="footer-socials">
              <div className="logo">
                <img src="/assets/logo.png" alt="" />
              </div>
              <SocialWheel />
            </div>
            <div className="footer-navigation">
              <h3 className="text-primary-100">Quik navigation</h3>
              <ul className="footer-nav--list | flow" style={{"--flow-spacer": '.5625rem'}} role='list'>
                <li className="footer-item">
                  <Link href="/" className="footer-link" >
                    <a href="" className="footer-link">Home</a>
                 </Link>
                </li>
                <li className="footer-item">
                  <Link href="/about" className="footer-link">
                    <a href="" className="footer-link">About</a>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="/teams" className="footer-link">
                    <a href="" className="footer-link">Teams</a>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="/shop" className="footer-link">
                    <a href="" className="footer-link">Shop</a>
                  </Link>
                </li>
                <li className="footer-item">
                  <Link href="/schedule" className="footer-link">
                    <a href="" className="footer-link">Schedule</a>
                  </Link>
                </li>
              </ul>
            </div>
            <section className="terms-and-conditions">
              <h3 className="text-primary-100">Terms and Conditions</h3>
              <ul className="footer-list | flow" style={{ "--flow-spacer": '.5625rem' }} role='list'>
                <li className="list-item">
                  <Link href="/" className="footer-link">
                    <a href="" className="footer-link">test</a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/" className="footer-link">
                    <a href="" className="footer-link">test</a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/" className="footer-link">
                    <a href="" className="footer-link">test</a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/" className="footer-link">
                    <a href="" className="footer-link">test</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="contact-and-information">
              <h3 className="text-primary-100">Contact & Information</h3>
              <ul className="footer-list | flow" style={{ "--flow-spacer": '.5625rem' }} role='list'>
                <li className="list-item">
                  <Link href="/" className="footer-link">
                    <a href="" className="footer-link">test</a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/" className="footer-link">
                    <a href="" className="footer-link">test</a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/" className="footer-link">
                    <a href="" className="footer-link">test</a>
                  </Link>
                </li>
                </ul>
            </section>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
