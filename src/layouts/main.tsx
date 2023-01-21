// components/layout.js
import { Button } from "@components/Button";
import Footer from "@components/footer/Footer";
import SocialWheel from "@components/footer/socialWheel"
import Navigation from "@components/navigation/Navigation"
import React from "react"

const socials = [
  {
    name: "instagram",
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    name: "discord",
    icon: "/icons/discord.svg",
    link: "https://discord.gg/",
  },
  {
    name: "twitter",
    icon: "/icons/twitter.svg",
    link: "https://twitter.com/",
  },
  {
    name: "twitch",
    icon: "/icons/twitch.svg",
    link: "https://www.twitch.tv/",
  },

  {
    name: "youtube",
    icon: "/icons/youtube.svg",
    link: "https://www.youtube.com/",
  },
  {
    name: "linkedin",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/",
  },
  {
    name: "tiktok",
    icon: "/icons/tiktok.svg",
    link: "https://www.tiktok.com/",
  },
];

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      {/* <Footer /> */}
          {/* <SocialWheel socials={socials} />  */}
          <Button button_type="primary" text="Primary" />
      <Footer />
    </>
  )
}
