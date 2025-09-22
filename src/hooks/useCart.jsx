import { useQuery } from "@tanstack/react-query";
import useAxiosSecur from "./useAxiosSecur";
import useAuth from "./useAuth";



const useCart = () => {
 //get user 
 const {user} = useAuth();

  const axiosSecure = useAxiosSecur();
  //amra axios dia loade na kora tanstack Query
  const {data:cart = [],refetch} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/carts?email=${user.email}`)
      return res.data;
    },
  });
  return [ cart,refetch];
};

export default useCart;