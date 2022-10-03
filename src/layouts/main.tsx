// components/layout.js

import { Navbar } from "@components/nav";
import React from "react";

export const Layout = (props: { children: React.ReactNode }) =>{
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </>
  )
}