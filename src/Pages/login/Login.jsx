//for captcha import start 
import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
//for captcha import end 

const Login = () => {
  //for captcha start
    useEffect(() =>{
      loadCaptchaEnginge(6);
    },[]);
    //for captcha end
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  }
  return (
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
              <label className="label">Email</label>

              <input type="email"
                name="email"
                className="input" placeholder="Email" />
            </div>

            <div className="form-control">
              <label className="label">Password</label>

              <input type="password"
                name="password"
                className="input" placeholder="Password" />
            </div>

            {/* fOR CAPTCHA START */}
            <div className="form-control">
              <label>
                <LoadCanvasTemplate />
              </label>
              <input type="text"
                name="captcha"
                className="input" placeholder="type captcha get above" />
            </div>
            {/* fOR CAPTCHA END */}

            <input className="btn btn-primary" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
