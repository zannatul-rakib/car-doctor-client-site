import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebook } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    
    const handleUserCreate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ name, email, password })
        
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                form.reset();
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
                            <h1 className="text-2xl my-5 font-semibold mb-3 text-center">Register</h1>
                            <div className="card-body">
                        <form onSubmit={handleUserCreate}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
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
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#FF3811] text-white hover:bg-transparent hover:border-[#FF3811] hover:text-[#FF3811]" type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="text-center mt-2 mb-4">
                            <p>Or Register with</p>
                            <div>
                                <span><FcGoogle /></span>
                                <span><BiLogoFacebook /></span>
                                <span><PiGithubLogoFill /></span>
                            </div>
                            <p className="my-5 text-xs">Already have an account Please <Link className="link text-[#FF3811]" to="/login">Login</Link></p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;