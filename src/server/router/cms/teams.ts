import { z } from "zod";
import { createRouter } from "../context";


export const teamsRouter = createRouter()
    // get all teams
    .query("getAllTeams", {
        async resolve({ctx}) {
            const allTeams = await ctx.prisma.team.findMany();
            return allTeams;
        } 
    })
    // get one team
    .query("getOneTeam", {
        input: z.object({
            name: z.string(),
        }),
        async resolve({ ctx, input }) {
            const team = await ctx.prisma.team.findFirst({
                where: {
                    name: input.name,
                },
            });
            return team;
        },
    })
