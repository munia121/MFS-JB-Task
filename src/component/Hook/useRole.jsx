import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../Auth/AuthPrivet";
import axios from "axios";

const useRole = () => {
    const {user} = useAuth()
    console.log(user)

    const { data: role} = useQuery({
        queryKey:['role',user?.email],
        queryFn: async () =>{
            const {data} =await axios.get(`http://localhost:5000/user/${user?.email}`)
            console.log(data)
            return data.role
        }
    })
    console.log(role)
    return [role]
};

export default useRole;