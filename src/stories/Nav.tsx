import { trpc } from "@utils/trpc"
import Link from "next/link"
import React from "react"
import { animated, useSpring } from "react-spring"
import { Foldout } from "@components/foldout"
export function Navbar() {
  const { data, isLoading } = trpc.useQuery(["cms.teams.getAllTeams"])
  const [open, setOpen] = React.useState(false)
  const { x } = useSpring({
    x: open ? 0 : 100,
  })

  return (
    <>
      <aside
        className="navigation-wrapper"
        data-state={open ? "open" : "closed"}
      >
        <button onClick={() => setOpen((prevState) => !prevState)}>☰</button>
        <div className="nav-logo">
          <img
            src="../../public/assets/WebsiteLogo1wit.png"
            alt="Logo ROCM Esports"
          />
        </div>
        <nav className="primary-navigation">
          <ul role="list" className="nav-list">
            <li className="nav-item">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item flex">
              <Link href="/teams">Teams</Link>
              <Foldout>
                <ul>
                  <li>
                    <Link href="/teams/team1">team1</Link>
                  </li>
                  <li>
                    <Link href="/teams/team2">team2</Link>
                  </li>
                  <li>
                    <Link href="/teams/team3">team3</Link>
                  </li>
                  <li>
                    <Link href="/teams/team4">team4</Link>
                  </li>
                </ul>
                {isLoading || !data ? (
                  <div>loading...</div>
                ) : (
                  <ul>
                    {data.map((team) => (
                      <li key={team.id}>
                        <Link href={`/teams/${team.name}`}>{team.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </Foldout>
            </li>
            <li className="nav-item">
              <Link href="/goals">Goals</Link>
            </li>
            <li className="nav-item">
              <Link href="/partners">Partners</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
