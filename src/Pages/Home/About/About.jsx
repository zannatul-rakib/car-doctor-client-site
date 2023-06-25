import part from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="lg:mx-20 my-20">
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:w-1/2 relative'>
                            <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
                            <img src={part} className="absolute w-[300px] border-8 border-[white] top-1/2 left-1/3 max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:w-1/2 space-y-4 px-5'>
                            <h2 className='text-2xl font-semibold text-[#ff3811] '>About Us</h2>
                            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
                            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. </p>
                            <button className="btn bg-[#ff3811] text-white hover:bg-transparent hover:text-[#ff3811] hover:border-[#ff3811] rounded-none">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;