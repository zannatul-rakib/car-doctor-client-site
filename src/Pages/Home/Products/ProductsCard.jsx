import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const ProductsCard = ({ product }) => {
    const { title, rating, price, img } = product;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure className="p-5 bg-[#F3F3F3] m-5 rounded-xl">
                <img src={img} alt="Shoes" className=" h-[150px]" />
            </figure>
            <div className="card-body items-center text-center">
                <p className="text-2xl"><Rating
                     placeholderRating={rating}
                     readonly
                    emptySymbol={<AiOutlineStar className='text-[#ff912c]'/>}
                    placeholderSymbol={<AiFillStar className='text-[#ff912c]' />}
                    fullSymbol={<AiFillStar />}
                /></p>
                <h2 className="card-title font-bold text-md">{ title}</h2>
                <p className="text-[#ff3811] text-lg font-semibold">Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductsCard;