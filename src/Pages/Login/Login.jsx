import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";
    

    
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ email, password })
        
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="container mx-auto">
            <div className="lg:mx-40 my-20">
                <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <div className="">
                       <img className="h-[400px]" src={loginImage} alt="" />
                    </div>
                    <div className="card w-full rounded-none border max-w-sm bg-base-100">
                        <div className="card-body">
                            <h1 className="text-2xl font-semibold mb-3 text-center">Login now!</h1>
                            <form onSubmit={handleLogIn}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#FF3811] text-white hover:bg-transparent hover:border-[#FF3811] hover:text-[#FF3811]" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className="my-5 text-xs text-center">You have`nt an account Please <Link className="link text-[#FF3811]" to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;