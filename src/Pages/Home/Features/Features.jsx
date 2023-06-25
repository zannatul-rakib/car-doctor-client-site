import teamImage from "../../../assets/icons/group.svg";
import timeImage from "../../../assets/icons/deliveryt.svg";
import checkImage from "../../../assets/icons/check.svg";
import personImage from "../../../assets/icons/person.svg";
import wrenchImage from "../../../assets/icons/Wrench.svg";

const Features = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:mx-20 my-20">
                <div className="text-center my-10 space-y-5">
                    <h2 className="text-2xl font-semibold text-[#ff3811] ">Core Features</h2>
                    <h1 className="text-4xl font-bold">Why Choose Us</h1>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words <br />which don`t look even slightly believable. </p>
                </div>
                <div className="grid gap-x-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <div className="w-[140px] py-5 border flex flex-col items-center justify-center   rounded-md hover:bg-[#ff3811] hover:text-white group">
                        <img src={teamImage} className="group-hover:invert w-16" alt="" />
                        <h4 className="text-lg font-bold">Expert Team</h4>
                    </div>
                    <div className="w-[140px] border flex flex-col items-center justify-center   rounded-md hover:bg-[#ff3811] hover:text-white group">
                        <img src={timeImage} className="group-hover:invert w-16" alt="" />
                        <h4 className="text-lg font-bold">Time Delivery</h4>
                    </div>
                    <div className="w-[140px] border flex flex-col items-center justify-center   rounded-md hover:bg-[#ff3811] hover:text-white group">
                        <img src={personImage} className="group-hover:invert w-16" alt="" />
                        <h4 className="text-lg font-bold">24/7 Support</h4>
                    </div>
                    <div className="w-[140px] border flex flex-col items-center justify-center   rounded-md hover:bg-[#ff3811] hover:text-white group">
                        <img src={wrenchImage} className="group-hover:invert w-16" alt="" />
                        <h4 className="text-lg font-bold">Best Equipment</h4>
                    </div>
                    <div className="w-[140px] border flex flex-col items-center justify-center   rounded-md hover:bg-[#ff3811] hover:text-white group">
                        <img src={checkImage} className="group-hover:invert w-16" alt="" />
                        <h4 className="text-lg font-bold">100% Guranty</h4>
                    </div>
                    <div className="w-[140px] border flex flex-col items-center justify-center   rounded-md hover:bg-[#ff3811] hover:text-white group">
                        <img src={timeImage} className="group-hover:invert w-16" alt="" />
                        <h4 className="text-lg font-bold">Timely Delivery</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;