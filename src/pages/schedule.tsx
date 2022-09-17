import React from "react";
import { trpc } from "../utils/trpc";


export const SchedulePage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: role, isLoading } = trpc.useQuery(["user.CheckIfAdmin"]);
    
    
    if (isLoading) return <div>loading...</div>
  
    if (role !== "ADMIN") return <div>not an admin</div>
    return (
        <div>
            <h1>Schedule</h1>
            {children}
        </div>
    )
}

export default SchedulePage