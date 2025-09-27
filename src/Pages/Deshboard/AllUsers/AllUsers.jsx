import { useQuery } from "@tanstack/react-query";
import useAxiosSecur from "../../../hooks/useAxiosSecur";
import { FaTrashAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  
  const axiosSecure = useAxiosSecur();
  const { data: users = [],refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })

  //make handledelete  and add sweet alart
  const handleDelete = user => {
   Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
       }).then((result) => {
         if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
          .then(res =>{
           if(res.data.deletedCount > 0){
            Swal.fire({
             title: "Deleted!",
             text: "Your file has been deleted.",
             icon: "success"
           });
           refetch();
           }
          })
         }
       });
  }
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All users</h2>
        <h2 className="text-3xl">Total users:{users.length}</h2>
      </div>
      {/* use tabil from dasiUi */}
      <div className="overflow-x-auto">
        <table className=" table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDelete(user)} className="btn btn-lg  bg-orange-500">
                    <FaUser className='text-white text-2xl'></FaUser>
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className='text-red-600'></FaTrashAlt>
                  </button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>


  );
};

export default AllUsers;