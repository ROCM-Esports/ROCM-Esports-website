import { useRouter } from "next/router"
import { trpc } from "../../utils/trpc"

export const PanelPage = () => {
  const { data: role, isLoading } = trpc.useQuery(["user.CheckIfAdmin"])

const router = useRouter()
    
  if (isLoading) return 

  if (role !== "ADMIN") return router.push("/")
  return (
    router.push("/panel/login")
  )
}

export default PanelPage