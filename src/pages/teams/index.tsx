import { trpc } from "@/utils/trpc"
import Link from "next/link"



const Teams = () => {
    const { data: teams, isLoading } = trpc.useQuery(["cms.teams.getAllTeams"])
    if (isLoading || !teams) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Teams</h1>
            {teams.map((team) => (
                <div key={team.id}>
                    <Link href={`/teams/${team.name}`}>{team.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Teams