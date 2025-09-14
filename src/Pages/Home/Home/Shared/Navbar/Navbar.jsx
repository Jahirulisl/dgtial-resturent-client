import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../providers/AuthProvider";

const Navbar = () => {

  //for user and login get from authContext start

  const { user, logOut } = useContext(AuthContext);
  //for user and login get from authContext end

  //logout ta handle korar jonnno start
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }
  //logout ta handle korar jonnno end


  const navOptins = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='menu'>Our Menu</Link></li>
    <li><Link to='order/salad'>Our Order</Link></li>
    <li><Link to='menu'>Our Menu</Link></li>
     <li><Link to='/secret'>Secrete</Link></li>

    {
      user ? <>
      <span>{user?.displayName}</span>
       <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </>:<>
      <li><Link to='login'>Log IN</Link></li>
      </>
    }

  </>
  return (
    <>
      <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-black rounded-box w-52">
              {navOptins}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Dgtial Restrunt</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptins}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;