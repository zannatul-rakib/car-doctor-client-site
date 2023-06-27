import { useEffect, useState } from "react";
import Card from "./Card";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className="container mx-auto">
            <div className="lg:mx-20 my-20">
                <div className="text-center my-10 space-y-5">
                    <h2 className="text-2xl font-semibold text-[#ff3811] ">Services</h2>
                    <h1 className="text-4xl font-bold">Our Service Area</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br />which don`t look even slightly believable. </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        services.map(service => <Card key={service._id} service={service} />)
                   }
                </div>
                <div className="my-10 text-center">
                    <button className="btn bg-transparent border-[#ff3811] rounded-none text-[#ff3811] hover:bg-[#ff3811] hover:text-white">More Services</button>
                </div>
            </div>
        </div>
    );
};

export default Services;