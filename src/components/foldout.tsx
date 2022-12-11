import { useRef } from "react"
import { useState } from "react"
import { useSpring, animated } from "react-spring"

export const Foldout = (props: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const foldOutRef = useRef<HTMLDetailsElement>(null)
  // use react spring to animate the foldout
  const foldOutAnimation = useSpring({
    height: open ? foldOutRef.current?.scrollHeight : 0,
    opacity: open ? 1 : 0,
    overflow: "hidden",
  })
  return (
    <div>
      <animated.details  className="foldout" ref={foldOutRef}>
        <summary>Click to expand</summary>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eius
          adipisci magnam veritatis nostrum modi, cumque voluptatem libero
          dolores et. Labore aspernatur non asperiores. Mollitia eius enim
          tempore modi labore non molestias aut sed, laborum, earum impedit
          laboriosam omnis id.
        </div>
      </animated.details>
    </div>
  )
}
// angle down arrow
