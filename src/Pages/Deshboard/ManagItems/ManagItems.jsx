import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useAxiosSecur from '../../../hooks/useAxiosSecur';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const ManagItems = () => {
  const [menu, refetch] = useMenu();
  //come token use AxiousSecure
  const axiousSecure = useAxiosSecur();

  //for delete handle start
  const handleDeleteItems = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiousSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      }
    });
  }
  //for delete handle end
  const handleUpdateItem = () => {

  }
  //handle menu UpdateItem start

  //handle menu UpdateItem end

  return (
    <div>
      <SectionTitle heading="manage all items" subHeading="Hurry up"></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                menu.map((item, index) => <tr key={item._id}>
                  <td>
                    {index + 1}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td className='text-right'>${item.price}</td>
                  {/* manageItem update button start */}
                  <td>
                    <Link to={`/deshboard/updateitem/${item._id}`}>
                      <button onClick={handleUpdateItem(item)} className="btn btn-ghost btn-lg bg-orange-500 hover:bg-orange-100">
                        <FaEdit className='text-white '></FaEdit>
                      </button>
                    </Link>
                  </td>
                  {/* manageItem update button end */}
                  <td>
                    <button onClick={() => handleDeleteItems(item)} className="btn btn-ghost btn-lg">
                      <FaTrashAlt className='text-red-600'></FaTrashAlt>
                    </button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagItems;