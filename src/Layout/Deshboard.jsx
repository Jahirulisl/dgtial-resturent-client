import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Deshboard = () => {
  //for cart length use useCart come
  const [cart] = useCart();
  //TODO: get isAdmin value from the data base
  const isAdmin = true;
  return (
    <div className="flex">
      {/*dash board site bar  */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {
            isAdmin ? <>
              <li>
                <NavLink to="/deshboard/adminHome"><FaHome></FaHome> AdminHome</NavLink>
              </li>
              <li>
                <NavLink to="/deshboard/addItems"><FaUtensils></FaUtensils> AddItems</NavLink>
              </li>

              <li>
                <NavLink to="/deshboard/manageitems"> <FaList></FaList> Manage Items ({cart.length})</NavLink>
              </li>

              <li>
                <NavLink to="/deshboard/bookings"> <FaBook></FaBook> Manage Bookings</NavLink>
              </li>

              <li>
                <NavLink to="/deshboard/users"> <FaUser></FaUser> All Users</NavLink>
              </li>
            </>
              : <>
                <li>
                  <NavLink to="/deshboard/userHome"><FaHome></FaHome> userHome</NavLink>
                </li>
                <li>
                  <NavLink to="/deshboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink>
                </li>

                <li>
                  <NavLink to="/deshboard/cart"> <FaShoppingCart></FaShoppingCart>my cart ({cart.length})</NavLink>
                </li>

                <li>
                  <NavLink to="/deshboard/review"> <FaAd></FaAd>Add a Review</NavLink>
                </li>

                <li>
                  <NavLink to="/deshboard/review"> <FaList></FaList> my bookings</NavLink>
                </li>
              </>
          }
          {/* for divider */}
          <div className="divider"></div>

          {/* shared/comon nav links */}
          {/* for home */}
          <li>
            <NavLink to="/"><FaHome></FaHome> Home</NavLink>
          </li>

          {/* for menue */}
          <li>
            <NavLink to="/order/salad"><FaSearch></FaSearch> Menue</NavLink>
          </li>
          {/* for contact */}
          <li>
            <NavLink to="/order/contact"><FaEnvelope></FaEnvelope>contact</NavLink>
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
