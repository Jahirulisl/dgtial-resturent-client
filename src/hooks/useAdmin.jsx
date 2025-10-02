import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecur from "./useAxiosSecur";

const useAdmin = () => {
  const axiosSecure = useAxiosSecur();
  const {user} = useAuth();
 const {data:isAdmin, isPending: isAdminLoading } = useQuery({
  queryKey: [user?.email, 'isAdmin'],
  queryFn:async() =>{
    const res = await axiosSecure.get(`/users/admin/${user.email}`);
    // console.log("useAdmin hook response:", res.data);
    //  console.log("isAdmin value:", res.data?.admin);
    // console.log(res.data);
    return res.data?.admin;
  }
 })
 return [isAdmin,isAdminLoading]
};

export default useAdmin;