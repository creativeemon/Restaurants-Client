import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div className="mb-10">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div
        className="hero bg-fixed lg:h-[700px]"
        style={{
          backgroundImage:
          "url(https://i.ibb.co/3y08r3R/featured.jpg)",
          background: "bg-black bg-opacity-20",
        }}
      >
        <div className=" ">
        <div className="max-w-4xl mx-auto  ">
         <div className="md:flex bg-slate-500 bg-opacity-30 justify-center items-center space-x-4 ">
            <div> 
                <img className="md:w-[648px]" src={featuredImg} alt="" />
            </div>
            <div className="text-white md:w-[604px]">
            
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>

         </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
