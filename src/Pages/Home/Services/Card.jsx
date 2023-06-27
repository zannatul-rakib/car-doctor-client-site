import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Card = ({ service }) => {
    const { title, price, img, _id} = service;
    return (
        <div className="card border rounded-md shadow-xl">
            <figure className="p-5">
                <img src={img} alt="Shoes" className="rounded-md w-full object-cover h-[170px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{ title}</h2>
                
                <div className="card-actions items-center">
                    <p className="text-[#ff3811] text-lg font-semibold">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`} className="text-[#ff3811] text-2xl"><GoArrowRight/></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;