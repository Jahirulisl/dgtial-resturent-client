//for captcha import start 
import { useContext, useEffect,useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
//for captcha import end 

const Login = () => {

  //for navigate stape 1

  const navigate =useNavigate();

  //for location start
  const location = useLocation();

  const from =location.state?.from.pathname || "/" ;
  //  for captcha veladate start>>>

  //for valedate captcah true
  const [disabled, setDisabled] = useState(true);

  //FROM AUTHPROVIDER START
  const { signIn } = useContext(AuthContext);
  //FROM AUTHPROVIDER END

  //for captcha useEffect start 
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  //for captcha useEffect end
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // from authprovider use authcontext st
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        //for sweet alart start
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login Successfull.",
          showConfirmButton: false,
          timer: 1500
        });
        //for sweet alart end

        //for navigate/home page>>
       navigate(from,{replace: true});
      })
    //from authprovider use authcontext end
  }
  //for validate captcha start
  const handleValidateCattcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
    //for validate captcha end

  }
  return (
    <>
      <Helmet>
        <title>Dgtail Restruent | LogIN</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin}
              className="card-body">

              <div className="form-control">
                <label className="label">
                  <span>Email</span>
                </label>

                <input type="email"
                  name="email"
                  className="input" placeholder="Email" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span>Email</span>
                </label>

                <input type="password"
                  name="password"
                  className="input" placeholder="Password" />
              </div>

              {/* fOR CAPTCHA START */}
              <div className="form-control">
                <label className="lable">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCattcha} type="text" 
                  name="captcha"
                  className="input input-bordered" placeholder="type captcha get above" />


                {/* for validet type captcha btn */}
                {/* <button className="btn btn-outline btn-xs mt-2">validate</button> */}


              </div>
              {/* fOR CAPTCHA END */}

              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </form>
            <p><small>New Here? <Link to="/signup">Create an account</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
