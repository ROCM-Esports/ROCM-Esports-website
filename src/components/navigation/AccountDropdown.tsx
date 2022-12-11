import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

const AccountDropdown = () => {
  const { data: session } = useSession()
  const [clicked, setClicked] = useState(false)

  // when the user clicks on the account dropdown, we want to toggle the clicked state
  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className="account-dropdown" onClick={handleClick}>
      <div className="triangle-pointer"></div>
      <div className="profile">
        {session?.user?.image ? (
          <img src={session.user.image} alt="" className="profile-image" />
        ) : (
          <div className="profile-image"></div>
        )}
      </div>
      <div className="account-dropdown--body" data-open={clicked}>
        <ul role="list" className="account-dropdown--list | ">
          <li>
            <button
              className="btn"
              data-button-type="account-dropdown"
              onClick={() => signIn("google")}
            >
              Sign In
            </button>
          </li>
          <li>
            <button
              className="btn"
              data-button-type="account-dropdown"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AccountDropdown
