import { createRouter } from "../context";
import superjson from "superjson";
import { teamsRouter } from "./teams";

export const cmsRouter = createRouter()
    .transformer(superjson)
    .merge("teams.", teamsRouter)