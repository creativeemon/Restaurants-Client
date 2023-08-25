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
        className="hero lg:h-[700px]"
        style={{
          background: "",
          backgroundImage:
            "url(https://i.ibb.co/3y08r3R/featured.jpg)",
        }}
      >
        <div className=" "></div>
        <div className="max-w-4xl mx-auto  ">
         <div className="md:flex justify-center items-center space-x-4 p-10">
            <div> 
                <img className="" src={featuredImg} alt="" />
            </div>
            <div className="text-black ">
            
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
  );
};

export default Featured;
