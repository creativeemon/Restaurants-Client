import { Helmet } from "react-helmet-async";
import SectionNumber from "../../../Components/SectionTitle/SectionNumber";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2/Banner2";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Category from "../category/category";

const Home = () => {
  return (
    <div>
      {/**************************** React Helmet title Add **********************/}
      <Helmet>
        <title>Restaurant || Home</title>
      </Helmet>
      {/**************************** React Helmet title Add **********************/}

      {/************************* Home Component add ***************************/}
      <Banner></Banner>
      <Category></Category>
      <Banner2></Banner2>
      <PopularMenu></PopularMenu>
      <SectionNumber></SectionNumber>

      <Featured></Featured>
      <Testimonials></Testimonials>
      {/************************* Home Component add ***************************/}

    </div>
  );
};

export default Home;
