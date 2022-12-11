// create a button component
import React from "react"
import For from "./utils/For"

interface ButtonProps {
  children?: React.ReactNode
  button_type: "primary" | "secondary" | "navigation" | "cta"
  onClick?: () => void
  color?: string
  backgroundColor?: string
  text: string
}

export const Button = ({
  children,
  button_type,
  onClick,
  color,
  backgroundColor,
  text,
}: ButtonProps) => {
  return (
    <>
      <button
        className="btn"
        data-button-type={button_type}
        onClick={onClick}
        style={{ backgroundColor, color }}
      >
        {children ?? text}
      </button>
    </>
  )
}
