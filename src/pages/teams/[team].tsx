import { useRouter } from "next/router"

const Team = () => {
    const router = useRouter()
    const {team} = router.query
    return (
        <h1>Team {team}</h1>
    )
}

export default Team