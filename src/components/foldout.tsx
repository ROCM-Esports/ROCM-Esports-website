import { useRef } from "react"
import { useState } from "react"
import { useSpring, animated } from "react-spring"

export const Foldout = (props: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const foldOutRef = useRef<HTMLDivElement>(null)
  const { height } = useSpring({
    from: { height: 0 },
    to: {
      height: open ? foldOutRef.current?.offsetHeight : 0,
    },
  })
  return (
    <div>
      <button onClick={() => setOpen((prevState) => !prevState)}>
        {open ? <span>&#xfe3f;</span> : <span>&#xfe40;</span>}
      </button>
      <animated.div style={{ overflow: "hidden", height }}>
        <div ref={foldOutRef}>{props.children}</div>
      </animated.div>
    </div>
  )
}
// angle down arrow
