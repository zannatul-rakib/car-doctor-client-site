

const SliderItem = ({ data }) => {
    const { id, image, prev, next } = data;
    return (<>
        <div id={`#slide${id}`} className="carousel-item relative w-full">
            <img src={image} className="w-full object-cover" />
            <div className="absolute flex items-center w-full h-full top-0  left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                <div className="text-[white] space-y-6 w-1/2 ms-20">
                    <h2 className="text-6xl font-bold">Affordable <br />Price For Car <br /> Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn rounded-none bg-[#FF3811] border-[#FF3811] outline-none text-[white] hover:bg-transparent me-3">Discover More</button>
                        <button className="btn bg-transparent text-[white] rounded-none hover:bg-[#FF3811] hover:border-[#FF3811]">Latest Project</button>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
            </>
    );
};

export default SliderItem;