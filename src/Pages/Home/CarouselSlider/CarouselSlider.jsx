import bannerImg1 from "../../../assets/images/banner/1.jpg"
import bannerImg2 from "../../../assets/images/banner/2.jpg"


// const bannerData = [
//     {
//         id: 1,
//         prev: 6,
//         next: 2,
//         image: bannerImg1
//     },
//     {
//         id: 2,
//         prev: 1,
//         next: 3,
//         image: bannerImg2
//     },
//     {
//         id: 3,
//         prev: 2,
//         next: 4,
//         image: bannerImg3
//     },
//     {
//         id: 4,
//         prev: 3,
//         next: 5,
//         image: bannerImg4
//     },
//     {
//         id: 5,
//         prev: 4,
//         next: 6,
//         image: bannerImg5
//     },
//     {
//         id: 6,
//         prev: 5,
//         next: 1,
//         image: bannerImg6
//     },
// ]


const CarouselSlider = () => {
    return (
        <div className="lg:mx-20 my-20">
            <div className="carousel w-full h-[600px] rounded">
              <div id={`#slide1`} className="carousel-item relative w-full">
                <img src={bannerImg1} className="w-full object-cover" />
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
                  <a href={`#slide6`} className="btn btn-circle">❮</a> 
                  <a href={`#slide2`} className="btn btn-circle">❯</a>
                </div>
          </div>
          <div id={`#slide2`} className="carousel-item relative w-full">
                <img src={bannerImg2} className="w-full object-cover" />
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
                  <a href={`#slide1`} className="btn btn-circle">❮</a> 
                  <a href={`#slide3`} className="btn btn-circle">❯</a>
                </div>
              </div>
 
            </div>
        </div>
    );
};

export default CarouselSlider;