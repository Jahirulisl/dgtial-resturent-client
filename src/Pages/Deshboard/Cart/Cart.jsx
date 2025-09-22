
import { FaTrashAlt } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecur from '../../../hooks/useAxiosSecur';

const Cart = () =>{
  //amra cart ar information ta anbo useCart hook thaka
  const [cart,refetch] = useCart(); //refetch nia aslam updetar jonno o
  //for price start>
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  //for delete start use axios
 const axiosSecure = useAxiosSecur();

  const handleDelete = id => {
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
       axiosSecure.delete(`/carts/${id}`)
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
      <div className='flex justify-evenly mb-8'>
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">Total price:${totalPrice}</h2>
        <button className='btn btn-primary'>Pay</button>
      </div>
      {/* for tabile start */}
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr key={item._id}>
                <th>
                  {index + 1}
                </th>
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
                <td>{item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className='text-red-600'></FaTrashAlt>
                  </button>
                </th>
              </tr>)
            }

          </tbody>
        </table>
      </div>
      {/* for tabile end */}
    </div>
  );
};

export default Cart;