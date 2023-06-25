import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const TeamCard = ({team}) => {
    const { title, expert, img } = team;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure className="bg-[#F3F3F3] mx-5 mt-5 rounded-xl">
                <img src={img} alt="Shoes" className="w-full object-cover h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className=" font-bold text-2xl m-0 p-0">{ title}</h2>
                <p className=" text-md font-semibold  m-0 p-0">{expert}</p>
                <div className="flex mt-2 gap-4 items-center justify-center">
                    <span className="cursor-pointer rounded-full bg-[#3b5998] text-white p-1 text-lg"><BiLogoFacebook/></span>
                    <span className="cursor-pointer rounded-full bg-[#1da1f2] text-white p-1 text-lg"><AiOutlineTwitter/></span>
                    <span className="cursor-pointer rounded-full bg-[#0077b5] text-white p-1 text-lg"><BiLogoLinkedin/></span>
                    <span className="cursor-pointer rounded-full bg-[#E4405F] text-white p-1 text-lg"><AiOutlineInstagram/></span>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;