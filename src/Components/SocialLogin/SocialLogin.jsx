import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  //for user checking step 1 start
  const axiosPublic = useAxiosPublic();
  //for user checking step 1 end
  //for navigate in user chicking step 3 sta
  const navigate = useNavigate();
  //for navigate in user chicking step 3 end
  const {googleSignIn} = useAuth();
  //for on click google button
  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      console.log(result.user);
      //for user checking step 2 start
     const userInfo ={
      email:result.user?.email,
      name: result.user?.displayName
     }
     axiosPublic.post('users',userInfo)
     .then(res =>{
      console.log(res.data);
      navigate('/')
     })
      //for user checking step 2 end
    })
  }
  return (
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2"></FaGoogle>Google
        </button>

      </div>
    </div>
  );
};

export default SocialLogin;