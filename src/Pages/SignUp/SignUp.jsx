import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  // use navigat for login page 
  const naviget = useNavigate();

  //from react hooks form start
  const { register, handleSubmit, reset,formState: { errors }, } = useForm();
  //from react hooks form end

  //user informotion ta nia asbo from authProvider
  const { createUser, updateUserProfile} = useContext(AuthContext);

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.PhotoURL)
          .then(() => {
            console.log("user profile info updated")
            reset();
            //for sweet alart start
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User Created Successfull.",
              showConfirmButton: false,
              timer: 1500
            });
            //for sweet alart end
          })
          .catch(error => console.log(error));

        //for go login
        naviget("/");
      })

  };

  return (
    <>
      <Helmet>
        <title>Dgtail Restruent | SignUP</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)}
              className="card-body">
              {/* for name start */}
              <div className="form-control">
                <label className="label">
                  <span>Name</span>
                </label>

                <input type="text" {...register("name", { required: true })}
                  name="name"
                  className="input" placeholder="your name" />
                {/* from react  hooks for required */}
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              {/* for name end */}

              {/* for PHOTOURL start */}
              <div className="form-control">
                <label className="label">
                  <span>Photo URL</span>
                </label>

                <input type="text" {...register("PhotoURL", { required: true })}
                  className="input" placeholder="PhotoURL" />
                {/* from react  hooks for required */}
                {errors.PhotoURL && <span className="text-red-600">PhotoURL is required</span>}
              </div>
              {/* for PHOTOURL end */}



              {/* for email start */}
              <div className="form-control">
                <label className="label">
                  <span>Email</span>
                </label>

                <input type="email" {...register("email")}
                  name="email"
                  className="input" placeholder="Email" />
                {/* from react  hooks for required */}
                {errors.name && <span className="text-red-600">Email is required</span>}
              </div>
              {/* for email end */}

              {/* for password start */}
              <div className="form-control">
                <label className="label">
                  <span>password</span>
                </label>

                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                  className="input input-bordered" placeholder="Password" />
                {/* from react  hooks for handle errors required */}
                {errors.password?.type === "required" &&
                  <p className="text-red-600">Password is required</p>
                }
                {/*error for menimam 6 chrecter */}
                {errors.password?.type === "minLength" &&
                  <p className="text-red-600">Passwomust be 6 required</p>
                }
                {/*error for maxmimen 20 chrecter */}
                {errors.password?.type === "maxLength" &&
                  <p className="text-red-600">Passwomust be lesthen 20 required</p>
                }
                {/*error for maxmimen 20 chrecter */}
                {errors.password?.type === "pattern" &&
                  <p className="text-red-600">Passwomumust have one upercase and one lowercase and one number and one special charecter</p>
                }
              </div>
              {/* for password end */}
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p><small>Alrady have an account<Link to="/login">Login</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;