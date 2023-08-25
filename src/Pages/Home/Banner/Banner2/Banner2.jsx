

const Banner2 = () => {
  return (
    <div className=" my-10">
      <div
        className="hero h-[504px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/84hCWNQ/chef-service.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" p-10 justify-center items-center text-center text-black bg-white ">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
