import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../styles/main.scss";
import { CartProvider } from "@/components/cart/Cart";

// a function that gets all of the css custom properties from the root element
// and adds them to the CSSProperties interface
// this allows us to use them in our components
declare module "react" {
  interface CSSProperties {
    "--width"?: string;
    "--max-width"?: string;
    "--flow-space"?: string;
    "--flex-gap"?: string;
    "--grid-gap"?: string;
  }
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
