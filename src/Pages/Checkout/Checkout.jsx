import { useLoaderData } from "react-router-dom";
import checkImage from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Checkout = () => {
    const service = useLoaderData();
    const { title, price, service_id,img } = service;
    const { user } = useContext(AuthContext);
    console.log(service);
    
    const handleOrder = event => {
        event.preventDefault();

        const form = event.target;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const name = firstName + " " + lastName;
        const email = user?.email;
        const servicePrice = form.servicePrice.value;
        const message = form.message.value;
        const order = {
            name,
            email,
            service_id,
            servicePrice,
            message,
            service: title,
            img
        }
        console.log(order)

        fetch('https://car-doctor-server-running.vercel.app/order', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
            })

    }
    return (
        <div className="container mx-auto">
            <div className="lg:mx-20 py-10">
                <div className="mb-10 overflow-hidden rounded-md relative">
                    <img src={checkImage} className=" object-cover w-full" alt="" />
                    <h3 className="text-3xl font-bold absolute z-10 top-1/2 text-white left-20">Check Out</h3>
                    <div className="absolute z-20 bottom-0 text-center right-1/2 left-1/2 h-[30px] w-[200px] bg-[#ff3811]">
                        <h4 className="text-white ">{ title}/checkout</h4>
                    </div>
                </div>
                <div className="card p-20">
                    <form onSubmit={handleOrder}>
                        
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff3811] focus:outline-none focus:ring-0 focus:border-[#ff3811] peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3811] peer-focus:dark:text-[#ff3811] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff3811] focus:outline-none focus:ring-0 focus:border-[#ff3811] peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3811] peer-focus:dark:text-[#ff3811] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="servicePrice" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff3811] focus:outline-none focus:ring-0 focus:border-[#ff3811] peer" placeholder=" " readOnly defaultValue={price}/>
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3811] peer-focus:dark:text-[#ff3811] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="email" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff3811] focus:outline-none focus:ring-0 focus:border-[#ff3811] peer" placeholder="" readOnly  defaultValue={user?.email} />
                                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3811] peer-focus:dark:text-[#ff3811] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea name="message" id="floating_password" className="resize-none h-[150px] block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#ff3811] focus:outline-none focus:ring-0 focus:border-[#ff3811] peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ff3811] peer-focus:dark:text-[#ff3811] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                        </div>
                        <input type="submit" className="btn w-full bg-[#ff3811] text-white hover:bg-transparent hover:text-[#ff3811] hover:border-[#ff3811]" value="Order Now" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;