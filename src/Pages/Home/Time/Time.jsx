import { FcOvertime, FcCallback } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";


const Time = () => {
    return (
        <div  className="container mx-auto">
            <div className="lg:mx-20 pb-20">
                <div className="bg-[#151515] text-white grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md px-10 py-16">
                    <div className="flex justify-start items-center gap-3">
                        <div>
                            <span className="text text-5xl"><FcOvertime/></span>
                        </div>
                        <div>
                            <p className="text-sm mb-1">We are open monday-friday</p>
                            <h2 className="text-xl font-bold">7:00 am - 9:00 pm</h2>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <div>
                            <span className="text text-5xl"><FcCallback/></span>
                        </div>
                        <div>
                            <p className="text-sm mb-1">Have a question?</p>
                            <h2 className="text-xl font-bold">+2546 251 2658</h2>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <div>
                            <span className="text text-5xl"><FaMapMarkerAlt/></span>
                        </div>
                        <div>
                            <p className="text-sm mb-1">Need a repair? our address</p>
                            <h2 className="text-xl font-bold">Liza Street, New York</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Time;