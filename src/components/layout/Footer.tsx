import Link from "next/link"
import * as FA from "react-icons/fa"

// get the css custom properties

const Footer = () => {
  // modify the css custom properties of the container class

  return (
    <>
      <footer className="primary-footer">
        <section className="socials">
          <div className="icon-circle">
            <img src="/icons/instagram.svg" alt="test" />
            <img src="/icons/youtube.svg" alt="" />
            <img src="/icons/tiktok.svg" alt="" />
          </div>
        </section>
        <section className="footer-content">
          <div className="footer-nav-wrapper">
            <nav className="footer-navigation">
              {/* unordered list with links to home, shop, about, teams and schedule */}
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/teams">Teams</Link>
                </li>
                <li>
                  <Link href="/schedule">Schedule</Link>
                </li>
              </ul>
            </nav>
          </div>
          <section className="terms-and-conditions">
            <ul role="list">
              <li>
                {/* privacy policy */}
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                {/* safety and information protection */}
                <Link href="/safety-and-information-protection">
                  Safety & Information Protection
                </Link>
              </li>
              <li>
                {/* terms and conditions */}
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </section>
          <section className="contact-information">
            <ul role="list">
              <li>
                {/* email */}
                <Link
                  href="mailto:
                  "
                >
                  Email
                </Link>
              </li>
              <li>
                {/* phone number */}
                <Link href="tel:">Phone</Link>
              </li>
              <li>
                {/* address */}
                <Link href="https://goo.gl/maps/8J9Z1Z1Z1Z1Z1Z1Z9">
                  Address
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </footer>
    </>
  )
}

export default Footer
