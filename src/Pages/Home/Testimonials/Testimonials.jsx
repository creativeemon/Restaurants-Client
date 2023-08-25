import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Testimonials = () => {
    return (
        <div className="mb-10">
            <SectionTitle
            heading={"What Our Clients Say-"}
            subHeading={"TESTIMONIALS"}
            ></SectionTitle>

            <div className="text-center">
                 
                <p className="md:w-[50%] mx-auto">Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <h3 className="text-3xl uppercase text-orange-500">JANE DOE</h3>
            </div>

        </div>
    );
};

export default Testimonials;