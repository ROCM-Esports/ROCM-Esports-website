import { trpc } from "@/utils/trpc"
import { useRouter } from "next/router"

const Team = () => {
    const router = useRouter()
    // get team name form router query and convert to string
    const team = router.query.team
    // convert team to string
    if (typeof team !== "string") {
        return null
    }
    const teamString = String(team)

    
    const { data: teamData, isLoading } = trpc.useQuery(["cms.teams.getOneTeam", { name: teamString }])
    if (isLoading || !teamData) {
        return <div>Loading...</div>
    }
    return (
        <h1>Team {teamData.name}</h1>
    )
}

export default Team