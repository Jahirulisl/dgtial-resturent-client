import { FaAd, FaCalendar, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Deshboard = () => {
  return (
    <div className="flex">
      {/*dash board site bar  */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/deshboard/userHome"><FaHome></FaHome> userHome</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink>
          </li>

          <li>
            <NavLink to="/deshboard/cart"> <FaShoppingCart></FaShoppingCart>my cart</NavLink>
          </li>

          <li>
            <NavLink to="/deshboard/review"> <FaAd></FaAd>Add a Review</NavLink>
          </li>

          <li>
            <NavLink to="/deshboard/review"> <FaList></FaList> my bookings</NavLink>
          </li>
          {/* for divider */}
          <div className="divider"></div>
          {/* for home */}
          <li>
            <NavLink to="/"><FaHome></FaHome> Home</NavLink>
          </li>
          {/* for menue */}
          <li>
            <NavLink to="/order/:category"><FaSearch></FaSearch> Menue</NavLink>
          </li>

        </ul>

      </div>
      {/* for  outlet dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Deshboard;
