import "../src/styles/main.scss"
import { RouterContext } from "next/dist/shared/lib/router-context"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: "#000",
      },
      {
        name: "light",
        value: "#fff",
      },
    ],
  },
}
