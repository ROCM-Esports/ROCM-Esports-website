import { signIn, signOut, useSession } from "next-auth/react"
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
      {/* <div className="profile">
        {session?.user?.image ? (
          <img src={session.user.image} alt="" className="profile-image" />
        ) : (
          <div className="profile-image"></div>
        )}
      </div> */}
      <div className="account-dropdown--body" data-open={clicked}>
        <ul role="list" className="account-dropdown--list | ">
          <li>
            {/* <button onClick={session ? () => void signOut() : void signIn()}>
              {session ? "Sign out" : "Sign in"}
            </button> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AccountDropdown
