import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  //from category item start
  const { name, image, price, recipe } = item;

   //for location get us state
 const locaion = useLocation();

  //for navigate other page start
  const navigate = useNavigate();

  //for user information start
    const { user } = useAuth();

  //for handle card start 
  const hnadleAddToCart = food => {
    if (user && user.email) {
      //TODO: send cart item to the database
     console.log("User logged in:", user.email);
    }
    else {

        //alart message start>
      Swal.fire({
        title: "You are Not Logged In",
        text: "You won't be able to revert thisplase login to add to the cart?!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "yes, loggin"
      }).then((result) => {
        if (result.isConfirmed) {
           //send the user to the login page 
           navigate('/login', {state:{from: locaion}})
        }
      });
      //alart message end>
    }
  }
  return (
    //card from daisyui khala start
    <div className="card bg-base-100 w-96 shadow-xl ">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <p className="absolute right-0  mr-4  rounded mt-4 px-4 bg-slate-900 text-white ">${price}</p>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => hnadleAddToCart(item)} className="btn btn-outline border-0 border-orange-400 bg-slate-100 border-b-4 mt-4">Add to card</button>
        </div>
      </div>
    </div>
    //card from daisyui khala start
  );
};

export default FoodCard;